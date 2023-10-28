type ButtonProps = {
  label: string
  onClick?: string
  target_blank?: boolean
  icon?: string
}

const Filled: React.FC<ButtonProps> = ({
  label,
  onClick,
  target_blank,
  icon
}) => {
  return (
    <button className='w-[fit] h-10 rounded-[100px] flex-col justify-center items-center gap-2 inline-flex bg-light-primary dark:bg-dark-primary text-light-onPrimary dark:text-dark-onPrimary hover:text-light-onPrimary dark:hover:text-dark-onPrimary'>
      <div className='self-stretch grow shrink basis-0 px-3 py-2.5 justify-center items-center gap-2 inline-flex rounded-[100px] hover:bg-light-onPrimary hover:bg-opacity-10 focus:bg-opacity-12 active:bg-opacity-16 disabled:text-light-onSurface dark:disabled:text-dark-onSurface'>
        <div className='text-center text-sm font-medium leading-tight tracking-tight'>
          {label}
        </div>
      </div>
    </button>
  )
}

export default Filled
