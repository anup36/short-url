const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shorten_url', { reconnectTries: 5 })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('mongo connected');
  })
  .catch((dbErr) => {
    // eslint-disable-next-line no-console
    console.log('DB Connection Error: ', dbErr.message);
  });
