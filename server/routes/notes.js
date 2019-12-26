const express = require('express');
const router = express.Router();
const verifyToken = require('../jwt/verifyToken');
const jwt = require('jsonwebtoken');

router.post('/add', (req, res) => {
  console.log('body', req.body);
});

router.get('/get-all', verifyToken, (req, res) => {
  // console.log('body', req.body);

  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      console.log(err);
      res.json({ message: 'error' });
    } else {
      console.log(authData);
      const sql = `SELECT * from Notes where userId=${authData.user.id}`;
      const query = db.query(sql, (err, result) => {
        console.log('result', result);
        res.json({ notes: result });
      });
    }
  });
});

module.exports = router;
