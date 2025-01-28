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
        secondSM:"529px",
        '3xl': '1920px',
        '4xl': '2560px',
        'xs': '480px',
      },
      backdropBlur: {
        sm: '4px',
      },
      animation: {
        'slow-pulse': 'pulse 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 20s ease-in-out infinite',
        'float-slower': 'float 25s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gentle-bounce': 'gentle-bounce 3s ease-in-out infinite',
        'gentle-pulse': 'gentle-pulse 4s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'pulse-slower': 'pulse 8s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'slow-pulse': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 20s ease-in-out infinite',
        'float-slow': 'float 20s ease-in-out infinite',
      'float-slower': 'float 25s ease-in-out infinite',
      'slow-spin': 'spin 60s linear infinite',
      'slow-pulse': 'pulse 8s ease-in-out infinite',
      'slow-breathe': 'breathe 12s ease-in-out infinite',
      'float-subtle': 'float-subtle 18s ease-in-out infinite',
      'spin-slow': 'spin 3s linear infinite',
      'float-subtle-reverse': 'float-subtle 18s ease-in-out infinite reverse',
      'shimmer-slow': 'shimmer 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(15px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-position': '200% 0',
            '0%, 100%': { 'background-position': '200% 50%' },
            '50%': { 'background-position': '0% 50%' },
          },
          '50%': {
            'background-position': '0 0',
          },
        },
        breathe: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'float-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gentle-bounce': {
          '0%, 100%': { 
            transform: 'translateY(0)',
            filter: 'brightness(1)'
          },
          '50%': { 
            transform: 'translateY(-4px)',
            filter: 'brightness(1.1)'
          }
        },
        'gentle-pulse': {
          '0%, 100%': {
            transform: 'translate(var(--tx), var(--ty)) scale(1)',
            opacity: 0.3
          },
          '50%': {
            transform: 'translate(var(--tx), var(--ty)) scale(1.5)',
            opacity: 0.6
          }
        }
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}