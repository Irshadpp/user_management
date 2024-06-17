const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const validateRegistration = require('../middlewares/validation');

router.get('/',);
router.post('/register', validateRegistration, userController.register);

module.exports = router;
