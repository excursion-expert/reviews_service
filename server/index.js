const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/reviews', function (req, res) {

	const sql = `SELECT * FROM reviews`;

  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(data);
    }
  })

})

app.get('/reviews/:userId', function (req, res) {

	var userId = req.params.userId;


	const sql = `SELECT * FROM users WHERE user_id = ` + db.escape(userId);

  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(data);
    }
  })

})
