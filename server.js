require('rootpath')();
var express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_utils/jwt');
const errorHandler = require('_utils/error-handler');
const config = require('config/config');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('users/user.controller'));

app.get('/', (req, res) => res.send('Hello World!'));

// global error handler
app.use(errorHandler);

const hostname = process.env.HOST || config.ip;
const port = process.env.PORT || config.port;

const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
