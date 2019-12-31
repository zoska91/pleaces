const express = require('express');
const router = express.Router();
const verifyToken = require('../jwt/verifyToken');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/add', verifyToken, (req, res) => {
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
      res.json({ message: 'error' });
    } else {
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
          res.json({ message: 'created' });
        }
      });
    }
  });
});

router.get('/get-all', verifyToken, (req, res) => {
  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      console.log(err);
      res.json({ message: 'error' });
    } else {
      const sql = `SELECT * from onRoad.History where userId=${authData.data.id}`;
      const query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
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
      const sql = `SELECT * from onRoad.History where userId=${authData.data.id} and id = ${req.params.id}`;
      const query = db.query(sql, (err, result) => {
        res.json({ history: result });
      });
    }
  });
});

router.delete('/:id', verifyToken, (req, res) => {
  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      console.log(err);
      res.json({ message: 'error' });
    } else {
      const sql = `DELETE FROM History WHERE id = ${req.params.id} AND userId=${authData.data.id} `;
      const query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
          res.json({ history: result });
        }
      });
    }
  });
});

module.exports = router;
