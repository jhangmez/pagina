import { preguntas } from '@src/utils/preguntasVarias'

type Conversation = {
  from: 'system' | 'human' | 'gpt'
  value: string
}

type ConversationInput = {
  question: string
  answer: string
}

type RequestParams = {
  question?: string
  answer?: string
  value?: string
  json?: boolean
  utf8?: boolean
  finalquestions?: boolean
}

function getRandomPregunta(): string {
  return preguntas[Math.floor(Math.random() * preguntas.length)]
}

function processConversation(
  conversation: ConversationInput[],
  systemValue: string,
  finalquestions: boolean
): Conversation[] {
  const processedConversation: Conversation[] = [
    { from: 'system', value: systemValue }
  ]

  conversation.forEach((item) => {
    processedConversation.push(
      { from: 'human', value: item.question.slice(0, 500) },
      {
        from: 'gpt',
        value:
          item.answer.slice(0, 500) +
          (finalquestions ? ', ' + getRandomPregunta() : '')
      }
    )
  })

  return processedConversation
}

function getParamsFromUrl(url: string): RequestParams {
  const { searchParams } = new URL(url)
  return {
    question: searchParams.get('question')?.slice(0, 500) || undefined,
    answer: searchParams.get('answer')?.slice(0, 500) || undefined,
    value: searchParams.get('value')?.slice(0, 500) || undefined,
    json: searchParams.get('json') === 'true',
    utf8: searchParams.get('utf8') !== 'false',
    finalquestions: searchParams.get('finalquestions') !== 'false'
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const hasQuestion = searchParams.has('question')
  const question = hasQuestion
    ? searchParams.get('question')?.slice(0, 500)
    : ''

  const hasAnswer = searchParams.has('answer')
  const answer = hasAnswer ? searchParams.get('answer')?.slice(0, 500) : ''

  const hasValue = searchParams.has('value')
  const value = hasValue
    ? searchParams.get('value')?.slice(0, 500)
    : 'You are a helpful AI assistant.'

  const json = searchParams.has('json')
    ? searchParams.get('json') === 'true'
    : false

  const utf8 = searchParams.get('utf8') !== 'false'

  const finalquestions = searchParams.get('finalquestions') !== 'false'

  if (!question || !answer) {
    return Response.json(
      {
        error:
          !question && !answer
            ? 'Datos incompletos | 😄 jhangmez'
            : !question
            ? 'No se ha escrito una pregunta | 😄 jhangmez'
            : 'No se ha escrito una respuesta | 😄 jhangmez'
      },
      { status: 400 }
    )
  }

  const newRandomPregunta =
    preguntas[Math.floor(Math.random() * preguntas.length)]
  const responseData = JSON.stringify({
    conversations: [
      { from: 'system', value: value + '\n' },
      { from: 'human', value: question },
      {
        from: 'gpt',
        value: answer + (finalquestions ? ', ' + newRandomPregunta : '')
      }
    ]
  })

  const contentType = json ? 'application/json' : 'text/plain'
  const charset = utf8 ? '; charset=utf-8' : ''

  return new Response(responseData, {
    status: 200,
    headers: new Headers({ 'Content-Type': contentType + charset })
  })
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type')

  if (contentType !== 'application/json') {
    return new Response('Content-Type must be application/json', {
      status: 400
    })
  }

  const urlParams = getParamsFromUrl(request.url)
  const body: RequestParams | ConversationInput[][] = await request.json()

  const value =
    urlParams.value ||
    (Array.isArray(body) ? undefined : body.value) ||
    'You are a helpful AI assistant.\n'
  const json =
    urlParams.json || (Array.isArray(body) ? false : body.json === true)
  const utf8 =
    urlParams.utf8 ?? (Array.isArray(body) ? true : body.utf8 !== false)
  const finalquestions =
    urlParams.finalquestions ??
    (Array.isArray(body) ? true : body.finalquestions !== false)

  let responseData: string

  if (Array.isArray(body)) {
    // Manejar múltiples conversaciones
    const processedConversations = body.map((conversation) =>
      processConversation(conversation, value, finalquestions)
    )

    responseData = processedConversations
      .map((conv) => JSON.stringify({ conversations: conv }))
      .join('\n')
  } else {
    // Manejar una sola conversación
    const question = urlParams.question || body.question?.slice(0, 500) || ''
    const answer = urlParams.answer || body.answer?.slice(0, 500) || ''

    if (!question || !answer) {
      return Response.json(
        {
          error:
            !question && !answer
              ? 'Datos incompletos | 😄 jhangmez'
              : !question
              ? 'No se ha escrito una pregunta | 😄 jhangmez'
              : 'No se ha escrito una respuesta | 😄 jhangmez'
        },
        { status: 400 }
      )
    }

    const processedConversation = processConversation(
      [{ question, answer }],
      value,
      finalquestions
    )
    responseData = JSON.stringify({ conversations: processedConversation })
  }

  const contentTypeResponse = json ? 'application/json' : 'text/plain'
  const charset = utf8 ? '; charset=utf-8' : ''

  return new Response(responseData, {
    status: 200,
    headers: new Headers({ 'Content-Type': contentTypeResponse + charset })
  })
}
