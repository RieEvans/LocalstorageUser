/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '270px',
      ssm:'45px',
      md: '700px',
      lg: '800px',
      xl:'1024px',
      xxl: '1280px',
      xxxl:'1880px',
    },
    
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],  
}

