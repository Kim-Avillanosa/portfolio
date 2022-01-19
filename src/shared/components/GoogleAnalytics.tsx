import Script from 'next/script';
import { useEffect } from 'react';




const GoogleAnalytics: React.FC = () => {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8LKRRHSPZ8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8LKRRHSPZ8');
        `}
      </Script>
    </>
  );
}

export default GoogleAnalytics;