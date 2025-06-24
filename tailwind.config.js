/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        bgColor: 'var(--bgColor)',
        bgCard: 'var(--bgCard)',
        bgSidebar: 'var(--bgSidebar)',
        bgTableOdd: 'var(--bgTableOdd)',
        bgTableEven: 'var(--bgTableEven)',
        textTableHead: 'var(--textTableHead)',
        bgBorder: 'var(--bgBorder)',
        tooltipBg: 'var(--tooltipbg)',
        tooltipText: 'var(--tooltiptext)',
        bgTableHead: 'var(--bgTableHead)',
        bgSideBarProfile: 'var(--bgSideBarProfile)',
        textColorSideBar: 'var(--textColorSideBar)',
        bgHover: 'var(--bgHover)',
        gtColor1: 'var(--gtColor1)',
        gtColor2: 'var(--gtColor2)',
        textColor: 'var(--textColor)',
        textColor2: 'var(--textColor2)',
        textSubHead: 'var(--textSubHead)',
        bgActive: 'var(--textColor2)',
        bgSuccess: 'var(--bgSuccess)',
        textSuccess: 'var(--textSuccess)',
        bgError: 'var(--bgError)',
        textError: 'var(--textError)',
        bgInfo: 'var(--bgInfo)',
        textInfo: 'var(--textInfo)',
        bgWarning: 'var(--bgWarning)',
        textWarning: 'var(--textWarning)',
        toastBg: 'var(--toastBg)',
        paginationActive: 'var(--paginationActive)',
        tableBorder: 'var(--tableBorder)',
        bgGray: 'var(--bgGray)',
        textGray: 'var(--textGray)',
        paginationText: 'var(--paginationText)',
        mainColor: 'var(--mainColor)',
        textMaincolor: 'var(--textMainColor)',
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.3s ease-out',
      }
    },
  },
  plugins: [],
};
































