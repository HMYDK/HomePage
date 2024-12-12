/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        theme: {
          dark: "#1C1C1C",
          light: "#FAFAFA",
          accent: "#CF1322",
          gold: "#D4B483",
          jade: "#177E89",
          ink: "#2D3436",
          stone: "#596275",
          bg: {
            light: "#F7F7F7",
            dark: "#141414",
          },
          text: {
            primary: "#2D3436",
            secondary: "#596275",
            accent: "#CF1322",
          },
        },
      },
      boxShadow: {
        elegant: "0 0 30px rgba(0, 0, 0, 0.05)",
        float: "0 10px 40px rgba(0, 0, 0, 0.08)",
        intense: "0 4px 60px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "subtle-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "ink-spread": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1.05)",
            opacity: "0.1",
          },
        },
        "elegant-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "smooth-fade": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "subtle-float": "subtle-float 3s ease-in-out infinite",
        "ink-spread": "ink-spread 1.5s ease-out forwards",
        "elegant-spin": "elegant-spin 20s linear infinite",
        "smooth-fade": "smooth-fade 0.6s ease-out forwards",
        blink: "blink 1s step-end infinite",
      },
      backgroundImage: {
        grain: "url('/textures/grain.png')",
        noise: "url('/textures/noise.png')",
        paper: "url('/textures/paper.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
