"use client"

import Head from 'next/head'
import React from 'react'
import { DOMAIN } from '@/lib/constant';

import { usePathname } from 'next/navigation'

interface HeadMetaProps {
    metaTitle?: string;
    metaDescription?: string;
    metaImage?: string;
    metAlt?: string;
    slug?: string;
}

const HeadMeta = ({ metaDescription , metAlt, metaImage, metaTitle} : HeadMetaProps) => {
    const pathname = usePathname()

    
    return ( 
     <>
        <Head>
        
           
           
            <meta charSet="utf-8" />
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@site"/>
            <meta property="og:type" content ="article"/>
            <meta name="twitter:creator" content="@alphaGhub"/>
            {pathname === '/' ? (<meta property="og:url" content={`${DOMAIN}`}/>) :( <meta property="og:url" content={`${DOMAIN}${pathname}`}/>)}
           
            <meta property="og:title" content={ metaTitle ?  metaTitle : "AlphaGrooming"}/>
            <meta property="og:description" content={metaDescription ? metaDescription : `Welcome to Alpha Grooming, the premier resource for all men's skincare, beard care, and haircare! At Alpha Grooming, we believe that every man deserves to look and feel his best, which is why we've put together an extensive collection of expert techniques, innovative routines, and useful recommendations to assist you in putting your best face forward.That said, grooming is only one aspect of expressing your alpha identity. We're here to educate you, inspire confidence, and help you up your groom!`}/>
            <meta property="og:site_name" content="AlphaGrooming"/>
            <meta property="og:image" content={metaImage ? metaImage : `${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/safari-pinned-tab.svg`} />


            
        

            
            <meta property="og:image:alt" content={metAlt ? metAlt : `ImageAlphaGrooming Logo Dark`}/>
            <meta property="og:image:width" content="1600"/>
            <meta property="og:image:height" content="1490"/>
            <meta name="keywords" content="men, skincare , beard care , hairstyle , routine"/>
            <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"/>
            <meta name="author" content="AlphaGrooming"/>
            <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>AlphaGrooming - Be Bold, Be Groomed</title>

            <link rel="stylesheet" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/css/fontawesome-all.min.css`} />
            <link rel="stylesheet" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/css/iconfont.css`} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />


            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
            <link rel="manifest" href="/images/site.webmanifest"/>
            <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="apple-mobile-web-app-title" content="AlphaGrooming"/>
            <meta name="application-name" content="AlphaGrooming"/>
            <meta name="msapplication-TileColor" content="#00a300"/>
            <meta name="theme-color" content="#ffffff"/>
            
            {pathname === '/' ? (<link rel="canonical" href={`${DOMAIN}`}/>) :( <link rel="canonical" href={`${DOMAIN}${pathname}`}/>)}

              
 

            <meta name="description" content={metaDescription ? metaDescription : `Welcome to Alpha Grooming, the premier resource for all men's skincare, beard care, and haircare! At Alpha Grooming, we believe that every man deserves to look and feel his best, which is why we've put together an extensive collection of expert techniques, innovative routines, and useful recommendations to assist you in putting your best face forward.That said, grooming is only one aspect of expressing your alpha identity. We're here to educate you, inspire confidence, and help you up your groom!`} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="icon" type="image/x-icon" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon/favicon.ico`} />

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-6WV7PV1X9C"></script>
  

           

        </Head>
        </>
     );
}
 
export default HeadMeta;