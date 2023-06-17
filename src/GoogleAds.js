import React, { useEffect } from 'react';

const GoogleAds = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6527724668452654";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="google-ads" />;
};

export default GoogleAds;