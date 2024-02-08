/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        primary: 'inset_0_1px_0_0_rgba(148,163,184,0.1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
