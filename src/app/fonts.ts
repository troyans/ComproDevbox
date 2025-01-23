import localFont from 'next/font/local'

export const circularPro = localFont({
  src: [
    {
      path: '../../public/fonts/CircularPro-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CircularPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-circular'
}) 