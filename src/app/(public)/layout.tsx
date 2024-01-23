'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarItem,
  NavbarMenuItem
} from '@nextui-org/navbar'
import { useState } from 'react'
import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import { Logo } from '../Logo'
import {
  GithubJhan,
  LinkedinJhan,
  VercelHarkaysoft,
  MediumJhan,
  HugginFaceJhan,
  CoffeeJhan
} from '@routes'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown'
import { Suspense } from 'react'
import Loading from '../loading'
import localFont from 'next/font/local'
const HarkaySoftFont = localFont({ src: './Poppins-SemiBold.ttf' })

export default function PublicLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = [
    {
      key: 'educacion',
      label: 'Educación',
      href: '/education'
    },
    {
      key: 'skills',
      label: 'Skills',
      href: '/skills'
    },
    {
      key: 'proyectos',
      label: 'Proyectos',
      href: '/projects'
    },
    {
      key: 'blog',
      label: 'Blog',
      href: MediumJhan,
      isExternal: true
    },
    {
      key: 'generadormapamental',
      label: 'Mapa mental',
      href: '/mapamental'
    }
  ]
  return (
    <main className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <Navbar
        className='bg-light-surface/50 dark:bg-dark-surface/50 text-light-onSurface dark:text-dark-onSurface'
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='sm:hidden'
          />
          <NavbarBrand className='text-light-onSurface dark:text-dark-onSurface'>
            <Link
              href='/'
              className='gap-1 text-light-onSurface dark:text-dark-onSurface'
              onClick={() => setIsMenuOpen(false)}
            >
              <Logo />
              <div>
                <span className='text-light-onSurface dark:text-dark-onSurface text-2xl font-bold leading-[44px]'>
                  jhan
                </span>
                <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
                  gmez
                </span>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify='end' className='gap-1'>
          <NavbarItem className='hidden lg:flex'>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className='text-light-onSurface dark:text-dark-onSurface font-semibold'
                  variant='light'
                >
                  Generadores
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='ver'>
                <DropdownItem key='mapamental' as={Link} href='/mapamental'>
                  Mapa mental
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem className='hidden lg:flex md:flex'>
            <Button
              as={Link}
              className='text-light-onSurface dark:text-dark-onSurface font-semibold'
              href={MediumJhan}
              isExternal
              variant='light'
              startContent={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6v2H5v12h12v-6zM13 3v2h4.586l-7.793 7.793l1.414 1.414L19 6.414V11h2V3z'
                  />
                </svg>
              }
            >
              Blog
            </Button>
          </NavbarItem>
          <NavbarItem className='hidden lg:flex md:flex'>
            <Button
              as={Link}
              className='text-light-onSurface dark:text-dark-onSurface font-semibold'
              href='/education'
              variant='light'
            >
              Educación
            </Button>
          </NavbarItem>
          <NavbarItem className='hidden lg:flex md:flex'>
            <Button
              as={Link}
              className='text-light-onSurface dark:text-dark-onSurface font-semibold'
              href='/skills'
              variant='light'
            >
              Skills
            </Button>
          </NavbarItem>
          <NavbarItem className='hidden lg:flex md:flex'>
            <Button
              as={Link}
              className='text-light-onSurface dark:text-dark-onSurface font-semibold'
              href='/projects'
              variant='light'
            >
              Proyectos
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              className='bg-light-primary dark:bg-dark-primary text-light-onPrimary dark:text-dark-onPrimary font-semibold'
              href='/experience'
              variant='flat'
              onClick={() => setIsMenuOpen(false)}
            >
              Experiencia
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className='bg-light-surface/50 dark:bg-dark-surface/50'>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.key}>
              <Link
                className='w-full font-medium text-light-onSurface dark:text-dark-onSurface'
                href={item.href}
                isExternal={item.isExternal}
                onClick={() => setIsMenuOpen(false)}
                size='lg'
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <footer className='bg-light-surface dark:bg-dark-surface'>
        <div className='container mx-auto py-6 px-[20px] '>
          <hr className='my-6 border-gray-200 dark:border-gray-700 lg:my-8' />
          <div className='w-full relative md:flex md:justify-between'>
            <div className='mb-6 md:mb-0'>
              <Link
                href='/'
                className='w-[230px] h-14 justify-start items-center gap-[5px] inline-flex text-light-onSurface dark:text-dark-onSurface'
              >
                <Logo />
                <div>
                  <span className=' text-2xl font-bold leading-[44px]'>
                    jhan
                  </span>
                  <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
                    gmez
                  </span>
                </div>
              </Link>
            </div>
            <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 '>
              <div>
                <h2 className='mb-6 text-sm font-semibold uppercase text-light-onSurface dark:text-dark-onSurface'>
                  Social
                </h2>
                <ul className='font-medium '>
                  <li className='mb-4'>
                    <Link
                      href={GithubJhan}
                      className='hover:underline text-gray-500 dark:text-gray-400'
                      isExternal
                    >
                      Github
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link
                      href={LinkedinJhan}
                      className='hover:underline text-gray-500 dark:text-gray-400'
                      isExternal
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link
                      href={MediumJhan}
                      className='hover:underline text-gray-500 dark:text-gray-400'
                      isExternal
                    >
                      Medium
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={HugginFaceJhan}
                      className='hover:underline text-gray-500 dark:text-gray-400'
                      isExternal
                    >
                      HugginFace
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold uppercase text-light-onSurface dark:text-dark-onSurface'>
                  Proyectos
                </h2>
                <ul className=''>
                  <li className='mb-4'>
                    <Link
                      href={VercelHarkaysoft}
                      className='hover:underline text-gray-500 dark:text-gray-400 font-medium'
                      isExternal
                    >
                      <span
                        className={`${HarkaySoftFont.className} self-center text-1xl whitespace-nowrap pb-3`}
                      >
                        Harkay
                        <span
                          className={`${HarkaySoftFont.className} text-2xl text-[0.8em]`}
                        >
                          {' '}
                          S O F T
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className='my-6 border-gray-200 dark:border-gray-700 lg:my-8' />
          <div className='sm:flex sm:items-center sm:justify-between'>
            <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
              © 2023{' '}
              <Link href={GithubJhan} className='hover:underline'>
                <span className='text-black text-light-onSurface dark:text-dark-onSurface font-bold leading-[44px]'>
                  jhan
                  <span className='text-light-primary dark:text-dark-primary font-bold leading-[44px]'>
                    gmez
                  </span>
                </span>
              </Link>
              . Todos los derechos reservados.
            </span>
            <div className='flex mt-4 space-x-5 sm:justify-center sm:mt-0'>
              <div className=' hover:text-gray-900 dark:hover:text-white'>
                <Link
                  href={CoffeeJhan}
                  isExternal
                  aria-label='buy me a coffe'
                  className='text-light-onSurface dark:text-dark-onSurface'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='currentColor'
                      d='m20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379c-.197-.069-.42-.098-.57-.241c-.152-.143-.196-.366-.231-.572c-.065-.378-.125-.756-.192-1.133c-.057-.325-.102-.69-.25-.987c-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5c-.318.116-.646.256-.888.501c-.297.302-.393.77-.177 1.146c.154.267.415.456.692.58c.36.162.737.284 1.123.366c1.075.238 2.189.331 3.287.37c1.218.05 2.437.01 3.65-.118c.299-.033.598-.073.896-.119c.352-.054.578-.513.474-.834c-.124-.383-.457-.531-.834-.473c-.466.074-.96.108-1.382.146c-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036c-.243-.036-.484-.08-.724-.13c-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145c.392.085.895.113 1.07.542c.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295a37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06c-.326-.048-.649-.108-.973-.161c-.393-.065-.768-.032-1.123.161c-.29.16-.527.404-.675.701c-.154.316-.199.66-.267 1c-.069.34-.176.707-.135 1.056c.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376a.483.483 0 0 1 .535.53l-.071.697l-1.018 9.907c-.041.41-.047.832-.125 1.237c-.122.637-.553 1.028-1.182 1.171c-.577.131-1.165.2-1.756.205c-.656.004-1.31-.025-1.966-.022c-.699.004-1.556-.06-2.095-.58c-.475-.458-.54-1.174-.605-1.793l-.731-7.013l-.322-3.094c-.037-.351-.286-.695-.678-.678c-.336.015-.718.3-.678.679l.228 2.185l.949 9.112c.147 1.344 1.174 2.068 2.446 2.272c.742.12 1.503.144 2.257.156c.966.016 1.942.053 2.892-.122c1.408-.258 2.465-1.198 2.616-2.657c.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518c.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233c-2.416.359-4.866.54-7.308.46c-1.748-.06-3.477-.254-5.207-.498c-.17-.024-.353-.055-.47-.18c-.22-.236-.111-.71-.054-.995c.052-.26.152-.609.463-.646c.484-.057 1.046.148 1.526.22c.577.088 1.156.159 1.737.212c2.48.226 5.002.19 7.472-.14c.45-.06.899-.13 1.345-.21c.399-.072.84-.206 1.08.206c.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38c0 0 1.243.065 1.658.065c.447 0 1.786-.065 1.786-.065c.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613'
                    />
                  </svg>
                </Link>
              </div>
              <div className=' hover:text-gray-900 dark:hover:text-white'>
                <Link
                  href={HugginFaceJhan}
                  isExternal
                  aria-label='HugginFace'
                  className='text-light-onSurface dark:text-dark-onSurface'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 32 32'
                  >
                    <g fill='currentColor'>
                      <path d='M3 15.999c0-3.67 1.106-6.91 3.235-9.221C8.35 4.48 11.568 3 15.999 3c4.43 0 7.648 1.48 9.764 3.778c2.129 2.311 3.235 5.55 3.235 9.22c0 .421-.015.836-.044 1.244c.33.179.602.447.787.772c.418.05.796.23 1.094.497c.109-.82.163-1.66.163-2.512c0-4.061-1.227-7.821-3.764-10.576C24.684 2.654 20.903 1 16 1C11.095 1 7.313 2.654 4.763 5.423C2.226 8.178 1 11.938 1 15.999c0 .853.054 1.693.163 2.513a1.993 1.993 0 0 1 1.096-.498a2.01 2.01 0 0 1 .784-.77A17.619 17.619 0 0 1 3 15.998m9.668 12.688a4.77 4.77 0 0 1-1.861 1.597c1.557.466 3.29.715 5.192.715c1.902 0 3.635-.25 5.194-.716a4.77 4.77 0 0 1-1.861-1.596a17.07 17.07 0 0 1-3.333.312c-1.198 0-2.308-.108-3.331-.312' />
                      <path d='M7.888 13.338a2 2 0 0 0-.775 2.325a2 2 0 1 1 .775-2.325m17 2.325a2 2 0 0 0-.776-2.325a2 2 0 1 1 .776 2.325M9.349 9.413c-.21.228-.32.53-.367.778a1 1 0 0 1-1.964-.382c.089-.456.31-1.153.858-1.749C8.453 7.431 9.316 7 10.5 7c1.195 0 2.062.452 2.636 1.082c.544.597.77 1.292.85 1.747a1 1 0 0 1-1.971.342a1.546 1.546 0 0 0-.358-.742C11.47 9.222 11.142 9 10.5 9c-.653 0-.972.217-1.151.413m11.001 0c-.21.228-.32.53-.368.778a1 1 0 0 1-1.963-.382c.088-.456.31-1.153.857-1.749C19.453 7.431 20.316 7 21.5 7c1.196 0 2.062.452 2.636 1.082c.544.597.77 1.292.85 1.747a1 1 0 0 1-1.971.342a1.545 1.545 0 0 0-.358-.742C22.47 9.222 22.142 9 21.5 9c-.653 0-.971.217-1.15.413M8.4 14.2a1 1 0 0 1 1.4.2c.298.397 1.992 2.1 6.2 2.1s5.902-1.703 6.2-2.1a1 1 0 1 1 1.6 1.2c-.702.936-3.008 2.9-7.8 2.9s-7.098-1.964-7.8-2.9a1 1 0 0 1 .2-1.4m20.59 4.94a1 1 0 0 0-1.649-.892L23.58 21.54l-.079-.04c0-.413.038-.788.072-1.125c.09-.888.153-1.513-.572-1.875c-1.338-.669-1.952 1.564-2.363 3.743c-.094.496-.32.955-.572 1.392c-1.33 2.303-.066 4.614.935 5.365c1.789 1.342 3.5 1 5 0c.908-.605 2.635-1.82 3.927-2.737a1.116 1.116 0 0 0-1.146-1.904l-.126.064l1.985-1.655a1 1 0 0 0-.782-1.758l.293-.25a1 1 0 0 0-1.16-1.62m-25.982 0a1 1 0 0 1 1.649-.892l3.763 3.292l.079-.04c0-.413-.038-.788-.072-1.125c-.09-.888-.153-1.513.572-1.875c1.338-.669 1.952 1.564 2.363 3.743c.094.496.32.955.572 1.392c1.33 2.303.066 4.614-.935 5.365c-1.79 1.342-3.5 1-5 0c-.908-.605-2.635-1.82-3.927-2.737A1.116 1.116 0 0 1 3.22 24.36l.126.064l-1.985-1.655a1 1 0 0 1 .781-1.758l-.292-.25a1 1 0 0 1 1.16-1.62' />
                    </g>
                  </svg>
                </Link>
              </div>
              <div className='hover:text-gray-900 dark:hover:text-white'>
                <Link
                  href={GithubJhan}
                  isExternal
                  aria-label='github'
                  className='text-light-onSurface dark:text-dark-onSurface'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='currentColor'
                      d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'
                    />
                  </svg>
                </Link>
              </div>
              <div className='hover:text-gray-900 dark:hover:text-white'>
                <Link
                  href={LinkedinJhan}
                  isExternal
                  aria-label='Linkedin'
                  className='text-light-onSurface dark:text-dark-onSurface'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='currentColor'
                      d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
                    />
                  </svg>
                </Link>
              </div>
              <div className='hover:text-gray-900 dark:hover:text-white'>
                <Link
                  href={MediumJhan}
                  isExternal
                  aria-label='Linkedin'
                  className='text-light-onSurface dark:text-dark-onSurface'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <g fill='none'>
                      <path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
                      <path
                        fill='currentColor'
                        d='M8 6a6 6 0 1 1 0 12A6 6 0 0 1 8 6m9 1c1.5 0 2.5 2.239 2.5 5s-1 5-2.5 5s-2.5-2.239-2.5-5s1-5 2.5-5m4 .5c.38 0 .712.827.88 2.246l.047.443l.019.235l.03.494l.01.259l.012.541L22 12l-.002.282l-.012.541l-.01.26l-.03.493l-.02.235l-.045.443c-.169 1.42-.5 2.246-.881 2.246c-.38 0-.712-.827-.88-2.246l-.047-.443a16.683 16.683 0 0 1-.019-.235l-.03-.494a20.863 20.863 0 0 1-.01-.259l-.012-.541v-.564l.012-.541l.01-.26l.03-.493l.02-.235l.045-.443c.169-1.42.5-2.246.881-2.246'
                      />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
