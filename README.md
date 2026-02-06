# Halliday Payments SDK Examples

Example apps for building onramps or cross-chain swaps, powered by [Halliday](https://halliday.xyz/).

### Example App Code
- React.js Example `/react/index.jsx`
  - This example creates a swap from USDC on Base to IP on Story.
  - **Reboot the server to rebuild React app after any code changes**
- No frameworks JS example `/vanilla-js/app.js`
  - This example creates an onramp from fiat to USDC on Base.

### How to Run

First, [get a Halliday API key](https://halliday.xyz/contact).

In the above referenced files, insert your API key.

```js
const HALLIDAY_API_KEY = '_your_api_key_here_';
```

Next, install [Node.js](https://nodejs.org/en/download). Then in the terminal run:

```bash
git clone https://github.com/HallidayInc/HallidayPaymentsSdkExamples.git
cd HallidayPaymentsSdkExamples/

npm install
npm start

> Running Halliday Payments SDK examples locally.

> HTML/CSS/JS example app:
> http://localhost:8080/vanilla-js/

> React.js example app:
> http://localhost:8080/react/
```

Remember to reboot the local server after any React app code changes to rebuild the app (ctrl-c to close in terminal and then `npm start` again).