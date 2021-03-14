const express = require('express');
const urlCtrl = require('../../api/controllers/UrlController');

const router = express.Router();

router.route('/api/shorten').post(urlCtrl.shorten);
router.route('/api/:encodedId').get(urlCtrl.decode);
router.route('/all-urls').get(urlCtrl.getAllShortenURl);

module.exports = router;
