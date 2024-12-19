/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        premium: {
          dark: '#0a231e',
          light: '#1a3d34',
        },
        bgColor:"#102B26",
        darkBgColor:"#0B2823",  
        headingColor:"#F3DB68",
        bodyColor:"#FFFFFF",
        lightYellow:"#FFEB87",
        darkYellow:"#FFB902",
        lightBgColor:"#3A6B62",
        darkGreen:"#0e362d"
        
      },
      fontFamily:{
        merriweather: ['var(--font-merriweather)'],
        poppins: ['var(--font-poppins)'],
      },
      screens:{
        secondLG:"1185px",
        thirdLG:"998px",
        secondMD:"870px",
        thirdMD:"928px",
        secondSM:"529px"
      },
      backdropBlur: {
        sm: '4px',
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}