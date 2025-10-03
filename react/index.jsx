import React from 'react';
import { createRoot } from 'react-dom/client';
import { openHallidayPayments } from '@halliday-sdk/payments';

const HALLIDAY_API_KEY = '_your_api_key_here_';

if (HALLIDAY_API_KEY === '_your_api_key_here_') {
  alert('HALLIDAY_API_KEY is missing!');
}

function App() {
  return (
    <div>
      <button
        onClick={() => {
          openHallidayPayments({
            apiKey: HALLIDAY_API_KEY,
            services: ['SWAP'],
            // USDC on Base
            inputs: ['base:0x833589fcd6edb6e08f4c7c32d4f71b54bda02913'],
            // IP on Story
            outputs: ['story:0x'],
            sandbox: false,
            windowType: 'POPUP',
          });
      }}>
        Open Halliday
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
