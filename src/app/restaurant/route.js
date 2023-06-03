const express = require('express');
const { searchPlace} = require('./controller');
const router = express.Router();

router.route('/searchPlace')
  .post(searchPlace)

module.exports = router;