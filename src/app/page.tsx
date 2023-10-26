'use client'

import React, { useState } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Tabs from '@components/Tabs'
import TabContent from '@components/Tabs/TabContent'

export default function Home() {
  const tabs = [
    { id: '1', title: 'Profesional' },
    { id: '2', title: 'Freelancer' },
    { id: '3', title: 'Voluntariado' }
  ]
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  return (
    <main className='w-screen h-screen'>
      <div className='bg-light-surface dark:bg-dark-surface '>
        <Header />
      </div>

      {/* <Link
        href='/'
        className='justify-start items-center gap-[5px] inline-flex fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      >
        <Icon
          icon='material-symbols:sentiment-sad-outline'
          width='28'
          height='28'
          className='text-black dark:text-white '
        />
        <div>
          <span className='text-black dark:text-white text-2xl font-bold leading-[44px]'>
            Página{' '}
          </span>
          <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
            en construcción
          </span>
        </div>
      </Link> */}

      {/* <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
        {tabs.map((tab) => (
          <TabContent key={tab.id} id={tab.id} activeTab={activeTab}>
            {tab.title}
          </TabContent>
        ))}
      </Tabs> */}
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
          <TabContent key='1' id='1' activeTab={activeTab}>
            <div>
              <h1 style={{ fontSize: '24px', textTransform: 'uppercase' }}>
                Experiencia Profesional
              </h1>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Bartebi</h2>
              <p style={{ fontSize: '16px', fontStyle: 'italic' }}>
                Posición: React Developer
              </p>
              <p style={{ fontSize: '16px' }}>Responsabilidades:</p>
              <ul style={{ fontSize: '16px' }}>
                <li>Desarrollo de aplicaciones web</li>
                <li>Mantenimiento de la base de código</li>
                <li>
                  Colaboración en el diseño de la arquitectura del software
                </li>
              </ul>
            </div>
          </TabContent>
          <TabContent key='2' id='2' activeTab={activeTab}>
            <div>
              <h1 style={{ fontSize: '24px', textTransform: 'uppercase' }}>
                Experiencia como Freelancer
              </h1>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Limby</h2>
              <p style={{ fontSize: '16px', fontStyle: 'italic' }}>
                Posición: React Developer
              </p>
              <p style={{ fontSize: '16px' }}>Responsabilidades:</p>
              <ul style={{ fontSize: '16px' }}>
                <li>Desarrollo de aplicaciones web</li>
                <li>Mantenimiento de la base de código</li>
                <li>
                  Colaboración en el diseño de la arquitectura del software
                </li>
              </ul>
            </div>
          </TabContent>
          <TabContent key='3' id='3' activeTab={activeTab}>
            <div>
              <h1 style={{ fontSize: '24px', textTransform: 'uppercase' }}>
                Experiencia como Voluntariado
              </h1>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                HarkaySoft
              </h2>
              <p style={{ fontSize: '16px', fontStyle: 'italic' }}>
                Posición: React Developer
              </p>
              <p style={{ fontSize: '16px' }}>Responsabilidades:</p>
              <ul style={{ fontSize: '16px' }}>
                <li>Desarrollo de aplicaciones web</li>
                <li>Mantenimiento de la base de código</li>
                <li>
                  Colaboración en el diseño de la arquitectura del software
                </li>
              </ul>
            </div>
          </TabContent>
        </Tabs>

        <Footer />
      </div>
    </main>
  )
}
