import Navigation from "@/components/Navigation/NavigationBar";
import { Html, Head} from 'next/document'
import { Metadata } from 'next'


import "./globals.css";
import { Inter } from "next/font/google";
import Home from '../pages/index'
const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata = {
  title: "Alpha Grooming",
  description: "Welcome to Alpha Grooming, the premier resource for all men's skincare, beard care, and haircare! At Alpha Grooming, we believe that every man deserves to look and feel his best, which is why we've put together an extensive collection of expert techniques, innovative routines, and useful recommendations to assist you in putting your best face forward.That said, grooming is only one aspect of expressing your alpha identity. We're here to educate you, inspire confidence, and help you up your groom!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        
        <link rel="stylesheet" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/css/fontawesome-all.min.css`} />
        <link rel="stylesheet" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/css/iconfont.css`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
        <body className={inter.className}>
        <Navigation />
        <Home />
        {children}
      </body>
    </Html>
  );
}