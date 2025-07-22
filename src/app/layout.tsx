import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Learning Next js",
    template: "%s | Learning Next js"
  },
  description: "Try to Learn Nextjs as best i can",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}>

        {/* navbar  */}
        <Navbar></Navbar>

        <main className=" w-11/12 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
