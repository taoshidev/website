"use client";
 
 import Script from "next/script";
  
 export const GoogleAnalytics = () => {
   return (
     <>
       <Script id="google-analytics">
         {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-00040SBXDP');
         `}
       </Script>
     </>
   );
 };
 