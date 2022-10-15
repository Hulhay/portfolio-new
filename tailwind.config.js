/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-charcoal': '#333333',
        'orange-web': '#FAA300',
        'ue-red': '#B80012',
      },
      fontFamily: {
        'poppins': ['Poppins']
      },
      backgroundImage: {
        'space': 'url("https://res.cloudinary.com/dalcly76v/image/upload/v1665852092/bg-space_flinaz.png")'
      }
    },
  },
  plugins: [],
}
