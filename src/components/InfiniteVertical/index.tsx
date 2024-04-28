import { skillsComponents } from '@utils/skillList'

export default function Skills() {
  return (
    <div className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
      <ul
        className='flex select-none items-center justify-center md:justify-start animate-infinite-scroll [&_li]:mx-8'
        aria-hidden='true'
      >
        {skillsComponents.map((SkillComponent, index) => (
          <li key={index}>
            <SkillComponent />
          </li>
        ))}
      </ul>
      <ul
        className='flex select-none items-center justify-center md:justify-start animate-infinite-scroll [&_li]:mx-8'
        aria-hidden='true'
      >
        {skillsComponents.map((SkillComponent, index) => (
          <li key={index}>
            <SkillComponent />
          </li>
        ))}
      </ul>
    </div>
  )
}
