'use client'

import React, { useState } from 'react'
import Tabs from '@components/Tabs'
import TabContent from '@components/Tabs/TabContent'

export default function Experiencia() {
  const tabs = [
    { id: '1', title: 'Profesional' },
    { id: '2', title: 'Freelancer' },
    { id: '3', title: 'Voluntariado' }
  ]
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  return (
    <div className='text-light-onSurface dark:text-dark-onSurface'>
      <h1 className='text-2xl font-bold '>Experiencia</h1>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
        <TabContent key='1' id='1' activeTab={activeTab}>
          <h2 className='text-lg font-bold '>Bartebi</h2>
          <p className='text-sm font-medium '>Posición: React Developer</p>
          <p className='text-sm font-medium '>Responsabilidades:</p>
          <ul className='list-disc list-inside text-sm font-medium '>
            <li>Desarrollo de aplicaciones web</li>
            <li>Mantenimiento de la base de código</li>
            <li>Colaboración en el diseño de la arquitectura del software</li>
          </ul>
        </TabContent>
        <TabContent key='2' id='2' activeTab={activeTab}>
          <h2 className='text-lg font-bold '>Limby</h2>
          <p className='text-sm font-medium '>Posición: React Developer</p>
          <p className='text-sm font-medium '>Responsabilidades:</p>
          <ul className='list-disc list-inside text-sm font-medium '>
            <li>Desarrollo de aplicaciones web</li>
            <li>Mantenimiento de la base de código</li>
            <li>Colaboración en el diseño de la arquitectura del software</li>
          </ul>
        </TabContent>
        <TabContent key='3' id='3' activeTab={activeTab}>
          <h2 className='text-lg font-bold '>HarkaySoft</h2>
          <p className='text-sm font-medium '>Posición: React Developer</p>
          <p className='text-sm font-medium '>Responsabilidades:</p>
          <ul className='list-disc list-inside text-sm font-medium '>
            <li>Desarrollo de aplicaciones web</li>
            <li>Mantenimiento de la base de código</li>
            <li>Colaboración en el diseño de la arquitectura del software</li>
          </ul>
        </TabContent>
      </Tabs>
    </div>
  )
}
