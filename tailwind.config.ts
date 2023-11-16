import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          default: 'rgba(36, 84, 116, 1)',
          defaultStrong: 'rgba(52, 76, 114, 1)',
          defaultWeak: 'rgba(52, 76, 114, 0.8)',
          bgStrong: 'rgba(52, 76, 114, 0.4)',
          bg: 'rgba(235, 237, 241, 1)',
        },
        grayscale: {
          header: 'rgba(20, 20, 43, 1)',
          headerWeak: 'rgba(38, 35, 56, 1)',
          body: 'rgba(78, 75, 102, 1)',
          label: 'rgba(110, 113, 145, 1)',
          placehold: 'rgba(160, 163, 189, 1)',
          line: 'rgba(217, 219, 233, 1)',
          input: 'rgba(239, 240, 246, 1)',
          bgWeak: 'rgba(235, 237, 241, 1)',
          bg: 'rgba(252, 252, 252, 1)',
        },
        secondary: {
          default: 'rgba(196, 12, 82, 0.8)',
          defaultStrong: 'rgba(196, 12, 82, 1)',
          defaultWeak: 'rgba(196, 12, 82, 0.6)',
          bgStrong: 'rgba(196, 12, 82, 0.2)',
          bg: 'rgba(249, 231, 238, 1)',
        },
        success: {
          default: 'rgba(0, 138, 0, 1)',
          defaultStrong: 'rgba(6, 115, 6, 1)',
          defaultWeak: 'rgba(166, 247, 135, 1)',
          bgStrong: 'rgba(203, 255, 174, 1)',
          bg: 'rgba(234, 249, 222, 1)',
        },
        warning: {
          default: 'rgba(234, 172, 48, 1)',
          defaultStrong: 'rgba(148, 99, 0, 1)',
          defaultWeak: 'rgba(255, 223, 154, 1)',
          bgStrong: 'rgba(255, 230, 176, 1)',
          bg: 'rgba(255, 248, 233, 1)',
        },
        danger: {
          default: 'rgba(231, 76, 60, 1)',
          defaultStrong: 'rgba(192, 57, 43, 1)',
          defaultWeak: 'rgba(192, 57, 43, 0.8)',
          bgStrong: 'rgba(192, 57, 43, 0.4)',
          bg: 'rgba(255, 236, 252, 1)',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
