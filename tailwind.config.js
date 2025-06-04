export default {
  content: [
    "./index.html",           // Root index.html
    "./src/**/*.{js,jsx,ts,tsx}", // All components and logic in src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        fade: 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
