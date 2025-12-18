/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid', 
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
    './assets/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': 'var(--font-body-family)',
        'heading': 'var(--font-heading-family)',
      },
    
    
      maxWidth: {
        'page': 'var(--page-width)',
      },
      width: {
        'max-content': 'max-content',
      },
    
      screens: {
        'xs': '480px',    
        'sm': '640px',    
        'md': '768px',  
        'lg': '1024px',   
        'xl': '1200px',   
        '2xl': '1440px', 
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
} 