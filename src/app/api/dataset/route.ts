import { preguntas } from '@src/utils/preguntasVarias'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const hasQuestion = searchParams.has('question')
  const question = hasQuestion
    ? searchParams.get('question')?.slice(0, 100)
    : ''

  const hasAnswer = searchParams.has('answer')
  const answer = hasAnswer ? searchParams.get('answer')?.slice(0, 100) : ''

  const hasValue = searchParams.has('value')
  const value = hasValue
    ? searchParams.get('value')?.slice(0, 100)
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
