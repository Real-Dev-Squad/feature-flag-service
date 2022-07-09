const express = require('express');
const fetchFeatureFlags = require('../controllers/fetchFeatureFlags');
const editFeatureFlag = require('../controllers/editFeatureFlag');
const createFeatureFlag = require('../controllers/createFeatureFlag');
const findFeatureFlag = require('../controllers/findFeatureFlag');
const router = express.Router();

/* GET Feature Flags */
router.get('/', fetchFeatureFlags);

/* POST Feature Flags */
router.post('/:flagname', createFeatureFlag);

/* Edit Feature Flag */
router.put('/:id', editFeatureFlag);

/* Find Feature Flag */
router.put('/:id', findFeatureFlag);

/* Delete Feature Flags */
// router.delete('/:id', fetchFeatureFlags);


module.exports = router;
