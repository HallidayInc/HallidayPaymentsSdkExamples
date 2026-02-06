import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { openHallidayPayments, initializeClient } from '@halliday-sdk/payments';

const HALLIDAY_API_KEY = '_your_api_key_here_';

if (HALLIDAY_API_KEY === '_your_api_key_here_') {
  alert('HALLIDAY_API_KEY is missing!');
}

function App() {
  useEffect(() => {
    initializeClient({
      apiKey: HALLIDAY_API_KEY,
      onReady: () => { console.log('Preloaded and ready'); },
      onError: (error) => { console.error(error); },
    });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          openHallidayPayments({
            apiKey: HALLIDAY_API_KEY,
            services: ['SWAP'],
            inputs: ['base:0x833589fcd6edb6e08f4c7c32d4f71b54bda02913'],
            outputs: ['story:0x'],
            sandbox: false,
            windowType: 'MODAL', // 'POPUP', 'EMBED', or 'MODAL'
          });
        }}>
        Open Halliday
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);