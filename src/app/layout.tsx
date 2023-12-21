import Navigation from "@/components/Navigation/NavigationBar";
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
    <div>
        <body className={inter.className}>
        <Navigation />
        <Home />
        {children}
      </body>
    </div>
  );
}