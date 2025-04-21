// styles/theme.js
export const colors = {
    primary: {
      light: '#60a5fa',
      DEFAULT: '#3b82f6',
      dark: '#2563eb',
    },
    secondary: {
      light: '#f472b6',
      DEFAULT: '#ec4899',
      dark: '#db2777',
    },
    accent: '#ffed4a',
    gray: {
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      // ... more shades
    },
    white: '#ffffff',
    black: '#000000',
  };
  
  export const fonts = {
    sans: `'Roboto', sans-serif`,
    serif: `'Merriweather', serif`,
  };
  
  export const spacing = {
    sm: '0.8rem',
    md: '1.6rem',
    lg: '2.4rem',
    xl: '3.2rem',
  };
  
  // You can then use these in your Tailwind config (tailwind.config.js)
  // by requiring this file and accessing the values.