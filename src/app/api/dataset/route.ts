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
      { from: 'gpt', value: answer + ', ' + newRandomPregunta }
    ]
  })

  return new Response(responseData, {
    status: 200,
    headers: new Headers({
      'Content-Type': json
        ? 'application/json; charset=utf-8'
        : 'text/plain; charset=utf-8'
    })
  })
}
