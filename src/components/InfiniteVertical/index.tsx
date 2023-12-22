import {
  Graphql,
  React,
  Typescript,
  API,
  Autentificacion,
  Documentacion,
  Jira,
  Nextjs,
  Nexusjs,
  Nodejs,
  Planificacion,
  Prisma,
  ReactNative,
  S3AWS,
  Koyeb,
  Postgresql
} from '@components/Chips'

const skillsComponents = [
  Graphql,
  API,
  Autentificacion,
  ReactNative,
  Documentacion,
  Jira,
  Nextjs,
  Prisma,
  Planificacion,
  Nexusjs,
  Postgresql,
  Koyeb,
  S3AWS,
  React,
  Typescript
]

export default function Skills() {
  return (
    <div
      x-data='{}'
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
      })"
      className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'
    >
      <ul
        x-ref='logos'
        className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
        aria-hidden='true'
      >
        {skillsComponents.map((SkillComponent, index) => (
          <li key={index}>
            <SkillComponent />
          </li>
        ))}
      </ul>
      <ul
        x-ref='logos'
        className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
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
