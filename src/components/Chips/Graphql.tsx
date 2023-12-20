import { Chip } from '@nextui-org/react'

export const Graphql = () => (
  <Chip
    startContent={
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='m12 5.37l-.44-.06L6 14.9c.24.21.4.48.47.78h11.06c.07-.3.23-.57.47-.78l-5.56-9.59zM6.6 16.53l4.28 2.53c.29-.27.69-.43 1.12-.43c.43 0 .83.16 1.12.43l4.28-2.53zM12 22a1.68 1.68 0 0 1-1.68-1.68l.09-.56l-4.3-2.55c-.31.36-.76.58-1.27.58a1.68 1.68 0 0 1-1.68-1.68c0-.79.53-1.45 1.26-1.64V9.36c-.83-.11-1.47-.82-1.47-1.68A1.68 1.68 0 0 1 4.63 6c.55 0 1.03.26 1.34.66l4.41-2.53l-.06-.45c0-.93.75-1.68 1.68-1.68c.93 0 1.68.75 1.68 1.68l-.06.45l4.41 2.53c.31-.4.79-.66 1.34-.66a1.68 1.68 0 0 1 1.68 1.68c0 .86-.64 1.57-1.47 1.68v5.11c.73.19 1.26.85 1.26 1.64a1.68 1.68 0 0 1-1.68 1.68c-.51 0-.96-.22-1.27-.58l-4.3 2.55l.09.56A1.68 1.68 0 0 1 12 22M10.8 4.86L6.3 7.44l.02.24c0 .71-.44 1.32-1.06 1.57l.03 5.25zm2.4 0l5.51 9.64l.03-5.25c-.62-.25-1.06-.86-1.06-1.57l.02-.24z'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-graphql/90 text-light-onGraphql'
  >
    Graphql
  </Chip>
)
