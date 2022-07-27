import mysql from 'promise-mysql';

const createPool = mysql.createPool({
  connectionLimit: 10,
  // Docker will route db to the internal IP of the mysql instance
  host: process.env.DB_URL,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  insecureAuth: true,
  multipleStatements: true,
  timezone: 'Z',
});

module.exports = createPool;
