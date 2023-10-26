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
    <div>
      <div className='flex '>
        {tabs.map((tab) => (
          <Tab
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
