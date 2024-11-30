/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#045cac', // Azul principal (claro)
          dark: '#1B5A96',   // Azul oscuro
        },
        secondary: {
          DEFAULT: '#134A75', // Azul secundario (claro)
          dark: '#0D354F',   // Azul más profundo
        },
        tertiary: {
          DEFAULT: '#E2E8F0', // Gris claro
          dark: '#1c405c',   // Gris oscuro
        },
        accent: {
          DEFAULT: '#F4A261', // Acento cálido
          dark: '#E76F51',   // Acento cálido oscuro
        },
      },
      container:{
        center: true,
        padding:{
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
}

