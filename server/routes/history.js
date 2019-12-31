const express = require('express');
const router = express.Router();
const verifyToken = require('../jwt/verifyToken');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/add', verifyToken, (req, res) => {
  console.log(req.body);
  const {
    historyTitle,
    historyText,
    historyAdres,
    historyLat,
    historyLon
  } = req.body;

  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      console.log(err);
      console.log('auth', authData);
      res.json({ message: 'error' });
    } else {
      console.log('auth', authData);
      const sql = `insert into onRoad.History (text, createData, userId, title, adres, lat, lon) 
      values 
      (
      '${historyText}', 
      now(), 
      ${authData.data.id}, 
      '${historyTitle}',
      '${historyAdres}',
      ${historyLat || null},
      ${historyLon || null}
      )`;

      const query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
          console.log('result', result);
          res.json({ message: 'created' });
        }
      });
    }
  });
});

router.get('/get-all', verifyToken, (req, res) => {
  console.log('body', req.body);

  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      console.log(err);
      res.json({ message: 'error' });
    } else {
      console.log('auth', authData);
      const sql = `SELECT * from onRoad.History where userId=${authData.data.id}`;
      const query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
          console.log('result', result);
          res.json({ history: result });
        }
      });
    }
  });
});

router.get('/get-one-history/:id', verifyToken, (req, res) => {
  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      console.log(err);
      res.json({ message: 'error' });
    } else {
      console.log('auth', authData);
      const sql = `SELECT * from onRoad.History where userId=${authData.data.id} and id = ${req.params.id}`;
      const query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        console.log('result', result);
        res.json({ history: result });
      });
    }
  });
});

router.delete('/:id', verifyToken, (req, res) => {
  console.log('params', req.params);

  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      console.log(err);
      res.json({ message: 'error' });
    } else {
      console.log('auth', authData);
      console.log(req.params);
      const sql = `DELETE FROM History WHERE id = ${req.params.id} AND userId=${authData.data.id} `;
      const query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
          console.log('result', result);
          res.json({ history: result });
        }
      });
    }
  });
});

module.exports = router;
