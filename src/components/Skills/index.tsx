import data from './data.json'
import { skillsMap } from '@utils/skillList'

export default function Skills() {
  const { skills } = data
  return (
    <>
      <div className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4 w-full'>
        <h1 className='font-bold text-2xl pb-2'>Skills</h1>
        <h2 className='px-1 font-bold text-1xl mb-2'>Tech Stack</h2>
        <ul className='px-2 flex flex-wrap gap-1'>
          {skills.stack.map((num) => {
            const Component = skillsMap[num]
            return <Component key={num} />
          })}
        </ul>
        <h2 className='px-1 font-bold text-1xl mb-2'>Developer tools</h2>
        <ul className='px-2 flex flex-wrap gap-1'>
          {skills.tools.map((num) => {
            const Component = skillsMap[num]
            return <Component key={num} />
          })}
        </ul>
        <h2 className='px-1 font-bold text-1xl mb-2'>APIs integrations</h2>
        <ul className='px-2 flex flex-wrap gap-1'>
          {skills.api.map((num) => {
            const Component = skillsMap[num]
            return <Component key={num} />
          })}
        </ul>
        <h2 className='px-1 font-bold text-1xl mb-2'>Desarrollo</h2>
        <ul className='px-2 flex flex-wrap gap-1'>
          {skills.others.map((num) => {
            const Component = skillsMap[num]
            return <Component key={num} />
          })}
        </ul>
      </div>
    </>
  )
}
