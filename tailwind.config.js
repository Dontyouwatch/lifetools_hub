module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          900: "#1e3a8a", // blue-900
          DEFAULT: "#2563eb", // blue-600
        },
        secondary: {
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          DEFAULT: "#64748b", // slate-500
        },
        accent: {
          100: "#fed7aa", // orange-200
          500: "#f97316", // orange-500
          600: "#ea580c", // orange-600
          700: "#c2410c", // orange-700
          DEFAULT: "#f97316", // orange-500
        },
        background: "#fafafa", // neutral-50
        surface: "#ffffff", // white
        text: {
          primary: "#1e293b", // slate-800
          secondary: "#64748b", // slate-500
        },
        success: {
          100: "#d1fae5", // emerald-100
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
          DEFAULT: "#10b981", // emerald-500
        },
        warning: {
          100: "#fef3c7", // amber-100
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
          DEFAULT: "#f59e0b", // amber-500
        },
        error: {
          100: "#fee2e2", // red-100
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
          DEFAULT: "#ef4444", // red-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'deep': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
    },
  },
  plugins: [],
}