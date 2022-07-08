const express = require('express');
const editFeatureFlag = require('../controllers/editFeatureFlag');
const router = express.Router();

/* Edit Feature Flag */
router.patch('/:id', editFeatureFlag);

module.exports = router;
