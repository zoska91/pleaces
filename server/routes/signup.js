const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const config = require('../config');

router.post('/', (req, res) => {
  const { name, surname, email, password, adres } = req.body;

  const sql = `SELECT * from Users WHERE email='${email}'`;

  const query = db.query(sql, (err, result) => {
    if (err) throw err;
    const user = result[0];

    if (user) {
      res.json({ message: 'we have this email. Try again!' });
    } else {
      bcrypt.hash(password, 10, function(err, hash) {
        const sqlCreateUser = `insert into Users ( name, surname, email, password, adres) 
        values ( '${name}', '${surname}', '${email}', '${hash}', '${adres}')`;
        const query = db.query(sqlCreateUser, (err, result) => {
          if (err) throw err;

          res.json({
            message: `created`
          });
        });
      });
    }
  });
});

module.exports = router;
