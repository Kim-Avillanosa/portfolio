import Script from 'next/script';




const GoogleAdSense: React.FC = () => {
    return (
        <>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2522280994024572"
                crossOrigin="anonymous"></Script>
        </>
    );
}

export default GoogleAdSense;