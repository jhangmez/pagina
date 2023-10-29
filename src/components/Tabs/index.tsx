import React from 'react'
import Tab from './Tab'

interface TabProps {
  id: string
  title: string
}

interface TabsProps {
  tabs: TabProps[]
  activeTab: string
  setActiveTab: (id: string) => void
  children?: React.ReactNode
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  children
}) => {
  return (
    <div className='lg:container md:container lg:flex md:flex gap-5'>
      <div className='lg:flex md:flex lg:flex-col md:flex-col sm:flex-row  mb-5'>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            isActive={tab.id === activeTab}
            onClick={setActiveTab}
          />
        ))}
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Tabs
