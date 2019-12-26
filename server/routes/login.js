const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const config = require('../config');

//adamnowak@gmail.com
//password1

router.post('/', (req, res) => {
  const { email, password } = req.body;

  let sql = `SELECT * from Users WHERE email='${email}'`;

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    const user = result[0];

    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
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
            message: `wrong password`
          });
        }
      });
    } else {
      res.json({
        message: `we don't have this e-mail`
      });
    }
  });
});

module.exports = router;
