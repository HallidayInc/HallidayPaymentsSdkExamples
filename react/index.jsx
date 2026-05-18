import React from 'react';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { openHallidayPayments, initializeClient } from '@halliday-sdk/payments';
import { connectSigner } from '@halliday-sdk/payments/ethers';
import { BrowserProvider } from 'ethers';

const HALLIDAY_API_KEY = '_your_api_key_here_';

if (HALLIDAY_API_KEY === '_your_api_key_here_') {
  alert('HALLIDAY_API_KEY is missing!');
}

const hallidayOutputs = ['base:0x833589fcd6edb6e08f4c7c32d4f71b54bda02913'];

function App() {
  useEffect(() => {
    initializeClient({
      apiKey: HALLIDAY_API_KEY,
      outputs: hallidayOutputs,
    });
  }, []);

  return (
    <div>
      <button
        onClick={async () => {
          const _ethereum = window.ethereum || window.phantom.ethereum;
          const [address] = await _ethereum.request({ method: "eth_requestAccounts" });

          const userWallet = connectSigner(() =>
            new BrowserProvider(_ethereum).getSigner(),
          );

          openHallidayPayments({
            apiKey: HALLIDAY_API_KEY,
            // USDC on Base
            outputs: hallidayOutputs,
            userWallet,
            destinationAddress: address,
          });
      }}>
        Open Halliday
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
