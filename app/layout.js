import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header'
// import Footer from './components/Footer'
import AuthProvider from '@/app/components/AuthProvider';


import { McLaren } from 'next/font/google'


const mcLaren = McLaren({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "4Keeps",
  description: "4Keeps is a simple note sharing manager",
  keywords: ["4Keeps", "Note", "Sharing", "Manager"],
  author: "4Keeps",
};

export default function RootLayout({ children }) {
  return (

    <AuthProvider>
      <html lang="en" className={mcLaren.className}>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="keeps" />
        <meta name="description" content="keeps" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" sizes="any" />


        <body >
          <Header />
          {children}
          {/* <Footer /> */}
        </body>


      </html>

    </AuthProvider>
  );
}
