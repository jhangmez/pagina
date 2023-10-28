'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'

type ButtonProps = {
  label: string
  onClick?: string
  target_blank?: boolean
  icon?: string
  href: string
}

const Itemnav: React.FC<ButtonProps> = ({
  label,
  onClick,
  target_blank,
  icon,
  href
}) => {
  return (
    <Link
      href={`${href}`}
      target='_blank'
      className='w-full h-14 rounded-[100px] justify-start items-center gap-3 inline-flex text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'
    >
      <div className='grow text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant shrink basis-0 self-stretch pl-4 pr-6 py-4 justify-start items-center gap-3 flex rounded-[100px] hover:bg-light-primary hover:bg-opacity-8 focus:bg-opacity-12 active:bg-opacity-16'>
        <Icon icon={`${icon}`} width={24} />
        <div className='w-full text-sm font-medium leading-tight tracking-tight'>
          {label}
        </div>
      </div>
    </Link>
  )
}

export default Itemnav
