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
import { Button } from '@nextui-org/button'
import { Logo } from '@logo'
import { LogoUwu } from '@src/app/LogoUwu'
import { Link } from '@nextui-org/link'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown'
import { useUwuMode } from '@contexts/uwu'
import { Divider } from '@nextui-org/divider'

export default function Header() {
  const showJob = false
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = [
    {
      key: 'educacion1',
      label: 'Educación',
      href: '/education',
      section: 'Sobre mí'
      //   visible: true,
    },
    {
      key: 'skills1',
      label: 'Skills',
      href: '/skills',
      section: 'Sobre mí'
      //   visible: true,
    },
    {
      key: 'proyectos1',
      label: 'Proyectos',
      href: '/projects',
      //   visible: true,
      section: 'Sobre mí'
    },
    {
      key: 'certificaciones1',
      label: 'Certificaciones',
      href: '/certifications',
      //   visible: true,
      section: 'Sobre mí'
    },
    {
      key: 'freelance1',
      label: 'Freelance',
      href: '/freelance',
      //   visible: true,
      section: 'Sobre mí'
    },
    // {
    //   key: 'yo',
    //   label: 'Yo',
    //   href: '/me',
    //   section: 'Sobre mí',
    //   visible: false,
    // },
    {
      key: 'generadormapaconceptual1',
      label: 'Mapa conceptual',
      href: '/tools/mapaconceptual',
      section: 'Herramientas'
    },
    {
      key: 'generadorvoicetospeec1',
      label: 'De tu voz a texto',
      href: '/tools/voicetospeech',
      section: 'Herramientas'
    },
    {
      key: 'generadorgradiente',
      label: 'Gradientes background',
      href: '/tools/gradientcolor',
      section: 'Herramientas'
    },
    {
      key: 'generadordataset',
      label: 'Generador de Dataset',
      href: '/tools/dataset',
      section: 'Herramientas'
    },
    // {
    //   key: 'generadorroadmap',
    //   label: 'Roadmap',
    //   href: '/roadmap',
    //   section: 'Herramientas'
    // },
    {
      key: 'pedircv1',
      label: 'Descargar CV',
      href: '/contact#cv',
      section: 'Contacto'
    },
    {
      key: 'contacto1',
      label: 'Contacto',
      href: '/contact',
      section: 'Contacto'
    }
  ]
  const { isUwuMode } = useUwuMode()

  return (
    <>
      <Navbar
        classNames={{
          base: 'bg-light-surface/50 dark:bg-dark-surface/50 text-light-onSurface dark:text-dark-onSurface',
          content: '',
          wrapper: 'container mx-auto px-[20px]  max-w-auto'
        }}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className='print:hidden'
        shouldHideOnScroll
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='sm:hidden'
          />
          <NavbarBrand className='text-light-onSurface dark:text-dark-onSurface'>
            <Link
              href={isUwuMode ? '/?uwu' : '/'}
              className='gap-1 text-light-onSurface dark:text-dark-onSurface'
              onClick={() => setIsMenuOpen(false)}
            >
              {isUwuMode ? <LogoUwu /> : <Logo />}
              <div>
                <span className='text-light-onSurface dark:text-dark-onSurface text-2xl font-bold leading-[44px]'>
                  jhan
                </span>
                <span
                  className={`${
                    isUwuMode
                      ? 'text-light-tertiary dark:text-dark-tertiary'
                      : 'text-light-primary dark:text-dark-primary'
                  } text-2xl font-bold leading-[44px]`}
                >
                  gmez
                </span>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify='end' className='gap-1'>
          <NavbarItem className='hidden lg:flex md:flex'>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className='text-light-onSurface dark:text-dark-onSurface font-semibold pl-2 pr-3 gap-1'
                  variant='light'
                  startContent={
                    <>
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
                    </>
                  }
                >
                  Herramientas
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='ver'>
                <DropdownItem
                  aria-label='mapaconceptual'
                  key='mapaconceptual'
                  as={Link}
                  href='/tools/mapaconceptual'
                >
                  <p className='font-medium'>Mapa conceptual</p>
                </DropdownItem>
                <DropdownItem
                  aria-label='voicetospeech'
                  key='voicetospeech'
                  as={Link}
                  href='/tools/voicetospeech'
                >
                  <p className='font-medium'>De tu voz a texto</p>
                </DropdownItem>
                <DropdownItem
                  aria-label='gradientes'
                  key='gradientes'
                  as={Link}
                  href='/tools/gradientcolor'
                >
                  <p className='font-medium'>Gradientes background</p>
                </DropdownItem>
                <DropdownItem
                  aria-label='datasetgenerator'
                  key='dataset'
                  as={Link}
                  href='/tools/dataset'
                >
                  <p className='font-medium'>Generador de Dataset</p>
                </DropdownItem>
                {/* <DropdownItem aria-label='cv' key='cv' as={Link} href='/cv'>
                  <p className='font-medium'>Currículum</p>
                </DropdownItem>
                <DropdownItem
                  aria-label='roadmap'
                  key='roadmap'
                  as={Link}
                  href='/roadmap'
                >
                  <p className='font-medium'>Roadmap</p>
                </DropdownItem> */}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem className='hidden lg:flex md:flex'>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className='text-light-onSurface dark:text-dark-onSurface font-semibold pl-2 pr-3 gap-1'
                  variant='light'
                  startContent={
                    <>
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
                    </>
                  }
                >
                  Sobre mí
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='ver'>
                <DropdownItem
                  aria-label='Educación'
                  key='Educación'
                  as={Link}
                  href='/education'
                >
                  <p className='font-medium'>Educación</p>
                </DropdownItem>
                <DropdownItem
                  aria-label='skills'
                  key='Skills'
                  as={Link}
                  href='/skills'
                >
                  <p className='font-medium'>Skills</p>
                </DropdownItem>
                <DropdownItem
                  aria-label='proyectos'
                  key='proyectos'
                  as={Link}
                  href='/projects'
                >
                  <p className='font-medium'>Proyectos</p>
                </DropdownItem>
                <DropdownItem
                  aria-label='certificados'
                  key='certificados'
                  as={Link}
                  href='/certifications'
                >
                  <p className='font-medium'>Certificaciones</p>
                </DropdownItem>
                <DropdownItem
                  aria-label='freelance'
                  key='freelance'
                  as={Link}
                  href='/freelance'
                >
                  <p className='font-medium'>Freelance</p>
                </DropdownItem>
                {/* <DropdownItem aria-label='yo' key='yo' as={Link} href='/me'>
                  <p className='font-medium'>Yo</p>
                </DropdownItem> */}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem className='hidden lg:flex md:flex'>
            <Button
              as={Link}
              className='text-light-onSurface dark:text-dark-onSurface font-semibold'
              href='/contact'
              variant='light'
            >
              Contacto
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              className={`${
                isUwuMode
                  ? 'bg-light-tertiary dark:bg-dark-tertiary text-light-onTertiary dark:text-dark-onTertiary'
                  : 'bg-light-primary dark:bg-dark-primary text-light-onPrimary dark:text-dark-onPrimary'
              }  font-semibold lg:p-3 md:lg-3 p-2`}
              href='/experience'
              variant='flat'
              onClick={() => setIsMenuOpen(false)}
            >
              Experiencia
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className='bg-light-surface/50 dark:bg-dark-surface/50'>
          {menuItems.map((item, index) => {
            // Verifica si el índice es 0 o si el section del elemento actual es diferente al del elemento anterior
            if (index === 0 || item.section !== menuItems[index - 1].section) {
              return (
                <>
                  <div className='flex items-center'>
                    <p className='text-light-onSurface/80 dark:text-dark-onSurface/80 text-sm whitespace-nowrap pr-2'>
                      {item.section}
                    </p>
                    <Divider className='shrink border-solid border-light-outline dark:border-dark-outline' />
                  </div>
                  <Link
                    key={item.key}
                    className='w-full font-medium text-light-onSurface dark:text-dark-onSurface'
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    size='lg'
                  >
                    {item.label}
                  </Link>
                </>
              )
            }
            // Si el section es el mismo que el anterior, solo se renderiza el Link
            return (
              <Link
                className='w-full font-medium text-light-onSurface dark:text-dark-onSurface'
                href={item.href}
                key={item.key}
                onClick={() => setIsMenuOpen(false)}
                size='lg'
              >
                {item.label}
              </Link>
            )
          })}
        </NavbarMenu>
      </Navbar>
      {showJob && (
        <nav
          className={`fixed top-16 left-0 w-full bg-light-surface/50 dark:bg-dark-surface/50 z-40 backdrop-blur-lg backdrop-saturate-150 ${
            isMenuOpen && 'hidden'
          }`}
        >
          <h1 className='text-light-onBackground dark:text-dark-onBackground font-semibold text-center'>
            🚀I&apos;m looking for a job!
          </h1>
        </nav>
      )}
    </>
  )
}
