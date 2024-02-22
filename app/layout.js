
import Navbar from "./components/navbar.component";

export const metadata = {
  title: 'Pokeroster',
  description: 'Created by Kane Pereira',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
