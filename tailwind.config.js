const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      light: '#FAF9F0',
      dark: '#000249',
      accent: '#F6490D',
      accentlight: '#feede7',
      white: '#ffffff',
      ctracker1: '#754EE4',
      ctracker2: '#F1EDFC',
      ctracker3: '#231F20',
      livangle1: '#009688',
      livangle2: '#231F20',
      livangle3: '#E5F4F3',
      hccucek1: '#EC3750',
      hccucek2: '#F9E6E0',
      hccucek3: '#000249',
      ttclub1: '#006B66',
      ttclub2: '#E5F0F0',
      ttclub3: '#252733'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      '4xl': '0 45px 70px -18px rgba(0, 0, 0, 0.35)',
      '5xl': '0 55px 80px -21px rgba(0, 0, 0, 0.4)',
      '6xl': ' -300px 0px 0px rgba(0, 0, 0, 0.4)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    }

  },
  variants: {
    extend: {
      fill: ['hover', 'focus'], // this line does the trick
    },
  },
  plugins: [],
}
