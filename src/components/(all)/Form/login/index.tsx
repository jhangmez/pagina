'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { Spinner } from '@nextui-org/spinner'
import { Link } from '@nextui-org/link'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  return (
    <form
      className='flex flex-col space-y-4 px-2 py-8 sm:px-2'
      onSubmit={(e) => {
        e.preventDefault()
        setLoading(true)
        signIn('credentials', {
          redirect: false,
          username: e.currentTarget.username.value,
          password: e.currentTarget.password.value
          // @ts-ignore
        }).then(({ error }) => {
          if (error) {
            setLoading(false)
            toast.error(error)
          } else {
            router.refresh()
            router.push('/home')
          }
        })
      }}
    >
      <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-2 flex-col'>
        <label
          htmlFor='username'
          className='block text-xs text-light-onSurface dark:text-dark-onSurface uppercase'
        >
          Nombre de usuario
        </label>
        <Input
          id='username'
          name='username'
          isRequired
          type='text'
          autoComplete='username'
          placeholder='Escribe tu nombre de usuario'
          endContent={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              className='text-2xl text-default-400 pointer-events-none flex-shrink-0'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4'
              />
            </svg>
          }
        />
      </div>
      <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-2 flex-col'>
        <label
          htmlFor='password'
          className='block text-xs text-light-onSurface dark:text-dark-onSurface uppercase'
        >
          Contraseña
        </label>
        <Input
          id='password'
          name='password'
          required
          placeholder='Escribe tu contraseña'
          endContent={
            <Button
              className='focus:outline-none'
              type='button'
              isIconOnly
              size='sm'
              variant='light'
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 24 24'
                  className='text-2xl text-default-400 pointer-events-none'
                >
                  <path
                    fill='currentColor'
                    d='M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  className='text-2xl text-default-400 pointer-events-none'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M12 17.5c-3.8 0-7.2-2.1-8.8-5.5H1c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5h-2.2c-1.6 3.4-5 5.5-8.8 5.5'
                  />
                </svg>
              )}
            </Button>
          }
          type={isVisible ? 'text' : 'password'}
        />
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />

      <div className='w-fill flex-col justify-center gap-5 items-center inline-flex'>
        <Button isDisabled={loading} color='primary' type='submit'>
          {loading ? (
            <Spinner color='warning' />
          ) : (
            <p className='text-light-onPrimary'>Ingresar</p>
          )}
        </Button>
        <p className='text-center text-light-onSurface dark:text-dark-onSurface'>
          No tienes cuenta? {''}
          <Link
            href='/demo'
            className='font-medium text-light-primary dark:text-dark-primary'
          >
            Crea una cuenta
          </Link>{' '}
          gratis.
        </p>
      </div>
    </form>
  )
}
