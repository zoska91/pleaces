const experes = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');

const db = mysql.createConnection(config.db);

db.connect(err => {
  if (err) throw err;
});

global.db = db;

const app = experes()
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(logger('dev'))
  .use(cors())
  .options('*', cors());

app.get('/api', (req, res) => {
  res.json({
    message: 'welcome to the API'
  });
});

const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const notesRouter = require('./routes/notes');

app.use('/api/login', loginRouter);
app.use('/api/signup', signupRouter);
app.use('/api/notes', notesRouter);

// app.post('/api/posts', verifyToken, (req, res) => {
//   jwt.verify(req.token, 'secret', (err, authData) => {
//     if (err) {
//       res.json({ message: 'error' });
//     } else {
//       res.json({
//         message: 'Post created...',
//         authData
//       });
//     }
//   });
// });

// app.post('/api/login', (req, res) => {
//   const user = {
//     id: 1,
//     username: 'zoo',
//     email: 'zoska91@wp.pl'
//   };

//   jwt.sign({ user }, 'secret', (err, token) => {
//     res.json({
//       token
//     });
//   });
// });

//format od token

app.listen(8080, () => console.log('server on port 8080'));
