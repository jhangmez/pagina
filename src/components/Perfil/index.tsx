'use client'

import Navitem from '@components/Nav/Itemnav'
import Image from 'next/image'
import Link from 'next/link'
import Tonalbutton from '@Buttons/Tonal'
import { GithubJhan, LinkedinJhan, VercelHarkaysoft } from '@routes'

export default function CardWithActionButton() {
  return (
    <div className='container mx-auto lg:px-16'>
      <div className='flex h-full flex-col justify-center px-3 lg:px-0'>
        <div className='flex flex-col lg:flex-row justify-between items-center inline-flex py-10 gap-5'>
          <div className='lg:w-4/12 w-11/12 h-auto py-3 bg-light-surfaceContainer dark:bg-dark-surfaceContainer rounded-[20px] shadow flex-col justify-start items-center gap-2 inline-flex'>
            <div className='px-2 h-auto text-2xl text-light-primary dark:text-dark-primary font-bold'>
              Jhan Gómez P.
            </div>

            <div className='px-2 rounded-xl justify-center items-center flex'>
              <Image
                src='https://media.licdn.com/dms/image/D4E03AQHqh7Y4agbE7g/profile-displayphoto-shrink_800_800/0/1679802304766?e=1703721600&v=beta&t=OUnXeS6zL5SbszflBOsF0DQ6UeabJn2_a_wgRh3buY8'
                alt='Jhangmez Picture'
                className='self-stretch grow shrink basis-0 rounded-xl'
                width={300}
                height={300}
              />
            </div>

            <div className='self-stretch h-[auto] px-2 flex-col justify-center items-start gap-2 flex'>
              <Navitem
                label='LinkedIn'
                icon='mdi:linkedin'
                href={LinkedinJhan}
              />

              <Navitem label='Github' icon='mdi:github' href={GithubJhan} />
            </div>
          </div>
          <div className='lg:w-7/12 grid flex-col text-light-onSurface dark:text-dark-onSurface gap-5'>
            <div className='text-4xl lg:text-5xl font-bold '>
              <span className='text-light-tertiary dark:text-dark-tertiary'>
                React
              </span>{' '}
              Junior Frontend Developer
            </div>
            <div className='text-2xl lg:text-3x1 font-semibold'>
              Objetivos profesionales
            </div>
            <div className='text-1xl lg:text-3x1 font-medium'>
              Desarrollar mis habilidades y conocimientos como desarrollador{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                front-end
              </span>{' '}
              en{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                React
              </span>
              ,{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                Vue
              </span>{' '}
              y{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                Angular
              </span>
              . En el corto plazo, me centraré en desarrollar una aplicación web
              escalable y de alto rendimiento utilizando{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                React
              </span>{' '}
              con{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                Next.js
              </span>
              . En el mediano plazo, espero convertirme en un desarrollador{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                Front-end Senior
              </span>{' '}
              y apoyar a nuevos programadores en tecnologías{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                nuevas
              </span>{' '}
              y{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                escalables
              </span>
              , para contribuir al desarrollo profesional de la comunidad.
              <br></br> Creo que mis habilidades y experiencia me hacen un
              candidato ideal para apoyar como{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                Junior Developer
              </span>{' '}
              en empresas que requieran, ya que estoy familiarizado con las{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                mejores prácticas
              </span>{' '}
              de desarrollo{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                front-end
              </span>
              , tengo experiencia trabajando en equipos de{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                desarrollo ágiles
              </span>{' '}
              y estoy comprometido con el{' '}
              <span className='text-light-primary dark:text-dark-primary'>
                desarrollo profesional continuo
              </span>
              .
            </div>
            <div className='container flex h-full flex-row gap-5'>
              <Link href='mailto:jhangmez.pe@gmail.com' className='w-fit'>
                <Tonalbutton label='Contacto' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
