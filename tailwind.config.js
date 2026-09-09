/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5E6A',
          dark: '#124651',
          light: '#267B8B',
          soft: '#E8F3F5',
        },
        secondary: {
          DEFAULT: '#D8B982',
          dark: '#C29F64',
          light: '#EED9B2',
          soft: '#FBF7F0',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F8FAFC',
          muted: '#F1F5F9',
        },
        ink: {
          primary: '#172033',
          secondary: '#667085',
          muted: '#94A3B8',
        },
        border: {
          DEFAULT: '#E7EAEE',
          light: '#F1F5F9',
          strong: '#CBD5E1',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(27, 94, 106, 0.06)',
        'premium': '0 12px 36px -4px rgba(23, 32, 51, 0.08)',
        'elevated': '0 20px 48px -8px rgba(18, 70, 81, 0.12)',
        'glow': '0 0 25px rgba(216, 185, 130, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
