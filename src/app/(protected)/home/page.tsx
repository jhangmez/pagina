'use client'

import { trpc } from '@utils/trpc'

export default function Home() {
  const { data, isLoading, error, isError } = trpc.user.saludo.useQuery()
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        <h2 className='font-semibold text-lg text-light-onSurface dark:text-dark-onSurface pt-4'>
          {isLoading ? (
            <p>Cargando...</p>
          ) : data && data.length > 0 ? (
            <ul>{data}</ul>
          ) : (
            <p>No hay datos disponibles.</p>
          )}
        </h2>
        <p className='font-medium text-light-onSurface dark:text-dark-onSurface pt-1'>
          Al utilizar este sitio web, usted acepta las prácticas descritas en
          esta política de privacidad.
        </p>
      </div>
    </section>
  )
}
