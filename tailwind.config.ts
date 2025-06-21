import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './_pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#20606c',
        secondary: '#c08002'
      },
      fontFamily: {
        nunito: ['var(--font-nunito)'],
        gabarito: ['var(--font-gabarito)']
      },
      keyframes: {
        animateCustomers: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-4000px)' }
        },
        animatePartners: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-2900px)' }
        },
        orbit: {
          '0%': { transform: 'rotate(-90deg)  translateX(200px)' },
          '100%': {
            transform: 'rotate(270deg) translateX(200px) '
          }
        }
      },
      animation: {
        slider: 'animateCustomers 15s linear infinite',
        sliderPartners: 'animatePartners 15s linear infinite',
        orbit: 'orbit 4s linear infinite'
      }
    }
  }
}
export default config
