/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'custom': 'rgba(0, 0, 0, 0.80) 24.92%, rgba(20, 20, 20, 0.46) 58.26%, rgba(48, 48, 48, 0.00) 95.17%, rgba(217, 217, 217, 0.26) 243.29%',
      }),
    }
  },
  plugins: []
}
