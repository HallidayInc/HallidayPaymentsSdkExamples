document.addEventListener('DOMContentLoaded', async () => {
  const HALLIDAY_API_KEY = '_your_api_key_here_';

  if (HALLIDAY_API_KEY === '_your_api_key_here_') {
    alert('HALLIDAY_API_KEY is missing!');
  }

  await hallidayPayments.openHallidayPayments({
    apiKey: HALLIDAY_API_KEY,
    // USDC on Base
    outputs: ['base:0x833589fcd6edb6e08f4c7c32d4f71b54bda02913'],
    sandbox: false,
    windowType: 'EMBED',
    targetElementId: 'halliday',
    customStyles: {
      primaryColor: '#3498db',
      backgroundColor: '#f4f9fd',
      borderColor: '#5dade2',
      textColor: '#1b4f72',
      textSecondaryColor: '#2e86c1',
    },
  });
});
