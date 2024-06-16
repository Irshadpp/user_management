const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('indexfdasfas');
});

router.get('/users', (req, res) =>{
  console.log("users called");
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' },
  ];
  res.json(users);
})

module.exports = router;
