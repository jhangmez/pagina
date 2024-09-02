'use client'

import { useState, useEffect } from 'react'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Switch } from '@nextui-org/switch'
import { useSearchParams } from 'next/navigation'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown'
import { toast } from 'react-hot-toast'

const initialValue = 'You are a helpful AI assistant.'
const preguntas = [
  '¿Hay algún detalle que quieras conocer más a fondo?',
  '¿Puedo ofrecerte más información sobre esto?',
  '¿Tienes alguna otra duda relacionada con esto?',
  '¿Hay algún aspecto que quieras profundizar más?',
  '¿Te gustaría que te amplíe información sobre esto?',
  '¿Puedo aclarar algún otro punto sobre este tema?',
  '¿Tienes alguna otra pregunta que te gustaría hacer sobre esto?',
  '¿Hay algún detalle adicional que te gustaría conocer?',
  '¿Puedo asistirte con alguna otra consulta sobre esto?',
  '¿Hay algo más que te cause curiosidad sobre este tema?',
  '¿Tienes algún otro aspecto en mente que quieras explorar más?',
  '¿Hay algún otro asunto relacionado que te gustaría tratar?',
  '¿Te gustaría más información sobre algún detalle de esto?',
  '¿Puedo ayudarte con alguna otra pregunta sobre este tema?',
  '¿Hay algo más que te gustaría preguntar sobre esto?',
  '¿Te gustaría seguir hablando de algún aspecto de esto?',
  '¿Puedo proporcionarte más detalles sobre este punto?',
  '¿Hay algún aspecto adicional que quieras discutir?',
  '¿Tienes alguna otra duda relacionada con este tema?',
  '¿Puedo ayudarte con algún otro aspecto de esto?',
  '¿Te gustaría saber más sobre algún detalle de esto?',
  '¿Hay algún punto adicional que te gustaría revisar?',
  '¿Tienes alguna otra consulta que te gustaría hacer sobre esto?',
  '¿Puedo brindarte más información sobre este tema?',
  '¿Hay algún otro aspecto que quieras investigar más a fondo?',
  '¿Te gustaría seguir explorando algún punto de esto?',
  '¿Puedo ayudarte con alguna otra cuestión relacionada con esto?',
  '¿Hay algo más relacionado con este tema que te interese saber?',
  '¿Tienes alguna otra pregunta que quieras hacer sobre este asunto?',
  '¿Hay algún aspecto de esto que te gustaría abordar más?',
  '¿Te gustaría que aclare algún punto relacionado con esto?',
  '¿Hay algún aspecto adicional en el que pueda asistirte?',
  '¿Tienes alguna otra consulta relacionada con esto?',
  '¿Hay algún punto de esto que te gustaría entender mejor?',
  '¿Puedo ofrecerte más información sobre este detalle?',
  '¿Te gustaría seguir explorando este tema?',
  '¿Tienes alguna otra inquietud relacionada con esto que quieras resolver?',
  '¿Hay algún detalle adicional de esto que te gustaría conocer mejor?',
  '¿Puedo ayudarte con alguna otra cuestión sobre este tema?',
  '¿Te interesa saber algo más sobre este aspecto?',
  '¿Hay algún otro detalle sobre esto que te interese explorar?',
  '¿Puedo darte más información relacionada con este tema?',
  '¿Tienes alguna otra duda específica sobre esto?',
  '¿Hay algún punto que te gustaría analizar más en profundidad?',
  '¿Te gustaría conocer más sobre este aspecto en particular?',
  '¿Puedo ayudarte a aclarar algún otro punto de este tema?',
  '¿Tienes alguna otra pregunta que te gustaría formular sobre esto?',
  '¿Hay algún detalle que aún no esté claro y te gustaría saber más?',
  '¿Puedo asistirte con más información sobre este tema?',
  '¿Hay algo más sobre este asunto que te cause curiosidad?',
  '¿Tienes algún otro aspecto de esto en mente que quieras discutir?',
  '¿Hay algún otro punto relacionado con esto que te gustaría tratar?',
  '¿Te gustaría saber más sobre un aspecto específico de esto?',
  '¿Puedo ayudarte a resolver alguna otra duda sobre este tema?',
  '¿Hay algo más que te gustaría preguntar sobre este asunto?',
  '¿Te gustaría que continuemos hablando sobre algún punto de esto?',
  '¿Puedo proporcionarte más detalles sobre este tema?',
  '¿Hay algún aspecto adicional que quieras entender mejor?',
  '¿Tienes alguna otra duda en relación a esto que quieras aclarar?',
  '¿Puedo ayudarte con más información sobre este asunto?',
  '¿Te gustaría saber más sobre algún detalle específico de esto?',
  '¿Hay algún punto adicional que te gustaría conocer más a fondo?',
  '¿Tienes alguna otra consulta específica sobre este tema?',
  '¿Puedo brindarte más información que te ayude con esto?',
  '¿Hay algo más que te gustaría investigar dentro de este tema?',
  '¿Te gustaría seguir explorando algún aspecto de esto?',
  '¿Puedo ayudarte a profundizar en algún otro detalle relacionado?',
  '¿Hay algún aspecto relacionado que aún no hayamos cubierto?',
  '¿Tienes alguna otra pregunta específica sobre este tema?',
  '¿Hay algún aspecto de esto que te gustaría entender mejor?',
  '¿Te gustaría que aclare algún otro detalle relacionado con esto?',
  '¿Hay algún aspecto más en el que pueda asistirte?',
  '¿Tienes alguna otra consulta que quieras hacer sobre este tema?',
  '¿Hay algo más de esto que te gustaría discutir?',
  '¿Puedo ofrecerte más información sobre este punto?',
  '¿Te gustaría seguir profundizando en este tema?',
  '¿Tienes alguna otra inquietud relacionada con esto?',
  '¿Hay algún detalle adicional de este tema que te gustaría conocer?',
  '¿Puedo ayudarte a resolver alguna otra cuestión sobre este asunto?',
  '¿Te interesa saber algo más sobre este aspecto en particular?'
]

export default function GeneratorDataset() {
  const searchParams = useSearchParams()

  const hasQuestion = searchParams.has('question')
  const question = hasQuestion
    ? searchParams.get('question')?.slice(0, 100)
    : ''

  const hasAnswer = searchParams.has('answer')
  const answer = hasAnswer ? searchParams.get('answer')?.slice(0, 100) : ''

  const [inputValue, setInputValue] = useState(initialValue)
  const [pregunta, setPregunta] = useState(question)
  const [respuesta, setRespuesta] = useState(answer)
  const [resultado, setResultado] = useState('')
  const [copiedResult, setCopiedResult] = useState(false)
  const [copiedConversations, setCopiedConversations] = useState(false)
  const [rememberValue, setRememberValue] = useState(false)
  const [randomPregunta, setRandomPregunta] = useState('')
  const [savedConversations, setSavedConversations] = useState('')
  const [rememberConversations, setRememberConversations] = useState(false)

  useEffect(() => {
    const storedValue = localStorage.getItem('generator_dataset_value')
    const storedRemember = localStorage.getItem('generator_dataset_remember')
    const storedConversations = localStorage.getItem('saved_conversations')
    const storedRememberConversations = localStorage.getItem(
      'remember_conversations'
    )

    if (storedRemember === 'true') {
      setRememberValue(true)
      if (storedValue) {
        setInputValue(storedValue)
      }
    }

    if (storedRememberConversations === 'true') {
      setRememberConversations(true)
      if (storedConversations) {
        setSavedConversations(storedConversations)
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
    if (rememberConversations) {
      localStorage.setItem('saved_conversations', savedConversations)
      localStorage.setItem('remember_conversations', 'true')
    } else {
      localStorage.removeItem('saved_conversations')
      localStorage.removeItem('remember_conversations')
    }
  }, [rememberConversations, savedConversations])

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
            {
              from: 'gpt',
              value: respuesta + ', ' + newRandomPregunta
            }
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

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSavedConversations(e.target.value)
  }

  const handlePreguntaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPregunta(e.target.value)
  }

  const handleRespuestaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRespuesta(e.target.value)
  }

  const resetToInitialValue = () => {
    setInputValue(initialValue)
    if (rememberValue) {
      localStorage.setItem('generator_dataset_value', initialValue)
    }
  }

  const saveResult = () => {
    const newConversation = resultado + '\n'
    setSavedConversations((prev) => prev + newConversation)
    if (rememberConversations) {
      localStorage.setItem(
        'saved_conversations',
        savedConversations + newConversation
      )
    }
    toast.success('Resultado guardado exitosamente')
  }

  const downloadConversations = (format: string) => {
    let content = ''
    let filename = ''

    switch (format) {
      case 'jsonl':
        content = savedConversations.split('\n').filter(Boolean).join('\n')
        filename = 'conversations.jsonl'
        break
      case 'json':
        content = JSON.stringify(
          JSON.parse(
            `[${savedConversations.split('\n').filter(Boolean).join(',')}]`
          ),
          null,
          2
        )
        filename = 'conversations.json'
        break
      case 'txt':
        content = savedConversations
        filename = 'conversations.txt'
        break
      default:
        toast.error('Formato no soportado')
        return
    }

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const loadConversations = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const content = event.target?.result as string
        try {
          JSON.parse(`[${content.split('\n').filter(Boolean).join(',')}]`)
          setSavedConversations(content)
          if (rememberConversations) {
            localStorage.setItem('saved_conversations', content)
          }
          toast.success('Conversaciones cargadas exitosamente')
        } catch (error) {
          toast.error('El archivo no está en el formato correcto')
        }
      }
      reader.readAsText(file)
    }
  }

  const handleSwitchChange = (checked: boolean) => {
    setRememberValue(checked)
  }

  const handleSwitchChangeConversations = (checked: boolean) => {
    setRememberConversations(checked)
  }

  const copyToClipboard = async (text: string, isConversations: boolean) => {
    try {
      await navigator.clipboard.writeText(text)
      if (isConversations) {
        setCopiedConversations(true)
        setTimeout(() => setCopiedConversations(false), 2000)
      } else {
        setCopiedResult(true)
        setTimeout(() => setCopiedResult(false), 2000)
      }
    } catch (error) {
      console.error('Error al copiar:', error)
    }
  }

  const deleteConversations = () => {
    setSavedConversations('')
    if (rememberConversations) {
      localStorage.setItem('saved_conversations', '')
    }
    toast.success('Conversaciones borradas exitosamente')
  }

  return (
    <section className='min-h-screen'>
      <div className='container mx-auto px-[20px] pt-10 space-y-3'>
        <Card>
          <CardHeader className='font-bold text-large'>
            Generador de conversaciones estilo ShareGPT
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
              onClick={() => copyToClipboard(resultado, false)}
              placeholder='Resultado'
              classNames={{ label: 'font-semibold' }}
              value={resultado}
              endContent={
                copiedResult ? (
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
                    onClick={() => copyToClipboard(resultado, false)}
                    className='text-sm print:hidden'
                  >
                    Copiar
                  </Button>
                )
              }
            />
          </CardBody>
          <CardFooter>
            <Button
              onClick={saveResult}
              className='bg-light-primary text-light-onPrimary dark:bg-dark-primary dark:text-dark-onPrimary font-semibold'
            >
              Guardar resultado
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className='font-bold text-large'>
            Conversaciones guardadas
          </CardHeader>
          <CardBody>
            <Textarea
              label='Conversaciones guardadas'
              value={savedConversations}
              onChange={handleTextAreaChange}
              placeholder='Acá se renderizarán todas tus conversaciones guardadas'
              endContent={
                copiedConversations ? (
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
                    onClick={() => copyToClipboard(savedConversations, true)}
                    className='text-sm print:hidden'
                  >
                    Copiar
                  </Button>
                )
              }
            />
          </CardBody>
          <CardFooter>
            <Switch
              isSelected={rememberConversations}
              size='sm'
              onValueChange={handleSwitchChangeConversations}
              classNames={{ label: 'inline-flex gap-1' }}
            >
              Recordar <span className='lg:flex hidden'>conversaciones</span>
            </Switch>
          </CardFooter>
          <CardFooter className='gap-2'>
            <Button className='bg-light-primary text-light-onPrimary dark:bg-dark-primary dark:text-dark-onPrimary font-semibold gap-1'>
              <label
                htmlFor='fileInput'
                className='cursor-pointer flex flex-row gap-1'
              >
                Cargar<span className='lg:block hidden'>conversaciones</span>
              </label>
              <input
                id='fileInput'
                type='file'
                accept='.json,.jsonl,.txt'
                onChange={loadConversations}
                style={{ display: 'none' }}
              />
            </Button>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  startContent={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z'
                      />
                    </svg>
                  }
                  className='bg-light-primary text-light-onPrimary dark:bg-dark-primary dark:text-dark-onPrimary font-semibold'
                >
                  Descargar como
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='ver'>
                <DropdownItem
                  key='jsonl'
                  onClick={() => downloadConversations('jsonl')}
                >
                  <p className='font-medium'>JSONL</p>
                </DropdownItem>
                <DropdownItem
                  key='json'
                  onClick={() => downloadConversations('json')}
                >
                  <p className='font-medium'>JSON</p>
                </DropdownItem>
                <DropdownItem
                  key='txt'
                  onClick={() => downloadConversations('txt')}
                >
                  <p className='font-medium'>TXT</p>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button
              onClick={deleteConversations}
              variant='bordered'
              color='danger'
              className='font-medium'
            >
              Borrar conversaciones
            </Button>
          </CardFooter>
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
                isSelected={rememberValue}
                size='sm'
                onValueChange={handleSwitchChange}
              >
                Recordar
              </Switch>
            </div>
          </AccordionItem>
        </Accordion>

        {/* <Card>
          <CardHeader className='font-bold text-large'>
            Documentación
          </CardHeader>
          <CardBody>
            <CardHeader className='font-semibold text-large'>Manual</CardHeader>
            <CardBody></CardBody>
          </CardBody>
          <CardBody>
            <CardHeader className='font-semibold text-large'>API</CardHeader>
          </CardBody>
        </Card> */}
      </div>
    </section>
  )
}
