require('rootpath')();
const config = require('config/config');
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose.connect(config.connectionString, {
        useNewUrlParser: true,
        auth: {
            user: config.databaseUser,
            password: config.databaseKey
        }
    })
    .then(() => console.log('Connection to database successful'))
    .catch((err) => console.error(err));

mongoose.Promise = global.Promise;

module.exports = {
    User: require('users/user.model')
};