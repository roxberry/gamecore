require('dotenv').config();
const convict = require('convict');

const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "staging"],
    default: "development",
    env: "NODE_ENV"
  },
  ip: {
    doc: "The IP address to bind.",
    format: "ipaddress",
    default: "0.0.0.0",
    env: "IP_ADDRESS",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT",
    arg: "port"
  },
  db: {
    host: {
      doc: "Database host name/IP",
      format: '*',
      default: 'server1.dev.test'
    },
    name: {
      doc: "Database name",
      format: String,
      default: 'users'
    }
  }
});

const env = config.get('env');
config.loadFile(`./config/env/${env}.json`);

config.validate({
  allowed: 'strict'
}); // throws error if config does not conform to schema

module.exports = config.getProperties(); // so we can operate with a plain old JavaScript object and abstract away convict (optional)