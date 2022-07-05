const express = require('express');
const fetchFeatureFlags = require('../controllers/fetchFeatureFlags');
const router = express.Router();

/* GET Feature Flags */
router.get('/', fetchFeatureFlags);

module.exports = router;
