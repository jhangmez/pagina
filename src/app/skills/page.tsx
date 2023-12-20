import {
  Graphql,
  React,
  Typescript,
  API,
  Autentificacion,
  Documentacion,
  Jira,
  Nextjs,
  Nexusjs,
  Nodejs,
  Planificacion,
  Prisma,
  ReactNative,
  S3AWS
} from '@components/Chips'

export default function Skills() {
  return (
    <section className='min-h-screen'>
      <div className='container mx-auto px-[20px]'>
        <p className='text-light-onSurface dark:text-dark-onSurface font-semibold text-2xl mb-5'>
          Hola estas son mis skills :D
        </p>
        <div className='grid gap-2 grid-cols-2'>
          <Graphql />
          <API />
          <Autentificacion />
          <Documentacion />
          <Jira />
          <Nextjs />
          <Nodejs />
          <Prisma />
          <ReactNative />
          <Planificacion />
          <Nexusjs />
          <S3AWS />
          <React />
          <Typescript />
        </div>
      </div>
    </section>
  )
}
