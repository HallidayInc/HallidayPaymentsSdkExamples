document.getElementById('halliday').addEventListener('click', async () => {
  const HALLIDAY_API_KEY = '_your_api_key_here_';

  if (HALLIDAY_API_KEY === '_your_api_key_here_') {
    alert('HALLIDAY_API_KEY is missing!');
  }

  const hallidayOutputs = ['base:0x833589fcd6edb6e08f4c7c32d4f71b54bda02913'];

  window.ethereum = window.ethereum || window.phantom.ethereum;
  const [address] = await window.ethereum.request({ method: 'eth_requestAccounts' });

  const userWallet = connectSigner(() =>
    new ethers.BrowserProvider(window.ethereum).getSigner(),
  );

  await hallidayPayments.initializeClient({
    apiKey: HALLIDAY_API_KEY,
    outputs: hallidayOutputs,
  });

  await hallidayPayments.openHallidayPayments({
    apiKey: HALLIDAY_API_KEY,
    // USDC on Base
    outputs: hallidayOutputs,
    userWallet,
    destinationAddress: address,
  });
});