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
  S3AWS,
  Koyeb,
  Postgresql
} from '@components/Chips'
import type { Metadata } from 'next'
import Head from 'next/head'

const title = 'jhangmez | Skills'
const description = 'Pagina de jhangmez'

export const metadata: Metadata = {
  title,
  description
}
export default function Skills() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <Head>
        <title>Skills</title>
      </Head>
      <div className='container mx-auto px-[20px]'>
        <p className='text-light-onSurface dark:text-dark-onSurface font-semibold text-2xl mb-5'>
          Hola estas son mis skills :D
        </p>
        <div className='grid gap-2 grid-cols-2'>
          <Graphql />
          <API />
          <Autentificacion />
          <ReactNative />
          <Documentacion />
          <Jira />
          <Nextjs />
          <Nodejs />
          <Prisma />
          <Planificacion />
          <Nexusjs />
          <Postgresql />
          <Koyeb />
          <S3AWS />
          <React />
          <Typescript />
        </div>
      </div>
    </section>
  )
}
