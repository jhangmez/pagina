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

export default function Header() {
  const showJob = false
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
    // {
    //   key: 'blog',
    //   label: 'Blog',
    //   href: MediumJhan,
    //   isExternal: true
    // },
    // {
    //   key: 'generadormapamental',
    //   label: 'Mapa mental',
    //   href: '/mapamental'
    // },
    {
      key: 'generadormapaconceptual',
      label: 'Mapa conceptual',
      href: '/mapaconceptual'
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
          <NavbarItem className='hidden lg:flex'>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className='text-light-onSurface dark:text-dark-onSurface font-semibold'
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
                  Generadores
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='ver'>
                <DropdownItem
                  aria-label='mapaconceptual'
                  key='mapaconceptual'
                  as={Link}
                  href='/mapaconceptual'
                >
                  Mapa conceptual
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.key}>
              <Link
                className='w-full font-medium text-light-onSurface dark:text-dark-onSurface'
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                size='lg'
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
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
