const express = require('express');
const router = express.Router();
const verifyToken = require('../jwt/verifyToken');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/add', verifyToken, (req, res) => {
  const {
    noteTitle,
    noteHistoryId,
    notePlanId,
    noteRoadId,
    noteText
  } = req.body;

  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      console.log(err);
      console.log('auth', authData);
      res.json({ message: 'error' });
    } else {
      console.log('auth', authData);
      const sql = `insert into onRoad.Notes(text, createDate, userId, historyId, planId, roadId, title) values ('${noteText}', now(), ${
        authData.data.id
      }, ${noteHistoryId || null}, ${notePlanId || null}, ${noteRoadId ||
        null}, '${noteTitle}')`;

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
  // console.log('body', req.body);

  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      console.log(err);
      res.json({ message: 'error' });
    } else {
      console.log('auth', authData);
      const sql = `SELECT * from Notes where userId=${authData.data.id}`;
      const query = db.query(sql, (err, result) => {
        console.log('result', result);
        res.json({ notes: result });
      });
    }
  });
});

module.exports = router;
