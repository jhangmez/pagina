'use client'

import Navitem from '@components/Nav/Itemnav'
import Image from 'next/image'

import { GithubJhan, LinkedinJhan, VercelHarkaysoft } from '@routes'

export default function CardWithActionButton() {
  return (
    <div className='container mx-auto px-[20px]'>
      <div className='flex flex-col lg:flex-row justify-between items-center inline-flex py-10 gap-5 '>
        <div className='lg:w-3/12 md:w-7/12 h-auto py-3 bg-light-surfaceContainer dark:bg-dark-surfaceContainer rounded-[20px] shadow flex-col justify-start items-center gap-2 inline-flex'>
          <div className='px-2 h-auto text-2xl text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant font-bold'>
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
            <Navitem label='LinkedIn' icon='mdi:linkedin' href={LinkedinJhan} />

            <Navitem label='Github' icon='mdi:github' href={GithubJhan} />
          </div>
        </div>

        <div className='lg:w-7/12 text-5xl font-bold text-light-onSurface dark:text-dark-onSurface'>
          React Junior Developer
        </div>
      </div>
    </div>
  )
}
