'use client';

import Script from 'next/script';

export default function ChatBot() {
  return (
    <>
      {/* Load the Zapier Web Component bundle securely using Next.js Script */}
      <Script 
        strategy="afterInteractive"
        type="module"
        src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js" 
      />
      
      {/* Render the Zapier custom web component */}
      {/* @ts-expect-error Zapier custom web component declaration */}
      <zapier-interfaces-chatbot-embed 
        is-popup="true" 
        chatbot-id="cmpqh1xm80019fmqp1abqybbg"
      />
    </>
  );
}
