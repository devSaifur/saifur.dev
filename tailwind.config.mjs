import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Geist Sans', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        primary: 'inset_0_1px_0_0_rgba(148,163,184,0.1)',
      },
      colors: {
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          purple: 'rgb(var(--accent-purple) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
