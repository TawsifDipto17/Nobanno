
import React, { useEffect } from 'react';

const video = () => {
  useEffect(() => {
    const initializeJitsiMeet = async () => {
      const script = document.createElement('script');
      script.src = 'https://8x8.vc/vpaas-magic-cookie-c548d485f01e4798a6cb697d0b30ff7d/external_api.js';
      script.async = true;

      script.onload = () => {
        const api = new window.JitsiMeetExternalAPI("8x8.vc", {
          roomName: "vpaas-magic-cookie-c548d485f01e4798a6cb697d0b30ff7d/SampleAppNumerousTalksImportSlightly",
          parentNode: document.querySelector('#jaas-container'),
      
        });

        api.addListener('videoConferenceLeft', () => {
          window.location.href = '/dashboard';
        });

        window.addEventListener('beforeunload', () => {
          api.dispose();
        });
      };

      document.head.appendChild(script);
    };

    initializeJitsiMeet();
  }, []);

  return (
    <div>
      <div id="jaas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default video;
