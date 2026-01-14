import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Impostor - Juego de Engaño',
  description: 'Un emocionante juego de deducción social donde debes encontrar al impostor antes de que sea demasiado tarde',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
