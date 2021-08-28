module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      light: '#FAF9F0',
      dark: '#000249',
      accent: '#F6490D'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
