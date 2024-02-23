
import './styles/tailwind.css';
import Navbar from "./components/navbar.component";


export const metadata = {
  title: 'Pokeroster',
  description: 'Created by Kane Pereira',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}