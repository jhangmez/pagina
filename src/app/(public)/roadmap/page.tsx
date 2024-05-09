'use client'

import { useSearchParams } from 'next/navigation'
import Trabajando from '@components/Trabajando'

export default function Roadmap() {
  const searchParams = useSearchParams()
  let reviews: string[] = []
  let processes: string[] = []
  let completed: string[] = []

  // Intenta obtener el parámetro 'review' y decodificarlo como JSON
  const reviewParam = searchParams.get('review')
  try {
    // Intenta parsear como un array de strings
    reviews = JSON.parse(decodeURIComponent(reviewParam ?? '[]'))
    if (!Array.isArray(reviews)) {
      // Si la conversión no produce un array, asigna un array vacío
      reviews = []
    }
  } catch (error) {
    // Si falla, asigna un array vacío
    reviews = []
  }

  const processesParam = searchParams.get('processes')
  try {
    // Intenta parsear como un array de strings
    processes = JSON.parse(decodeURIComponent(processesParam ?? '[]'))
    if (!Array.isArray(processes)) {
      // Si la conversión no produce un array, asigna un array vacío
      processes = []
    }
  } catch (error) {
    // Si falla, asigna un array vacío
    processes = []
  }

  // Intenta obtener el parámetro 'completed' y decodificarlo como JSON
  const completedParam = searchParams.get('completed')
  try {
    // Intenta parsear como un array de strings
    completed = JSON.parse(decodeURIComponent(completedParam ?? '[]'))
    if (!Array.isArray(completed)) {
      // Si la conversión no produce un array, asigna un array vacío
      completed = []
    }
  } catch (error) {
    // Si falla, asigna un array vacío
    completed = []
  }

  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10 space-y-10'>
        {/* <h2 className='font-bold text-2xl text-light-onSurface dark:text-dark-onSurface'>
          Esta es mi roadmap
        </h2> */}
        <Trabajando />

        <ul className='flex flex-wrap gap-5'>
          <li className='text-light-onSurface dark:text-dark-onSurface'>
            {reviews.length > 0
              ? reviews.map((review, index) => (
                  <ul key={index}>
                    <li>{review}</li>
                  </ul>
                ))
              : null}
          </li>
          <li className='text-light-onSurface dark:text-dark-onSurface'>
            {processes.length > 0
              ? processes.map((progress, index) => (
                  <ul key={index}>
                    <li>{progress}</li>
                  </ul>
                ))
              : null}
          </li>

          <li className='text-light-onSurface dark:text-dark-onSurface'>
            {completed.length > 0
              ? completed.map((complete, index) => (
                  <ul key={index}>
                    <li>{complete}</li>
                  </ul>
                ))
              : null}
          </li>
        </ul>
      </div>
    </section>
  )
}
