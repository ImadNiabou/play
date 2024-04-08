export const metadata = {
  title: 'Play',
  description: 'Next.js 14 Movies app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
