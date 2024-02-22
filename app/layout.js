import './styles/tailwind.css';
import Navbar from "./components/navbar.component";

export const metadata = {
  title: 'Pokeroster',
  description: 'Created by Kane Pereira',
}

export default function RootLayout({ children, pageProps }) {
 return (
    <html lang="en">
      <body {...pageProps} >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
