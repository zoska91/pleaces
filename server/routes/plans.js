const express = require('express');
const router = express.Router();
const verifyToken = require('../jwt/verifyToken');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/add', verifyToken, (req, res) => {
  const {
    planTitle,

    planText,
    planAdres,
    planLat,
    planLon
  } = req.body;

  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      console.log(err);
      res.json({ message: 'error' });
    } else {
      const sql = `insert into onRoad.Plans(text, createData, userId, title, adres, lat, lon) 
      values 
      (
      '${planText}', 
      now(), 
      ${authData.data.id}, 
      '${planTitle}',
      '${planAdres}',
      ${planLat || null},
      ${planLon || null}
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
      const sql = `SELECT * from onRoad.Plans where userId=${authData.data.id}`;
      const query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
          res.json({ plans: result });
        }
      });
    }
  });
});

router.get('/get-one-plan/:id', verifyToken, (req, res) => {
  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      console.log(err);
      res.json({ message: 'error' });
    } else {
      const sql = `SELECT * from onRoad.Plans where userId=${authData.data.id} and id = ${req.params.id}`;
      const query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        res.json({ plans: result });
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
      const sql = `DELETE FROM Plans WHERE id = ${req.params.id} AND userId=${authData.data.id} `;
      const query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
          res.json({ notes: result });
        }
      });
    }
  });
});

module.exports = router;
