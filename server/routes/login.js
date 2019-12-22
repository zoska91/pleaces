const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const config = require('../config');

//adamnowak@gmail.com
//password1

router.post('/', (req, res) => {
  console.log(req.body, req.body.email, req.body.password);
  const { email, password } = req.body;

  let sql = `SELECT * from Users WHERE email='${email}'`;

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result, 'result');
    const user = result[0];

    if (user) {
      if (password === user.password) {
        jwt.sign(
          { user },
          'secretkey',
          { expiresIn: config.maxAgeSession },
          (err, token) => {
            res.json({ message: 'successful', token });
          }
        );
      } else {
        res.json({
          messege: `wrong password`
        });
      }
    } else {
      res.json({
        messege: `we don't have this e-mail`
      });
    }
  });
});

module.exports = router;
