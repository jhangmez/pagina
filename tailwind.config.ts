import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          angular: '#BA1A1A',
          onAngular: '#ffffff',
          postgresql: '#00639a',
          onPostgresql: '#ffffff',
          koyeb: '#2b6b28',
          onKoyeb: '#ffffff',
          graphql: '#b30083',
          onGraphql: '#FFFFFF',
          react: '#006684',
          onReact: '#ffffff',
          typescript: '#2D79C7',
          onTypescript: '#ffffff',
          node: '#2d6b27',
          onNode: '#ffffff',
          next: '#000000',
          onNext: '#ffffff',
          nexus: '#006783',
          onNexus: '#ffffff',
          prisma: '#4c51bf',
          onPrisma: '#ffffff',
          jira: '#005cbd',
          onJira: '#ffffff',
          s3: '#2c6c00',
          onS3: '#ffffff',
          primary: '#1A6C30',
          onPrimary: '#FFFFFF',
          primaryContainer: '#A3F6AA',
          onPrimaryContainer: '#002108',
          primaryFixed: '#A3F6AA',
          onPrimaryFixed: '#002108',
          primaryFixedDim: '#88D990',
          onPrimaryFixedVariant: '#00531F',
          secondary: '#516350',
          onSecondary: '#FFFFFF',
          secondaryContainer: '#D4E8D1',
          onSecondaryContainer: '#0F1F11',
          secondaryFixed: '#D4E8D1',
          onSecondaryFixed: '#0F1F11',
          secondaryFixedDim: '#B8CCB5',
          onSecondaryFixedVariant: '#3A4B3A',
          tertiary: '#39656C',
          onTertiary: '#FFFFFF',
          tertiaryContainer: '#BDEAF3',
          onTertiaryContainer: '#001F24',
          tertiaryFixed: '#BDEAF3',
          onTertiaryFixed: '#001F24',
          tertiaryFixedDim: '#A1CED6',
          onTertiaryFixedVariant: '#1F4D54',
          error: '#BA1A1A',
          onError: '#FFFFFF',
          errorContainer: '#FFDAD6',
          onErrorContainer: '#410002',
          outline: '#727970',
          background: '#FCFDF7',
          onBackground: '#1A1C19',
          surface: '#F9FAF4',
          onSurface: '#1A1C19',
          surfaceVariant: '#DEE5D9',
          onSurfaceVariant: '#424940',
          inverseSurface: '#2E312D',
          inverseOnSurface: '#F0F1EB',
          inversePrimary: '#88D990',
          shadow: '#000000',
          surfaceTint: '#1A6C30',
          outlineVariant: '#C1C9BE',
          scrim: '#000000',
          surfaceContainerHighest: '#E2E3DD',
          surfaceContainerHigh: '#E8E9E3',
          surfaceContainer: '#EDEEE9',
          surfaceContainerLow: '#F3F4EE',
          surfaceContainerLowest: '#FFFFFF',
          surfaceBright: '#F9FAF4',
          surfaceDim: '#D9DBD5'
        },
        dark: {
          primary: '#88D990',
          onPrimary: '#003913',
          primaryContainer: '#00531F',
          onPrimaryContainer: '#A3F6AA',
          primaryFixed: '#A3F6AA',
          onPrimaryFixed: '#002108',
          primaryFixedDim: '#88D990',
          onPrimaryFixedVariant: '#00531F',
          secondary: '#B8CCB5',
          onSecondary: '#243424',
          secondaryContainer: '#3A4B3A',
          onSecondaryContainer: '#D4E8D1',
          secondaryFixed: '#D4E8D1',
          onSecondaryFixed: '#0F1F11',
          secondaryFixedDim: '#B8CCB5',
          onSecondaryFixedVariant: '#3A4B3A',
          tertiary: '#A1CED6',
          onTertiary: '#00363D',
          tertiaryContainer: '#1F4D54',
          onTertiaryContainer: '#BDEAF3',
          tertiaryFixed: '#BDEAF3',
          onTertiaryFixed: '#001F24',
          tertiaryFixedDim: '#A1CED6',
          onTertiaryFixedVariant: '#1F4D54',
          error: '#FFB4AB',
          onError: '#690005',
          errorContainer: '#93000A',
          onErrorContainer: '#FFDAD6',
          outline: '#8B9389',
          background: '#1A1C19',
          onBackground: '#E2E3DD',
          surface: '#111411',
          onSurface: '#C6C7C2',
          surfaceVariant: '#424940',
          onSurfaceVariant: '#C1C9BE',
          inverseSurface: '#E2E3DD',
          inverseOnSurface: '#1A1C19',
          inversePrimary: '#1A6C30',
          shadow: '#000000',
          surfaceTint: '#88D990',
          outlineVariant: '#424940',
          scrim: '#000000',
          surfaceContainerHighest: '#333532',
          surfaceContainerHigh: '#282B27',
          surfaceContainer: '#1E201D',
          surfaceContainerLow: '#1A1C19',
          surfaceContainerLowest: '#0C0F0C',
          surfaceBright: '#373A36',
          surfaceDim: '#111411'
        }
      },
      opacity: {
        '8': '.08',
        '12': '.12',
        '16': '.16'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 95s linear infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      }
    }
  },
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            primary: '#1A6C30',
            secondary: '#516350'
          }
        },
        dark: {
          // ...
          colors: {
            primary: '#88D990',
            secondary: '#243424'
          }
        }
        // ... custom themes
      }
    })
  ]
}
export default config
