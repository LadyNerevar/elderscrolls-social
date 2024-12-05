//import { Roboto_Mono as FontMono, PT_Sans_Narrow as FontSans } from "next/font/google"

import { PT_Sans_Narrow as FontSans } from '@next/font/google'
import { Roboto as FontMono } from '@next/font/google'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
