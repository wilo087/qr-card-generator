import '@styles/globals.css'
import { roboto } from '@styles/fonts'
import React from 'react'

export const metadata = {
  title: 'This is the main layout',
  description: 'Generated by create next app'
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout ({ children }: Props): React.ReactElement {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
