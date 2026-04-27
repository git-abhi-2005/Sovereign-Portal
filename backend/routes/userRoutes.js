const express = require('express');
const router = express.Router();
const { updateProfile } = require('../controllers/userController');

router.post('/profile', updateProfile);

module.exports = router;
