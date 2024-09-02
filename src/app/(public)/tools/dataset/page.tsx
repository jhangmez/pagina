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
import { preguntas } from '@src/utils/preguntasVarias'

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
          <CardFooter className='gap-2 lg:flex-row md:flex-row flex-col'>
            <Button className='bg-light-primary text-light-onPrimary dark:bg-dark-primary dark:text-dark-onPrimary font-semibold gap-1 w-full'>
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
                  className='bg-light-primary text-light-onPrimary dark:bg-dark-primary dark:text-dark-onPrimary font-semibold w-full'
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
              variant='light'
              onClick={deleteConversations}
              className='font-medium border-light-error text-light-error border-2 rounded-xl w-full'
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

        <Card className='bg-light-surfaceContainer dark:bg-light-secondaryContainer'>
          <CardHeader as={'h1'} className='font-bold text-large'>
            Documentación
          </CardHeader>
          <CardBody>
            <p className='font-medium'>
              Esta herramienta te permite generar conversaciones simuladas al
              estilo de ShareGPT. Solo necesitas ingresar una pregunta y una
              respuesta, y la herramienta te entregará la conversación en un
              formato JSON estructurado y listo para usar.
            </p>
            <div className='py-2'>
              <h2 className='font-semibold text-large py-2'>
                Funcionalidades principales
              </h2>
              <ul className='mx-2 space-y-3'>
                <li id='generar'>
                  <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary'>
                    Generador de Conversaciones
                  </h2>
                  <p className='font-medium pt-1'>
                    Para generar una conversación, simplemente ingresa tu
                    pregunta y la respuesta correspondiente. El resultado
                    aparecerá en el cuadro de abajo, el cual se puede modificar
                    y copiar.
                  </p>
                </li>
                <li id='cargar'>
                  <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary'>
                    Cargar Conversaciones
                  </h2>
                  <p className='font-medium pt-1'>
                    Si tienes conversaciones guardadas, puedes cargarlas desde
                    un arhcivo utilizando la función de carga. Este solo
                    aceptará formatos que hayan sido descargados desde esta
                    página.
                  </p>
                </li>
                <li id='descargar'>
                  <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary'>
                    Descargar Conversaciones
                  </h2>
                  <p className='font-medium pt-1'>
                    También puedes descargar tus conversaciones en varios
                    formatos: JSON, JSONL o TXT. Esto te permite guardar tus
                    conversaciones y usarlas cuando las necesites.
                  </p>
                </li>
                <li id='acceso'>
                  <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary'>
                    Acceso a Conversaciones a través de URL
                  </h2>
                  <p className='font-medium py-1'>
                    Puedes acceder directamente a una conversación específica
                    utilizando la siguiente estructura de URL:
                  </p>
                  <code className='bg-light-surface p-2 rounded-md'>
                    /tools/dataset?question=tu_pregunta_aqui&answer=tu_respuesta_aqui
                  </code>
                  <p className='font-medium py-1'>Ejemplo:</p>
                  <code className='bg-light-surface p-2 rounded-md'>
                    https://jhangmez.xyz/tools/dataset?question=Cuanto%20es%202%20más%202&answer=Es%204
                  </code>
                </li>
              </ul>
            </div>
            <div className='py-2'>
              <h2 className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary'>
                Acceso a Conversaciones a través de la API
              </h2>
              <p className='mt-2 font-medium'>
                Si necesitas integrar esta funcionalidad en otra aplicación,
                puedes hacerlo utilizando la API que proporciona la herramienta.
                La estructura es similar a la de las URLs directas.
              </p>
              <ul className='mx-2 space-y-3'>
                <li id='ejemplo_api'>
                  <p className='font-semibold text-lg text-light-primary dark:text-dark-onPrimary my-3'>
                    Ejemplo de Endpoint API:
                  </p>
                  <code className='bg-light-surface p-2 rounded-md'>
                    GET
                    https://jhangmez.xyz/api/dataset?question=tu_pregunta_aqui&answer=tu_respuesta_aqui
                  </code>
                </li>
                <li id='parametros'>
                  <p className='font-bold mt-4'>Parámetros:</p>
                  <table className='w-full border-collapse border border-light-outline mt-2 mb-4'>
                    <thead>
                      <tr>
                        <th className='border border-light-outline p-2 bg-dark-surface/10'>
                          Attribute
                        </th>
                        <th className='border border-light-outline p-2 bg-dark-surface/10'>
                          Type
                        </th>
                        <th className='border border-light-outline p-2 bg-dark-surface/10'>
                          Description
                        </th>
                        <th className='border border-light-outline p-2 bg-dark-surface/10'>
                          Default
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-light-background'>
                      <tr>
                        <td className='border border-light-outline p-2'>
                          <code>question</code>
                        </td>
                        <td className='border border-light-outline p-2'>
                          string
                        </td>
                        <td className='border border-light-outline p-2'>
                          La pregunta que deseas convertir en una conversación.
                        </td>
                        <td className='border border-light-outline p-2'>N/A</td>
                      </tr>
                      <tr>
                        <td className='border border-light-outline p-2'>
                          <code>answer</code>
                        </td>
                        <td className='border border-light-outline p-2'>
                          string
                        </td>
                        <td className='border border-light-outline p-2'>
                          La respuesta a la pregunta, que se integrará en la
                          conversación.
                        </td>
                        <td className='border border-light-outline p-2'>N/A</td>
                      </tr>
                      <tr>
                        <td className='border border-light-outline p-2'>
                          <code>json</code>
                        </td>
                        <td className='border border-light-outline p-2'>
                          boolean
                        </td>
                        <td className='border border-light-outline p-2'>
                          Si esta en <code className='mx-1'>true</code> la
                          salida tendrá formato json.
                        </td>
                        <td className='border border-light-outline p-2'>
                          false
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}
