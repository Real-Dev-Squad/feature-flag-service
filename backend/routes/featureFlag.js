const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    const { featureFlagName } = req.body;
    
   
});

module.exports = router;
