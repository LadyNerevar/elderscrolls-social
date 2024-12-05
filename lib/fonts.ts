import { Roboto_Mono as FontMono, "PT Sans Narrow" as FontSans } from "next/font/google"

import { } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
