const express = require('express');
const router = express.Router();
const { getJobs } = require('../controllers/jobController');

router.get('/', getJobs);

module.exports = router;
