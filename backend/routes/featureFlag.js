const express = require('express');
const createFeatureFlag = require('../controllers/createFeatureFlag');
const router = express.Router();

/* Create Feature Flag */
router.post('/', createFeatureFlag);

module.exports = router;
