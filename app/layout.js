import './globals.css'

export const metadata = {
  title: 'Relevé Impacts Carrosserie',
  description: 'Application de relevé d\'impacts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
