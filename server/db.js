const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "qwertyuiop",
    host: "localhost",
    port: 5432,
    database: "mirtodo"
  });

module.exports = pool;