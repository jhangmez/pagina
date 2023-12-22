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

export const Postgresql = () => (
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
          d='M23.56 14.723a.527.527 0 0 0-.057-.12c-.139-.262-.477-.341-1.007-.231c-1.654.34-2.294.13-2.526-.02c1.342-2.048 2.445-4.522 3.041-6.83c.272-1.05.798-3.523.122-4.73a1.564 1.564 0 0 0-.15-.236C21.693.91 19.8.025 17.51.001c-1.495-.016-2.77.346-3.116.479a9.449 9.449 0 0 0-.516-.082a8.044 8.044 0 0 0-1.312-.127c-1.182-.019-2.203.264-3.05.84C8.66.79 4.729-.534 2.296 1.19C.935 2.153.309 3.873.43 6.304c.041.818.507 3.334 1.243 5.744c.46 1.506.938 2.702 1.433 3.582c.553.994 1.126 1.593 1.714 1.79c.448.148 1.133.143 1.858-.729a55.982 55.982 0 0 1 1.945-2.206c.435.235.906.362 1.39.377a.057.057 0 0 0 0 .004a11.031 11.031 0 0 0-.247.305c-.339.43-.41.52-1.5.745c-.31.064-1.134.233-1.146.811a.591.591 0 0 0 .091.327c.227.423.922.61 1.015.633c1.335.333 2.505.092 3.372-.679c-.017 2.231.077 4.418.345 5.088c.221.553.762 1.904 2.47 1.904c.25 0 .526-.03.829-.094c1.782-.382 2.556-1.17 2.855-2.906c.15-.87.402-2.875.539-4.101c.017-.07.036-.12.057-.136c0 0 .07-.048.427.03a.367.367 0 0 0 .044.007l.254.022l.015.001c.847.039 1.911-.142 2.531-.43c.644-.3 1.806-1.033 1.595-1.67M2.37 11.876c-.744-2.435-1.178-4.885-1.212-5.571c-.109-2.172.417-3.683 1.562-4.493c1.837-1.299 4.84-.54 6.108-.13l-.01.01C6.795 3.734 6.843 7.226 6.85 7.44c0 .082.006.199.016.36c.034.586.1 1.68-.074 2.918c-.16 1.15.194 2.276.973 3.089c.08.084.165.163.252.237c-.347.371-1.1 1.193-1.903 2.158c-.568.682-.96.551-1.088.508c-.392-.13-.813-.587-1.239-1.322c-.48-.839-.963-2.032-1.415-3.512m6.007 5.088a1.626 1.626 0 0 1-.432-.178c.089-.039.237-.09.483-.14c1.284-.265 1.482-.451 1.915-1a7.52 7.52 0 0 1 .367-.443a.355.355 0 0 0 .074-.13c.17-.151.272-.11.436-.042c.156.065.308.26.37.475c.03.102.062.295-.045.445c-.904 1.266-2.222 1.25-3.168 1.013m2.094-3.988l-.052.14c-.133.357-.257.689-.334 1.004c-.667-.002-1.317-.288-1.81-.803c-.628-.655-.913-1.566-.783-2.5c.183-1.308.116-2.447.08-3.059l-.013-.22c.296-.262 1.666-.996 2.643-.772c.446.102.718.406.83.928c.585 2.704.078 3.83-.33 4.736a8.784 8.784 0 0 0-.23.546m7.364 4.572c-.017.177-.036.376-.062.596l-.146.438a.355.355 0 0 0-.018.108c-.006.475-.054.649-.115.87a4.798 4.798 0 0 0-.18 1.057c-.11 1.414-.878 2.227-2.417 2.556c-1.515.325-1.784-.496-2.02-1.221a6.582 6.582 0 0 0-.078-.227c-.215-.586-.19-1.412-.157-2.555c.016-.561-.025-1.901-.33-2.646c.004-.293.01-.591.019-.892a.353.353 0 0 0-.016-.113a1.493 1.493 0 0 0-.044-.208c-.122-.428-.42-.786-.78-.935c-.142-.059-.403-.167-.717-.087c.067-.276.183-.587.309-.925l.053-.142c.06-.16.134-.325.213-.5c.426-.948 1.01-2.246.376-5.178c-.237-1.098-1.03-1.634-2.232-1.51c-.72.075-1.38.366-1.709.532a5.672 5.672 0 0 0-.196.104c.092-1.106.439-3.174 1.736-4.482a4.03 4.03 0 0 1 .303-.276a.353.353 0 0 0 .145-.064c.752-.57 1.695-.85 2.802-.833c.41.007.802.034 1.174.081c1.94.355 3.244 1.447 4.036 2.383c.814.962 1.255 1.931 1.431 2.454c-1.323-.134-2.223.127-2.68.78c-.992 1.418.544 4.172 1.282 5.496c.135.242.252.452.289.54c.24.583.551.972.778 1.256c.07.087.138.171.189.245c-.4.116-1.12.383-1.055 1.717a35.18 35.18 0 0 1-.084.815c-.046.208-.07.46-.1.766m.89-1.621c-.04-.832.27-.919.597-1.01a2.857 2.857 0 0 0 .135-.041a1.202 1.202 0 0 0 .134.103c.57.376 1.583.421 3.007.134c-.202.177-.519.4-.953.601c-.41.19-1.096.333-1.747.364c-.72.034-1.086-.08-1.173-.151m.57-9.271a7.25 7.25 0 0 1-.105 1.001c-.055.358-.112.728-.127 1.177c-.014.436.04.89.093 1.33c.107.887.216 1.8-.207 2.701a3.527 3.527 0 0 1-.188-.385a7.57 7.57 0 0 0-.325-.617c-.616-1.104-2.057-3.69-1.32-4.744c.38-.543 1.342-.566 2.179-.463m.228 7.013a12.376 12.376 0 0 0-.085-.107l-.035-.044c.726-1.2.584-2.387.457-3.439c-.052-.432-.1-.84-.088-1.222c.013-.407.066-.755.118-1.092c.064-.415.13-.844.111-1.35a.559.559 0 0 0 .012-.19c-.046-.486-.6-1.938-1.73-3.253a7.803 7.803 0 0 0-2.688-2.04A9.251 9.251 0 0 1 17.62.746c2.052.046 3.675.814 4.824 2.283a.908.908 0 0 1 .067.1c.723 1.356-.276 6.275-2.987 10.54m-8.816-6.116c-.025.18-.31.423-.621.423a.582.582 0 0 1-.081-.006a.797.797 0 0 1-.506-.315c-.046-.06-.12-.178-.106-.285a.223.223 0 0 1 .093-.149c.118-.089.352-.122.61-.086c.316.044.642.193.61.418m7.93-.411c.011.08-.049.2-.153.31a.722.722 0 0 1-.408.223a.546.546 0 0 1-.075.005c-.293 0-.541-.234-.56-.371c-.024-.177.264-.31.56-.352c.298-.042.612.009.636.185'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-postgresql/90 text-light-onPostgresql'
  >
    Postgresql
  </Chip>
)

export const React = () => (
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
          d='M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-react/90 text-light-onReact'
  >
    React
  </Chip>
)

export const Typescript = () => (
  <Chip
    startContent={
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <g
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        >
          <path d='M15 17.5c.32.32.754.5 1.207.5h.543c.69 0 1.25-.56 1.25-1.25v-.25a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 1-1.5-1.5v-.25c0-.69.56-1.25 1.25-1.25h.543c.453 0 .887.18 1.207.5M9 12h4m-2 0v6' />
          <path d='M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2' />
        </g>
      </svg>
    }
    variant='flat'
    className='bg-light-typescript/90 text-light-onTypescript'
  >
    Typescript
  </Chip>
)
export const ReactNative = () => (
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
          d='M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-react/90 text-light-onReact'
  >
    React Native
  </Chip>
)

export const Nodejs = () => (
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
          d='M12 23.956c-.342 0-.66-.089-.957-.243l-3.029-1.738c-.455-.242-.227-.33-.09-.374c.614-.198.728-.242 1.366-.595c.068-.044.16-.022.228.022l2.323 1.343c.09.044.205.044.273 0l9.087-5.084c.09-.044.136-.132.136-.242V6.899c0-.11-.045-.198-.136-.242l-9.087-5.061c-.091-.044-.205-.044-.273 0L2.754 6.657c-.091.044-.137.154-.137.242v10.146c0 .088.046.198.137.242l2.482 1.387c1.344.66 2.186-.11 2.186-.88V7.78c0-.132.114-.264.274-.264h1.161c.137 0 .273.11.273.264v10.013c0 1.739-.979 2.751-2.687 2.751c-.524 0-.934 0-2.095-.55l-2.391-1.32A1.847 1.847 0 0 1 1 17.067V6.921c0-.66.364-1.276.957-1.606L11.044.23a2.095 2.095 0 0 1 1.912 0l9.088 5.084c.592.33.956.946.956 1.606v10.146c0 .66-.364 1.276-.956 1.607l-9.087 5.083a2.4 2.4 0 0 1-.957.198m2.801-6.977c-3.985 0-4.805-1.76-4.805-3.257c0-.132.114-.264.273-.264h1.184c.137 0 .25.088.25.22c.183 1.166.707 1.738 3.121 1.738c1.913 0 2.733-.418 2.733-1.408c0-.572-.228-.99-3.211-1.276c-2.483-.243-4.031-.77-4.031-2.685c0-1.783 1.548-2.84 4.145-2.84c2.915 0 4.35.969 4.532 3.082a.347.347 0 0 1-.069.198c-.045.044-.113.088-.182.088h-1.184a.265.265 0 0 1-.25-.198c-.274-1.21-.98-1.607-2.847-1.607c-2.096 0-2.346.704-2.346 1.233c0 .638.296.836 3.12 1.188c2.801.352 4.122.858 4.122 2.75c-.023 1.938-1.662 3.038-4.555 3.038'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-node/90 text-light-onNode'
  >
    Node.js
  </Chip>
)

export const Nextjs = () => (
  <Chip
    startContent={
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 15 15'
      >
        <path
          fill='currentColor'
          d='m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-next/90 text-light-onNext'
  >
    Next.js
  </Chip>
)

export const API = () => (
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
          d='m12 14l-2-2l2-2l2 2zM9.875 8.125l-2.5-2.5L12 1l4.625 4.625l-2.5 2.5L12 6zm-4.25 8.5L1 12l4.625-4.625l2.5 2.5L6 12l2.125 2.125zm12.75 0l-2.5-2.5L18 12l-2.125-2.125l2.5-2.5L23 12zM12 23l-4.625-4.625l2.5-2.5L12 18l2.125-2.125l2.5 2.5z'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-secondary/90 text-light-onSecondary'
  >
    API Web services
  </Chip>
)

export const Nexusjs = () => (
  <Chip
    startContent={
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 300 300'
      >
        <path
          fill='currentColor'
          d=' M90.151947,210.262695   C83.159737,214.842758 75.975998,216.564758 68.169151,214.111252   C56.966389,210.590485 51.355057,200.761841 53.043541,187.841156   C54.283264,178.354492 64.082390,170.058167 74.510765,170.085892   C77.960205,170.095062 79.855721,168.864426 81.674591,166.006027   C90.347954,152.375641 99.352806,138.955917 107.993958,125.305664   C108.983131,123.743080 109.157021,120.933846 108.486176,119.166885   C103.270630,105.429497 109.428833,91.628700 122.834740,87.617538   C131.370453,85.063568 142.228073,88.171524 146.742477,94.461060   C153.282669,103.572952 154.012802,114.079636 148.127258,122.118050   C146.491241,124.352501 146.830994,125.689369 147.865036,127.741791   C154.340714,140.595108 160.691635,153.511215 167.130875,166.383011   C169.574646,171.267975 177.829376,171.761978 180.908966,167.260452   C182.117371,165.494095 183.308823,163.715866 184.487366,161.929443   C185.660141,160.151749 186.807022,158.356979 188.298752,156.055115   C192.503067,158.772659 196.569183,161.400909 201.299698,164.458588   C198.765289,168.610443 196.128860,172.488663 193.998428,176.627365   C193.092941,178.386414 192.410828,181.008560 193.051895,182.697800   C198.402756,196.797638 193.233337,208.877106 179.180023,214.343323   C168.967758,218.315475 154.951385,211.586243 150.881409,201.144348   C147.843719,193.350876 149.491943,186.393845 153.182419,179.399033   C153.928650,177.984634 154.188904,175.628922 153.526810,174.262772   C147.176682,161.159988 140.496002,148.217514 134.127792,135.123199   C132.894348,132.586990 131.384949,131.641098 128.774734,131.999908   C125.990265,132.382660 123.240974,130.781326 120.858513,134.711807   C112.745125,148.096848 103.953812,161.075027 95.256073,174.098190   C93.618675,176.549866 93.201416,178.140228 94.835419,181.041595   C100.497726,191.095749 98.618935,201.872025 90.151947,210.262695  z'
        />
        <path
          fill='currentColor'
          d=' M216.997345,141.043549   C212.896851,148.278900 212.897324,148.278198 206.328064,143.846649   C204.294540,142.474854 202.257660,141.108063 199.611374,139.328049   C201.780441,135.870316 203.687408,132.478104 205.943817,129.336899   C208.016891,126.450874 208.465698,124.235817 206.502579,120.678185   C199.428848,107.858978 204.197250,94.498268 217.504364,88.227119   C225.680908,84.373825 239.383560,87.870956 244.494354,95.115402   C251.088852,104.462967 250.380920,116.689491 243.276459,124.335754   C238.567581,129.403763 232.922684,131.547714 226.237595,132.131210   C224.426620,132.289261 222.464691,133.688980 221.084915,135.041870   C219.468246,136.627029 218.411636,138.783417 216.997345,141.043549  M224.865189,117.864288   C229.901474,117.900917 233.944427,115.841934 234.393509,110.676735   C234.616287,108.114334 232.870193,104.705292 230.925293,102.779839   C227.564163,99.452301 221.742355,100.674706 219.261124,104.504120   C216.100922,109.381439 218.021957,114.521523 224.865189,117.864288  z'
        />
        <path fill='#000000' opacity='1.000000' stroke='none' />
      </svg>
    }
    variant='flat'
    className='bg-light-nexus/90 text-light-onNexus'
  >
    Nexus.js
  </Chip>
)

export const Prisma = () => (
  <Chip
    startContent={
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 256 310'
      >
        <path
          fill='currentColor'
          d='M254.313 235.519L148 9.749A17.063 17.063 0 0 0 133.473.037a16.87 16.87 0 0 0-15.533 8.052L2.633 194.848a17.465 17.465 0 0 0 .193 18.747L59.2 300.896a18.13 18.13 0 0 0 20.363 7.489l163.599-48.392a17.929 17.929 0 0 0 11.26-9.722a17.542 17.542 0 0 0-.101-14.76zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 0 1-4.18 9.18z'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-prisma/90 text-light-onPrisma'
  >
    Prisma
  </Chip>
)

export const Jira = () => (
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
          d='M11.53 2c0 2.4 1.97 4.35 4.35 4.35h1.78v1.7c0 2.4 1.94 4.34 4.34 4.35V2.84a.84.84 0 0 0-.84-.84zM6.77 6.8a4.362 4.362 0 0 0 4.34 4.34h1.8v1.72a4.362 4.362 0 0 0 4.34 4.34V7.63a.841.841 0 0 0-.83-.83zM2 11.6c0 2.4 1.95 4.34 4.35 4.34h1.78v1.72c.01 2.39 1.95 4.34 4.34 4.34v-9.57a.84.84 0 0 0-.84-.84z'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-jira/90 text-light-onJira'
  >
    Jira
  </Chip>
)

export const Documentacion = () => (
  <Chip
    startContent={
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <g
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        >
          <path d='M15.5 2H8.6c-.4 0-.8.2-1.1.5c-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1c.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5c.3-.3.5-.7.5-1.1V6.5z' />
          <path d='M3 7.6v12.8c0 .4.2.8.5 1.1c.3.3.7.5 1.1.5h9.8M15 2v5h5' />
        </g>
      </svg>
    }
    variant='flat'
    className='bg-light-tertiary/90 text-light-onTertiary'
  >
    Documentación
  </Chip>
)

export const S3AWS = () => (
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
          d='m20.913 13.147l.12-.895c.947.576 1.258.922 1.354 1.071c-.16.031-.562.046-1.474-.176m-2.174 7.988a.547.547 0 0 0-.005.073c0 .084-.207.405-1.124.768a10.28 10.28 0 0 1-1.438.432c-1.405.325-3.128.504-4.853.504c-4.612 0-7.412-1.184-7.412-1.704a.547.547 0 0 0-.005-.073L1.81 5.602c.135.078.28.154.432.227c.042.02.086.038.128.057c.134.062.272.122.417.18l.179.069c.154.058.314.114.478.168c.043.013.084.029.13.043c.207.065.423.127.646.187l.176.044c.175.044.353.087.534.127a23.414 23.414 0 0 0 .843.17l.121.023c.252.045.508.085.768.122c.071.011.144.02.216.03c.2.027.4.053.604.077l.24.027c.245.026.49.05.74.07l.081.009c.275.022.552.04.83.056l.233.012c.21.01.422.018.633.025a33.088 33.088 0 0 0 2.795-.026l.232-.011c.278-.016.555-.034.83-.056l.08-.008c.25-.02.497-.045.742-.072l.238-.026c.205-.024.408-.05.609-.077c.07-.01.141-.019.211-.03c.261-.037.519-.078.772-.122l.111-.02c.215-.04.427-.082.634-.125l.212-.047c.186-.041.368-.085.546-.13l.166-.042c.225-.06.444-.122.654-.189c.04-.012.077-.026.115-.038a10.6 10.6 0 0 0 .493-.173c.058-.021.114-.044.17-.066c.15-.06.293-.12.43-.185c.038-.017.079-.034.116-.052c.153-.073.3-.15.436-.228l-.976 7.245c-2.488-.78-5.805-2.292-7.311-3a1.09 1.09 0 0 0-1.088-1.085c-.6 0-1.088.489-1.088 1.088c0 .6.488 1.089 1.088 1.089c.196 0 .378-.056.537-.148c1.72.812 5.144 2.367 7.715 3.15zm-7.42-20.047c5.677 0 9.676 1.759 9.75 2.736l-.014.113c-.01.033-.031.067-.048.101c-.015.028-.026.057-.047.087c-.024.033-.058.068-.09.102c-.028.03-.051.06-.084.09c-.038.035-.087.07-.133.105c-.04.03-.074.06-.119.091c-.053.036-.116.071-.177.107c-.05.03-.095.06-.15.09c-.068.036-.147.073-.222.11c-.059.028-.114.057-.177.085c-.084.038-.177.074-.268.111c-.068.027-.13.054-.203.082c-.097.036-.205.072-.31.107c-.075.026-.148.053-.228.079c-.111.035-.233.069-.35.103c-.085.024-.165.05-.253.073c-.124.034-.258.065-.389.098c-.093.022-.181.046-.278.068c-.139.032-.287.061-.433.091c-.098.02-.191.041-.293.06c-.155.03-.32.057-.482.084c-.1.018-.198.036-.302.052c-.166.026-.342.048-.515.072c-.11.014-.213.03-.325.044c-.181.023-.372.041-.56.06c-.11.012-.218.025-.332.036c-.188.016-.386.029-.58.043c-.122.009-.24.02-.364.028c-.207.012-.422.02-.635.028c-.12.005-.234.012-.354.016a35.605 35.605 0 0 1-2.069 0c-.12-.004-.234-.011-.352-.016c-.214-.008-.43-.016-.637-.028c-.122-.008-.238-.02-.36-.027c-.195-.015-.394-.028-.584-.044c-.11-.01-.215-.024-.324-.035c-.19-.02-.384-.038-.568-.06l-.315-.044c-.176-.024-.355-.046-.525-.073c-.1-.015-.192-.033-.29-.05c-.167-.028-.335-.055-.494-.086c-.096-.018-.183-.038-.276-.056c-.151-.032-.305-.062-.45-.095c-.09-.02-.173-.043-.26-.064c-.138-.034-.277-.067-.407-.102c-.082-.022-.157-.046-.235-.069a11.75 11.75 0 0 1-.368-.108c-.075-.024-.141-.049-.213-.073c-.11-.037-.223-.075-.325-.113c-.067-.025-.125-.051-.188-.077c-.096-.038-.195-.076-.282-.115c-.06-.027-.11-.054-.166-.08c-.08-.039-.162-.077-.233-.116c-.052-.028-.094-.055-.142-.084c-.063-.038-.13-.075-.185-.113c-.043-.029-.075-.058-.113-.086c-.048-.037-.098-.073-.139-.11c-.032-.029-.054-.057-.08-.087c-.033-.035-.069-.07-.093-.104c-.02-.03-.031-.058-.046-.086c-.018-.035-.039-.068-.049-.102l-.015-.113c.076-.977 4.074-2.736 9.748-2.736m12.182 12.124c-.118-.628-.84-1.291-2.31-2.128l.963-7.16a.531.531 0 0 0 .005-.073C22.16 1.581 16.447 0 11.32 0C6.194 0 .482 1.581.482 3.851a.58.58 0 0 0 .005.072L2.819 21.25c.071 2.002 5.236 2.75 8.5 2.75c1.805 0 3.615-.188 5.098-.531c.598-.138 1.133-.3 1.592-.48c1.18-.467 1.789-1.053 1.813-1.739l.945-7.018c.557.131 1.016.197 1.389.197c.54 0 .902-.137 1.134-.413a.956.956 0 0 0 .21-.804Z'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-s3/90 text-light-onS3'
  >
    S3 AWS
  </Chip>
)

export const Planificacion = () => (
  <Chip
    startContent={
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 1024 1024'
      >
        <path
          fill='currentColor'
          d='M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8m192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8m192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8m216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-inverseSurface/90 text-light-inverseOnSurface'
  >
    Planificación
  </Chip>
)
export const Autentificacion = () => (
  <Chip
    startContent={
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 32 32'
      >
        <path
          fill='currentColor'
          d='M29.307 9.932L26.161 0H5.796L2.692 9.932c-1.802 5.75.042 12.271 5.089 16.021L16.01 32l8.208-6.068c5.005-3.75 6.911-10.25 5.089-16.021l-8.214 6.104l3.12 9.938l-8.208-6.13l-8.208 6.104l3.141-9.911l-8.25-6.063l10.177-.063l3.146-9.891l3.141 9.87z'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-errorContainer/90 text-light-onErrorContainer'
  >
    Autentificación
  </Chip>
)

export const Koyeb = () => (
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
          d='M0 12.822V7.044L11.985.115L24 7.037v5.77L11.992 5.892Zm11.985 1.114L1.92 19.759L0 18.645v-3.557l11.985-6.93L24 15.089v3.542l-1.92 1.13Zm-3.028 9.949L3.95 21.004l8.036-4.656l8.066 4.656l-5.009 2.88l-3.05-1.759Z'
        />
      </svg>
    }
    variant='flat'
    className='bg-light-koyeb/90 text-light-onKoyeb'
  >
    Koyeb
  </Chip>
)