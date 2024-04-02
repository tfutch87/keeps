import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header'
// import Footer from './components/Footer'
import AuthProvider from '@/app/components/AuthProvider';


import { McLaren } from 'next/font/google'


const  mcLaren = McLaren({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "4Keeps",
  description: "4Keeps is a simple note sharing manager",
  keywords: ["4Keeps", "Note", "Sharing", "Manager"],
  author: "4Keeps",
  appleMobileWebAppTitle: "4Keeps",
  appleMobileWebAppStatusBarStyle: "green",
  appleMobileWebAppCapable: "yes",
  appleTouchFullscreen: "yes",
  viewPort: "width=device-width,initial-scale=1"


};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mcLaren.className}>

        <AuthProvider>
              <body >
                    <Header />
                    {children}
                  {/* <Footer /> */}
              </body>
        </AuthProvider>

    </html>
  );
}
