const express = require('express');
const router = express.Router();
const { getGrievances, createGrievance } = require('../controllers/grievanceController');

router.get('/', getGrievances);
router.post('/', createGrievance);

module.exports = router;
