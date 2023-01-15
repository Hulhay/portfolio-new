/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-charcoal': '#878383',
        'dark-charcoal': '#333333',
        'orange-web': '#FAA300',
        'ue-red': '#B80012',
      },
      fontFamily: {
        'poppins': ['Poppins']
      },
      backgroundImage: {
        'space': 'url("https://res.cloudinary.com/dalcly76v/image/upload/v1665852092/bg-space_flinaz.png")',
        'footer': 'url("https://res.cloudinary.com/dalcly76v/image/upload/v1665912921/footer_bjchu1.svg")'
      }
    },
  },
  plugins: [],
}
