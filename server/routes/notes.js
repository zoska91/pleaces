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
      res.json({ message: 'error' });
    } else {
      const sql = `insert into onRoad.Notes(text, createDate, userId, historyId, planId, roadId, title) values 
      (
        '${noteText}', 
        now(), 
        ${authData.data.id}, 
        ${noteHistoryId || null}, 
        ${notePlanId || null}, 
        ${noteRoadId || null}, 
        '${noteTitle}'
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
      const sql = `SELECT * from Notes where userId=${authData.data.id}`;
      const query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
          res.json({ notes: result });
        }
      });
    }
  });
});

router.get('/get-one-note/:id', verifyToken, (req, res) => {
  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      console.log(err);
      res.json({ message: 'error' });
    } else {
      const sql = `SELECT * from Notes where userId=${authData.data.id} and id = ${req.params.id}`;
      const query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        res.json({ notes: result });
      });
    }
  });
});

router.put('/:id', verifyToken, (req, res) => {
  const {
    editNoteTitle,
    editNoteHistoryId,
    editNotePlanId,
    editNoteRoadId,
    editNoteText
  } = req.body;

  jwt.verify(req.token, config.secret, (err, authData) => {
    if (err) {
      console.log(err);
      res.json({ message: 'error' });
    } else {
      const sql = `
        UPDATE Notes SET title='${editNoteTitle}', text='${editNoteText}', historyId=${editNoteHistoryId ||
        null}, planId=${editNotePlanId || null}, roadId=${editNoteRoadId ||
        null}, createDate=now()  WHERE id = ${req.params.id} `;

      const query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
          res.json({ message: 'update' });
        }
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
      const sql = `DELETE FROM Notes WHERE id = ${req.params.id} AND userId=${authData.data.id} `;
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
