/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f9fafb', // light gray bg
        card: '#ffffff',
        primary: '#f97316', // orange-500
        primaryLight: '#ffedd5', // orange-100
        textDark: '#111827',
        textMuted: '#6b7280',
        borderLight: '#e5e7eb',
        success: '#22c55e', // green-500
        successLight: '#dcfce7',
        danger: '#ef4444', // red-500
        dangerLight: '#fee2e2',
        warning: '#eab308', // yellow-500
        warningLight: '#fef9c3',
        darkNavy: '#0f172a', // slate-900
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
