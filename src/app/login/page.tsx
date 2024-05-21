// import Form from '@components/(all)/Form'
import { SignIn } from '@components/sign-in'
// import { Link } from '@nextui-org/link'
// import { VercelHarkaysoft } from '@routes'
// import localFont from 'next/font/local'
// import { Logo } from '@logo'
// import { LogoUwu } from '@src/app/LogoUwu'
// const harkayFont = localFont({ src: '../../../public/Poppins-SemiBold.ttf' })
export default function Login() {
  return (
    <main className='flex flex-col md:flex-row-reverse md:h-screen bg-light-surface dark:bg-dark-surface h-screen'>
      <section className='justify-center px-4 md:px-0 md:flex md:w-2/3 md:border-r'>
        <div className='w-full max-w-sm py-4 mx-auto my-auto min-w-min md:py-9 md:w-7/12'>
          <h2 className='text-xl font-semibold md:text-2xl text-light-onSurface dark:text-dark-onSurface'>
            Ingresar
          </h2>
          <p className='text-sm text-light-onSurface dark:text-dark-onSurface pb-2'>
            Usa tu nombre de usuario y contraseña para ingresar.
          </p>
          <SignIn />
          {/* <Form type='login' /> */}
        </div>
      </section>
    </main>
  )
}
