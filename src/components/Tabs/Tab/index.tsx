import React from 'react'

interface TabProps {
  id: string
  title: string
  isActive: boolean
  onClick: (id: string) => void
}

const Tab: React.FC<TabProps> = ({ id, title, isActive, onClick }) => (
  <button
    className={`h-10 gap-2 ${
      isActive
        ? 'bg-opacity-16 bg-light-primary text-light-primary dark:bg-opacity-16 dark:bg-dark-primary dark:text-dark-primary'
        : 'text-light-onSurface hover:text-light-onSurface dark:text-dark-onSurface dark:hover:text-dark-onSurface hover:bg-light-primary hover:bg-opacity-8 focus:bg-opacity-12 dark:hover:bg-dark-primary dark:hover:bg-opacity-8 dark:focus:bg-opacity-12'
    }`}
    onClick={() => onClick(id)}
  >
    <div className='self-stretch grow shrink basis-0 px-3 py-2.5 justify-center items-center gap-2 inline-flex'>
      {title}
    </div>
  </button>
)

export default Tab
