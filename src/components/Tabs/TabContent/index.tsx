import React from 'react'

interface TabContentProps {
  id: string
  activeTab: string
  children?: React.ReactNode
}

const TabContent: React.FC<TabContentProps> = ({ id, activeTab, children }) => {
  if (id !== activeTab) return null

  return <div>{children}</div>
}

export default TabContent
