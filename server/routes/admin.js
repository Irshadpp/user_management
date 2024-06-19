const express = require('express');
const router = express.Router();
const adminAuth = require('../middlewares/adminAuth')
const adminController = require('../controllers/admin')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a ');
});

router.post('/', adminController.login);
router.get('/users', adminAuth, adminController.getUsers);
router.delete('/delete_user/:userId', adminAuth, adminController.deleteUser);
router.put('/edit_user/:userId', adminAuth, adminController.editUser);

module.exports = router;
