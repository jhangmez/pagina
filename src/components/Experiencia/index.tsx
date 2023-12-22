import { Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import Link from 'next/link'
import data from './data.json'

export default function Experiencia() {
  return (
    <>
      <div className='dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
        <h1 className='font-bold text-2xl mb-4'>Experiencia</h1>
        <ul>
          {data.experiencias.map((experiencia, index) => (
            <li key={index}>
              <div className='flex flex-row p-4 space-x-4'>
                <div className='flex flex-col items-center'>
                  <Image
                    as={NextImage}
                    width={80}
                    height={80}
                    priority={true}
                    src={experiencia.imagen}
                    alt={experiencia.empresa}
                  />
                  <div className='flex flex-col items-center h-full'>
                    <Divider orientation='vertical' />
                  </div>
                </div>
                <div className='flex flex-col w-full self-center space-y-4'>
                  <div className='flex justify-between'>
                    <Link
                      href={experiencia.enlace}
                      className='flex flex-col w-fit'
                    >
                      <div className='flex items-center'>
                        <div className='flex w-full'>
                          <div className='flex items-center mr-1 hover:underline font-bold text-dark-onPrimary'>
                            {experiencia.empresa}
                          </div>
                        </div>
                      </div>
                      <span className='font-sm font-normal'>
                        {experiencia.duracion}
                      </span>
                      <span className='font-sm font-normal'>
                        {experiencia.ubicacion}
                      </span>
                    </Link>
                  </div>
                  <ul className='flex flex-col space-y-5'>
                    {experiencia.roles.map((role, index) => (
                      <li key={index}>
                        <p className='font-bold  text-dark-onSecondary'>
                          {role.titulo}
                        </p>
                        <p>{role.periodo}</p>
                        <p>{role.ubicacion}</p>
                        <p className='mt-2'>{role.descripcion}</p>
                        <p className='mt-2'>
                          <span className='font-semibold text-dark-onPrimary'>
                            Aptitudes:
                          </span>
                          {role.aptitudes}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className=' bg-gray-100 border rounded shadow-md p-4'>
        <h1 className='font-bold text-2xl mb-4'>Experiencia</h1>
        <ul>
          <li>
            <div className='flex flex-row border rounded shadow-md p-4 space-x-4'>
              <div className='flex flex-col items-center'>
                <Image
                  as={NextImage}
                  width={80}
                  height={80}
                  priority={true}
                  src='/nonfoundCompany.svg'
                  alt='Bartebi Company'
                />
                <Divider orientation='vertical' />
              </div>
              <div className='flex flex-col w-full self-center space-y-4'>
                <div className='flex justify-between'>
                  <Link
                    href='https://www.linkedin.com/search/results/all/?keywords=Bartebi'
                    className='flex flex-col w-full'
                  >
                    <div className='flex items-center'>
                      <div className='flex w-full'>
                        <div className='flex items-center mr-1 hover:underline font-bold'>
                          Bartebi
                        </div>
                      </div>
                    </div>
                    <span className='font-sm font-normal'>
                      Jornada parcial · 5 meses
                    </span>
                    <span className='font-sm font-normal font-black-light'>
                      En remoto
                    </span>
                  </Link>
                </div>
                <ul className='flex flex-col space-y-5'>
                  <li>
                    <p className='font-bold'>React native developer</p>
                    <p>may. 2023 - jun. 2023 · 2 meses </p>
                    <p>Lima, Perú</p>
                  </li>
                  <li>
                    <p className='font-bold'>React developer</p>
                    <p>may. 2023 - jun. 2023 · 2 meses </p>
                    <p>Lima, Perú</p>
                    <p className='mt-2'>
                      Realizamos un software para solucionar problemática de
                      transportes para una empresa Agroindustrial, con
                      tecnologías como React y Node.js.
                    </p>
                    <p className='mt-2'>
                      <span className='font-semibold'>Aptitudes:</span>
                      React Native · Web Services API · React.js · Node.js ·
                      Trabajo en equipo
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className='p-4 bg-gray-100 border rounded shadow-md flex flex-row space-x-4'>
              <div className='flex flex-col items-center w-auto'>
                <Image
                  as={NextImage}
                  width={80}
                  height={80}
                  priority={true}
                  src='/nonfoundCompany.svg'
                  alt='Bartebi Company'
                />
                <Divider orientation='vertical' />
              </div>
              <div className='flex flex-col w-full self-center space-y-4'>
                <div className='flex justify-between'>
                  <Link
                    href='https://www.linkedin.com/search/results/all/?keywords=Limby'
                    className='flex flex-col w-full'
                  >
                    <div className='flex items-center'>
                      <div className='flex w-full'>
                        <div className='flex items-center mr-1 hover:underline font-bold'>
                          Limby
                        </div>
                      </div>
                    </div>
                    <span className='font-sm font-normal'>
                      Jornada parcial · 5 meses
                    </span>
                    <span className='font-sm font-normal font-black-light'>
                      En remoto
                    </span>
                  </Link>
                </div>
                <ul className='flex flex-col space-y-5'>
                  <li>
                    <p className='font-bold'>React Fronted Developer</p>
                    <p>nov. 2022 - mar. 2023 · 5 meses </p>
                    <p>Chiclayo, Lambayeque, Perú</p>
                    <p className='mt-2'>
                      <Link
                        href='https://limby.vercel.app'
                        className='underline '
                      >
                        https://limby.vercel.app
                      </Link>
                    </p>
                    <p className='mt-2'>
                      <span className='font-semibold'>Aptitudes:</span>
                      React.js · Planificación de proyectos · Dirección y
                      desarrollo de equipos de trabajo · Desarrollo de software
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className='p-4 bg-gray-100 border rounded shadow-md flex flex-row space-x-4'>
              <div className='flex flex-col items-center w-auto'>
                <Image
                  as={NextImage}
                  width={80}
                  height={80}
                  priority={true}
                  src='/consigueventasonline_logo.webp'
                  alt='Bartebi Company'
                />
                <Divider orientation='vertical' />
              </div>
              <div className='flex flex-col w-full self-center space-y-4'>
                <div className='flex justify-between'>
                  <Link
                    href='https://www.linkedin.com/company/65487718/'
                    className='flex flex-col w-full'
                  >
                    <div className='flex items-center'>
                      <div className='flex w-full'>
                        <div className='flex items-center mr-1 hover:underline font-bold'>
                          Agencia Consigue Ventas Online
                        </div>
                      </div>
                    </div>
                    <span className='font-sm font-normal'>
                      Jornada parcial · 7 meses
                    </span>
                    <span className='font-sm font-normal font-black-light'>
                      Lima, Perú · En remoto
                    </span>
                  </Link>
                </div>
                <ul className='flex flex-col space-x-5'>
                  <li>
                    <p className='font-bold'>
                      Líder: Analista de documentación
                    </p>
                    <p>Contrato de formación</p>
                    <p>dic. 2022 - feb. 2023 · 3 meses</p>
                    <p className='mt-2'>
                      <span className='font-semibold'>Aptitudes:</span>
                      Tester · Gestión de equipos con miembros de diferentes
                      oficinas · Trello · Resolución de problemas · Resolución
                      creativa de problemas · Gestión de proyectos colaborativa
                      · Trabajo en equipo · Google Docs · Hojas de cálculo de
                      Google
                    </p>
                  </li>
                </ul>
                <ul className='flex flex-col space-x-5'>
                  <li>
                    <p className='font-bold'>
                      Colaborador: Analista de documentación
                    </p>
                    <p>Contrato de prácticas</p>
                    <p>ago. 2022 - dic. 2022 · 5 meses</p>
                    <p className='mt-2'>
                      <span className='font-semibold'>Aptitudes:</span>
                      Microsoft Word · Scrum · Documentación de programas
                      informáticos · Documentación del flujo de procesos ·
                      Documentación de proyectos · Prácticas de documentación ·
                      Microsoft Excel
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div> */}
    </>
  )
}
