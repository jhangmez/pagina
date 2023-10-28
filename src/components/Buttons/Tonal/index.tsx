type ButtonProps = {
  label: string
  onClick?: string
  target_blank?: boolean
  icon?: string
}

const Tonal: React.FC<ButtonProps> = ({
  label,
  onClick,
  target_blank,
  icon
}) => {
  return (
    <button className='w-[fit] h-10 rounded-[100px] bg-light-secondaryContainer dark:bg-dark-secondaryContainer flex-col justify-center items-center gap-2 inline-flex text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer hover:text-light-onSecondaryContainer disabled:text-light-onSurface'>
      <div className='self-stretch grow shrink basis-0 px-3 py-2.5 justify-center items-center gap-2 inline-flex rounded-[100px] hover:bg-light-secondaryContainer hover:bg-opacity-8 focus:bg-opacity-12 active:bg-opacity-16'>
        <div className='text-center text-sm font-medium leading-tight tracking-tight'>
          {label}
        </div>
      </div>
    </button>
  )
}

export default Tonal
