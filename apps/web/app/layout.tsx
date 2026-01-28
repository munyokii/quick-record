import { firaSansCondensed } from '@/app/ui/fonts';
import "./globals.css"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${firaSansCondensed.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}