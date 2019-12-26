const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const config = require('../config');

//adamnowak@gmail.com
//password1

router.post('/', (req, res) => {
  const { name, surname, email, password, adres } = req.body;
  console.log(name, surname, email, password, adres);

  const sql = `SELECT * from Users WHERE email='${email}'`;

  const query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result, 'result');
    const user = result[0];

    if (user) {
      res.json({ message: 'we have this email. Try again!' });
    } else {
      bcrypt.hash(password, 10, function(err, hash) {
        console.log(hash);
        const sqlCreateUser = `insert into Users ( name, surname, email, password, adres) 
        values ( '${name}', '${surname}', '${email}', '${hash}', '${adres}')`;
        const query = db.query(sqlCreateUser, (err, result) => {
          if (err) throw err;
          console.log(result, 'result');

          res.json({
            message: `created`
          });
        });
      });
    }
  });
});

module.exports = router;
