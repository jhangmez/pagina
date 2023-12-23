import data from './data.json'
export default function Objetivos() {
  return (
    <>
      <div className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4 w-full'>
        <h1 className='font-bold text-2xl mb-4'>Objetivos profesionales</h1>
        <ul>
          <li className='font-medium'>
            <ul>
              Ingeniero de sistemas con pasión por la programación y la
              innovación. Actualmente, me encuentro a dos semestres de graduarme
              de la carrera de Ingeniería de Sistemas en la Universidad Nacional
              Pedro Ruíz Gallo. A lo largo de mi formación, he desarrollado
              habilidades en el desarrollo de software, la investigación, la
              gestión de proyectos y el trabajo en equipo.
            </ul>{' '}
            <ul>
              Soy un autodidacta que siempre está dispuesto a aprender cosas
              nuevas. Me gusta investigar y experimentar con nuevas tecnologías
              para encontrar soluciones innovadoras a los problemas. También
              tengo un fuerte sentido de responsabilidad y compromiso con la
              calidad de mi trabajo.
            </ul>{' '}
            <ul>
              Me considero una persona adaptable y con capacidad de trabajar en
              entornos dinámicos y multiculturales. Me encanta compartir ideas y
              aprender de otras culturas.
            </ul>{' '}
            <ul>
              En el futuro, espero trabajar en una empresa de tecnología donde
              pueda contribuir al desarrollo de productos. También me gustaría
              liderar un equipo de ingenieros y técnicos innovadores y
              motivados.
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}
