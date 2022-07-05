const express = require('express');
const findFeatureFlag = require('../controllers/findFeatureFlag');
const router = express.Router();

/* find Feature Flags */
router.get('/', findFeatureFlag);

module.exports = router;
