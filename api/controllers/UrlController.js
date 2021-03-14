const Url = require('../models/Url');

const webhook = 'http://localhost:3000';

function shorten(req, res) {
  try {
    if (req.body.url) {
      const { description, longUrl } = req.body;
      // Check if url already exists in the database
      Url.findOne({ where: { longUrl } }).then(async (url) => {
        if (!url) {
          // Since it doesn't exist, let's go ahead and create it
          url = await Url.create({ longUrl, description });
        }
        // eslint-disable-next-line no-underscore-dangle
        res.status(201).json({ message: 'Success', data: { id: `${webhook}/${url._id}` } });
      });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('shorten url error', error);
    res.json({ message: 'Error', error });
  }
}

function decode(req, res) {
  try {
    const base58ID = req.params.encodedId;
    const id = base58ID;
    Url.findOne({ _id: id }).then((url) => {
      if (url) {
        // eslint-disable-next-line no-underscore-dangle
        res.status(201).json({ message: 'Success', data: { id: `${webhook}/${url._id}`, url: url.longUrl, description: url.description ? url.description : '' } });
      } else {
        res.redirect(webhook);
      }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('decode url error', error);
  }
}

function getAllShortenURl(req, res) {
  Url.find({ }).then((urls) => {
    if (urls) {
      res.status(201).json({ message: 'Success', data: { urls } });
    } else {
      res.json({
        message: 'Error',
        error: 'Empty Store',
      });
    }
  });
}

module.exports = {
  shorten, decode, getAllShortenURl,
};
