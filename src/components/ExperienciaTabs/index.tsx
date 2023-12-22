'use client'

import React, { useState } from 'react'
import Tabs from '@components/Tabs'
import TabContent from '@components/Tabs/TabContent'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

export default function Experiencia() {
  const tabs = [
    { id: '1', title: 'Profesional' },
    { id: '2', title: 'Freelancer' },
    { id: '3', title: 'Voluntariado' }
  ]
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  return (
    <div className='container  mx-auto lg:px-16 px-[20px]'>
      <div className='text-light-onSurface dark:text-dark-onSurface'>
        <h1 className='text-2xl font-bold mb-5'>Experiencia</h1>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
          <TabContent key='1' id='1' activeTab={activeTab}>
            <Tab1 />
          </TabContent>
          <TabContent key='2' id='2' activeTab={activeTab}>
            <Tab2 />
          </TabContent>
          <TabContent key='3' id='3' activeTab={activeTab}>
            <Tab3 />
          </TabContent>
        </Tabs>
      </div>
    </div>
  )
}
