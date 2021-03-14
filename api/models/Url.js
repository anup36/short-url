const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const opts = {
  timestamps: true,
};

const Url = new Schema({
  id: {
    type: Number,
  },
  longUrl: {
    type: String,
  },
  numLogs: {
    type: Number,
  },
}, opts);

const urlSchema = model('Url', Url);

module.exports = urlSchema;
