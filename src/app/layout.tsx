import Navigation from "@/components/Navigation/NavigationBar";
import { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Footer/Footer";
import { LayoutContextProvider } from "@/contexts/LayoutContextProvider/LayoutContextProvider";
import { ThemeProvider } from "@/contexts/LayoutContextProvider/ThemeContextProvider";
import { SearchContextProvider } from "@/contexts/SearchContextProvider/SearchContextProvider";
import Head from "next/head";
import HeadMeta from "@/components/HeadMeta/HeadMeta";
import Header from "@/components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | AlphaGrooming",
    default: "AlphaGrooming",
  },
  description:
    "Welcome to Alpha Grooming, the premier resource for all men's fragrances! At Alpha Grooming, we believe that every man deserves to look and feel his best, which is why we've put together an extensive collection of expert techniques, innovative routines, and useful recommendations to assist you in putting your best face forward.That said, grooming is only one aspect of expressing your alpha identity. We're here to educate you, inspire confidence, and help you up your groom!",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alphagrooming.org",
    siteName: "AlphaGrooming",
    images: [
      {
        url: "https://alphagrooming.org/safari-pinned-tab.svg",
        width: 1600,
        height: 1490,
        alt: "AlphaGrooming Logo Dark",
      },
      {
        url: "https://alphagrooming.org/alpha-grooming-bg-clear.png",
        width: 1200,
        height: 630,
        alt: "AlphaGrooming Cover Image",
      },
    ],
  },
  metadataBase: new URL("https://www.alphagrooming.org"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <LayoutContextProvider>
        <SearchContextProvider>
          <html lang="en">
            <body>
              <Header />
              <HeadMeta />
              <GoogleAnalytics gaId="G-6WV7PV1X9C" />
              {children}
              <Footer />
            </body>
          </html>
        </SearchContextProvider>
      </LayoutContextProvider>
    </ThemeProvider>
  );
}
