const express = require('express');
const app = express();
const PORT = 8080;

app.use('/vanilla-js', express.static('./vanilla-js'));
app.use('/react', express.static('./react/dist'));

app.listen(PORT, () => console.log(`
  Running Halliday Payments SDK examples locally.

  HTML/CSS/JS example app:
  http://localhost:${PORT}/vanilla-js/

  React.js example app:
  http://localhost:${PORT}/react/
`));
