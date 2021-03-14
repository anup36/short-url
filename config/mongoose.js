const mongoose = require('mongoose');
const config = require('./env');

mongoose.connect(config.mongodb.host, { reconnectTries: 5 })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('mongo connected');
  })
  .catch((dbErr) => {
    // eslint-disable-next-line no-console
    console.log('DB Connection Error: ', dbErr.message);
  });
