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
      hccucek3: '#000249'
    }
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'], // this line does the trick
    },
  },
  plugins: [],
}
