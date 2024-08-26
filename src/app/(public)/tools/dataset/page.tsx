'use client'

import { useState, useEffect } from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { toast } from 'react-hot-toast'
import { Divider } from '@nextui-org/react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Switch } from '@nextui-org/switch'

const initialValue = 'You are a helpful AI assistant.'
const preguntas = [
  '¿Hay algo más en lo que te gustaría profundizar?',
  '¿Te gustaría saber más sobre algún otro aspecto?',
  '¿Puedo ayudarte con alguna otra duda?',
  '¿Te interesa conocer algo más?',
  '¿Hay algún otro tema que te gustaría discutir?',
  '¿Hay algo más que te gustaría que aclaremos?',
  '¿Tienes alguna otra consulta que te gustaría hacer?',
  '¿Hay algo más que te gustaría saber?',
  '¿Puedo brindarte más información sobre algo?',
  '¿Te gustaría hablar sobre algo más?',
  '¿Hay algún otro detalle que te interese?',
  '¿Tienes alguna otra pregunta en mente?',
  '¿Puedo asistirte con alguna otra duda?',
  '¿Hay algo más que te gustaría preguntar?',
  '¿Puedo ayudarte con alguna otra inquietud?',
  '¿Te gustaría indagar en algún otro aspecto?',
  '¿Tienes alguna otra curiosidad?',
  '¿Te gustaría obtener más información sobre algún otro punto?',
  '¿Hay alguna otra cosa en la que pueda ayudarte?',
  '¿Tienes algún otro tema del que te gustaría hablar?',
  '¿Hay algo más que te gustaría explorar?',
  '¿Puedo ofrecerte más detalles sobre algo?',
  '¿Tienes alguna otra inquietud sobre la que te gustaría hablar?',
  '¿Hay algún otro aspecto que te interese discutir?',
  '¿Te gustaría que te ampliara información sobre algún tema?',
  '¿Puedo aclarar algún otro punto para ti?',
  '¿Tienes alguna otra pregunta sobre la que te gustaría profundizar?',
  '¿Hay algún otro detalle que te gustaría conocer?',
  '¿Puedo asistirte con alguna otra consulta?',
  '¿Hay algo más que te cause curiosidad?',
  '¿Tienes algún otro tema en mente del que te gustaría saber más?',
  '¿Hay algún otro asunto que te gustaría tratar?',
  '¿Te gustaría más información sobre algún otro aspecto?',
  '¿Puedo ayudarte con alguna otra pregunta?',
  '¿Hay algo más que te gustaría preguntar?',
  '¿Te gustaría hablar de algún otro tema?',
  '¿Puedo proporcionarte más detalles sobre algún otro punto?',
  '¿Hay algo más que quieras discutir?',
  '¿Tienes alguna otra duda en mente?',
  '¿Puedo ayudarte con algún otro aspecto?',
  '¿Te gustaría saber más sobre algún otro tema?',
  '¿Hay algún otro detalle que te gustaría revisar?',
  '¿Tienes alguna otra consulta que te gustaría hacer?',
  '¿Puedo brindarte más información sobre algún otro asunto?',
  '¿Hay algo más que te gustaría investigar?',
  '¿Te gustaría que hablemos de algún otro punto?',
  '¿Puedo ayudarte con alguna otra cuestión?',
  '¿Hay algo más que te interese saber?',
  '¿Tienes alguna otra pregunta que quieras hacer?',
  '¿Hay algún otro tema que te gustaría abordar?',
  '¿Te gustaría que te aclare alguna otra cosa?',
  '¿Hay algún otro aspecto en el que pueda asistirte?',
  '¿Tienes alguna otra consulta en mente?',
  '¿Hay algo más que te gustaría entender mejor?',
  '¿Puedo ofrecerte más información sobre otro punto?',
  '¿Te gustaría que exploremos algún otro tema?',
  '¿Tienes alguna otra inquietud que quieras resolver?',
  '¿Hay algún otro detalle que te gustaría conocer mejor?',
  '¿Puedo ayudarte con alguna otra cuestión?',
  '¿Te interesa saber algo más sobre algún otro tema?'
]

export default function GeneratorDataset() {
  const [inputValue, setInputValue] = useState(initialValue)
  const [pregunta, setPregunta] = useState('')
  const [respuesta, setRespuesta] = useState('')
  const [resultado, setResultado] = useState('')
  const [copied, setCopied] = useState(false)
  const [rememberValue, setRememberValue] = useState(false)
  const [randomPregunta, setRandomPregunta] = useState('')

  useEffect(() => {
    const storedValue = localStorage.getItem('generator_dataset_value')
    const storedRemember = localStorage.getItem('generator_dataset_remember')

    if (storedRemember === 'true') {
      setRememberValue(true)
      if (storedValue) {
        setInputValue(storedValue)
      }
    }
  }, [])

  useEffect(() => {
    if (rememberValue) {
      localStorage.setItem('generator_dataset_value', inputValue)
      localStorage.setItem('generator_dataset_remember', 'true')
    } else {
      localStorage.removeItem('generator_dataset_value')
      localStorage.removeItem('generator_dataset_remember')
    }
  }, [rememberValue, inputValue])

  useEffect(() => {
    const updateResultado = async () => {
      try {
        const newRandomPregunta =
          preguntas[Math.floor(Math.random() * preguntas.length)]
        setRandomPregunta(newRandomPregunta)
        const resultadoObj = {
          conversations: [
            { from: 'system', value: inputValue + '\n' },
            { from: 'human', value: pregunta },
            { from: 'gpt', value: respuesta + ' ' + newRandomPregunta }
          ]
        }
        setResultado(JSON.stringify(resultadoObj))
      } catch (error) {
        console.error('Error al actualizar resultado:', error)
      }
    }

    updateResultado()
  }, [inputValue, pregunta, respuesta])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handlePreguntaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPregunta(e.target.value)
  }

  const handleRespuestaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRespuesta(e.target.value)
  }

  const handleSwitchChange = (checked: boolean) => {
    setRememberValue(checked)
  }

  const resetToInitialValue = () => {
    setInputValue(initialValue)
    if (rememberValue) {
      localStorage.setItem('generator_dataset_value', initialValue)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(resultado)
      const newRandomPregunta =
        preguntas[Math.floor(Math.random() * preguntas.length)]
      setRandomPregunta(newRandomPregunta)
      const newResultadoObj = {
        conversations: [
          { from: 'system', value: inputValue + '\n' },
          { from: 'human', value: pregunta },
          { from: 'gpt', value: respuesta + ' ' + newRandomPregunta }
        ]
      }
      setResultado(JSON.stringify(newResultadoObj))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Error al copiar:', error)
    }
  }

  return (
    <section className='min-h-screen'>
      <div className='container mx-auto px-[20px] pt-10 space-y-3'>
        <Card>
          <CardHeader className='font-bold text-large'>
            Conversaciones
          </CardHeader>
          <CardBody>
            <Input
              id='pregunta'
              labelPlacement='outside'
              label='Pregunta'
              placeholder='Escribir pregunta'
              classNames={{ label: 'font-semibold' }}
              className='mb-2'
              value={pregunta}
              onChange={handlePreguntaChange}
            />
            <Input
              id='respuesta'
              labelPlacement='outside'
              label='Respuesta'
              placeholder='Escribir respuesta'
              classNames={{ label: 'font-semibold' }}
              value={respuesta}
              onChange={handleRespuestaChange}
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader className='font-bold text-large'>Resultado</CardHeader>
          <CardBody>
            <Input
              isReadOnly
              onClick={copyToClipboard}
              placeholder='Resultado'
              classNames={{ label: 'font-semibold' }}
              value={resultado}
              endContent={
                copied ? (
                  <Button
                    variant='light'
                    className='text-sm print:hidden'
                    endContent={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fill='currentColor'
                          d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z'
                        />
                      </svg>
                    }
                  >
                    Copiado
                  </Button>
                ) : (
                  <Button
                    variant='light'
                    endContent={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fill='none'
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 9V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15'
                        />
                      </svg>
                    }
                    onClick={copyToClipboard}
                    className='text-sm print:hidden'
                  >
                    Copiar
                  </Button>
                )
              }
            />
          </CardBody>
        </Card>

        <Accordion variant='shadow'>
          <AccordionItem
            key='1'
            aria-label='Valores predeterminados'
            title='Valores predeterminados'
            classNames={{ title: 'font-bold' }}
          >
            <div className='flex flex-row gap-2'>
              <Input
                value={inputValue}
                onChange={handleInputChange}
                className='max-w-xs'
                classNames={{ input: 'font-medium' }}
                endContent={
                  <Button
                    isIconOnly
                    onClick={resetToInitialValue}
                    variant='light'
                    isDisabled={rememberValue || inputValue === initialValue}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20'
                      />
                    </svg>
                  </Button>
                }
              />
              <Switch
                defaultSelected={rememberValue}
                size='sm'
                onValueChange={handleSwitchChange}
              >
                Recordar
              </Switch>
            </div>
            {/* <p className='font-bold'>{defaultValue}</p> */}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
