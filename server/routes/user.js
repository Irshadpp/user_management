const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const validateRegistration = require('../middlewares/validation');
const upload = require('../middlewares/imageUpload')

router.get('/',);
router.post('/register', validateRegistration, userController.register);
router.post('/login', userController.login);
router.post('/upload-photo', upload.single('photo'), userController.uploadPhoto)

module.exports = router;
