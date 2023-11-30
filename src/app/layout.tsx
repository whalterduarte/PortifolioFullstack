import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from './_components/theme-provider'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'

import './globals.css'


const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Portifólio | Whalter Duarte',
  description: 'Developer Full-Stack | Node.JS | React | ',
  keywords: [
    "Next.js",
    "Next 14",
    "Full-Stack",
    "Portifólio",
    "Developer",
    "Whalter Duarte",
    "NodeJs",
    "Prisma,",
    "Mongoose",
    "Sequelize",
    "MVC",
    "Portifólio programador",
    "Portifólio Dev",
    "Portifólio Full-Stack"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
        fontHeading.variable
      )}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
         {children}
        </ThemeProvider>
        
      </body>
    </html>
  )
}
