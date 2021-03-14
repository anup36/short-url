const app = require('./config/express');
const mongoose = require('./config/mongoose');

const port = parseInt(process.env.PORT, 10) || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`The server is running at localhost: ${port}`);
});
