/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'background': 'hsl(var(--background))',
      },
      textColor: {
        'foreground': 'hsl(var(--foreground))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        'card-foreground': 'hsl(var(--card-foreground))',
      },
      borderColor: {
        'border': 'hsl(var(--border))',
        'input': 'hsl(var(--input))',
        'popover': 'hsl(var(--popover))',
      },
    },
  },
  plugins: [],
}
