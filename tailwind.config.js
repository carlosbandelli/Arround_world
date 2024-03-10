/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        'pulse-slow': 'pulse 2s linear infinite',
        'ping-slow': 'ping 2s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
