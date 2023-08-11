import Navbar from '@/components/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google';

const font = Poppins({
  weight: ['400', '500', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next',
  description: 'simple next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
