const express = require('express');
const fetchFeatureFlags = require('../controllers/fetchFeatureFlags');
const editFeatureFlag = require('../controllers/editFeatureFlag');
const createFeatureFlag = require('../controllers/createFeatureFlag');
const findFeatureFlag = require('../controllers/findFeatureFlag');
const deleteFeatureFlag = require('../controllers/deleteFeatureFlag');
const router = express.Router();

/* GET Feature Flags */
router.get('/', fetchFeatureFlags);

/* POST Feature Flags */
router.post('/', createFeatureFlag);

/* Edit Feature Flag */
router.put('/:id', editFeatureFlag);

/* Delete Feature Flags */
router.delete('/:id', deleteFeatureFlag);

/* find Feature Flags */
router.get('/:id', findFeatureFlag);

module.exports = router;
