const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['node_modules/@sushiswap/ui/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'gradient-radial': 'radial-gradient(100% 100% at 50% 25%, var(--tw-gradient-stops))',
      }),
      boxShadow: {
        'depth-1': '0px 3px 6px rgba(15, 15, 15, 0.5)',
      },
      colors: {
        purple: {
          DEFAULT: '#A755DD',
          50: '#F6EEFC',
          100: '#EDDDF8',
          200: '#DCBBF1',
          300: '#CA99EB',
          400: '#B977E4',
          500: '#A755DD',
          600: '#8E2AD0',
          700: '#6E20A2',
          800: '#4E1773',
          900: '#2E0E44',
        },
        blue: {
          DEFAULT: '#0993EC',
          50: '#B1DEFC',
          100: '#9DD6FB',
          200: '#76C6FA',
          300: '#4EB6F8',
          400: '#27A5F7',
          500: '#0993EC',
          600: '#0771B6',
          700: '#055080',
          800: '#032E4A',
          900: '#010C14',
        },
        pink: {
          DEFAULT: '#F338C3',
          50: '#FDE5F7',
          100: '#FCD2F1',
          200: '#FAABE6',
          300: '#F885DA',
          400: '#F55ECF',
          500: '#F338C3',
          600: '#E50EAE',
          700: '#B00B86',
          800: '#7B075E',
          900: '#460435',
        },
        green: {
          DEFAULT: '#7CFF6B',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#E8FFE5',
          300: '#C4FFBD',
          400: '#A0FF94',
          500: '#7CFF6B',
          600: '#4AFF33',
          700: '#1DFA00',
          800: '#16C200',
          900: '#108A00',
        },
        red: {
          DEFAULT: '#FF3838',
          50: '#FFF0F0',
          100: '#FFDBDB',
          200: '#FFB2B2',
          300: '#FF8A8A',
          400: '#FF6161',
          500: '#FF3838',
          600: '#FF0000',
          700: '#C70000',
          800: '#8F0000',
          900: '#570000',
        },
        yellow: {
          DEFAULT: '#FFD166',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFF6E0',
          300: '#FFEAB8',
          400: '#FFDD8F',
          500: '#FFD166',
          600: '#FFC02E',
          700: '#F5AB00',
          800: '#BD8400',
          900: '#855D00',
        },
        'pink-red': {
          DEFAULT: '#FE5A75',
          50: '#FFFFFF',
          100: '#FFFCFD',
          200: '#FFD4DB',
          300: '#FEABB9',
          400: '#FE8397',
          500: '#FE5A75',
          600: '#FE2246',
          700: '#E60127',
          800: '#AF011E',
          900: '#770114',
        },
        'light-brown': {
          DEFAULT: '#FEC464',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFF2DE',
          300: '#FFE3B5',
          400: '#FED38D',
          500: '#FEC464',
          600: '#FEAF2C',
          700: '#F09602',
          800: '#B97301',
          900: '#815101',
        },
      },
      animation: {
        ellipsis: 'ellipsis 1.25s infinite',
        'spin-slow': 'spin 2s linear infinite',
        heartbeat: 'heartbeat 1s ease 0.2s infinite normal forwards',
      },
      keyframes: {
        ellipsis: {
          '0%': { content: '"."' },
          '33%': { content: '".."' },
          '66%': { content: '"..."' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)', transformOrigin: 'center center', animationTimingFunction: 'ease-out' },
          '10%': { animationTimingFunction: 'ease-out', transform: 'scale(0.91)' },
          '17%': { animationTimingFunction: 'ease-out', transform: 'scale(0.98)' },
          '33%': { animationTimingFunction: 'ease-out', transform: 'scale(0.87)' },
          '45%': { animationTimingFunction: 'ease-out', transform: 'scale(1)' },
        },
      },
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
}
