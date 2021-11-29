import Script from 'next/script';
import { useEffect } from 'react';

//102700588919929
interface FacebookProps {
  id: number
}


const Facebook: React.FC<FacebookProps> = ({ id }) => {

  useEffect(() => {

  }, [])


  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat" ></div>
      <Script id="script" strategy="lazyOnload">
        {`
           var chatbox = document.getElementById('fb-customer-chat');
           chatbox.setAttribute("page_id", ${id});
           chatbox.setAttribute("attribution", "biz_inbox");
     
           window.fbAsyncInit = function() {
             FB.init({
               xfbml            : true,
               version          : 'v12.0'
             });
           };
     
           (function(d, s, id) {
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) return;
             js = d.createElement(s); js.id = id;
             js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
        `}
      </Script>
    </div>
  );
}

export default Facebook;