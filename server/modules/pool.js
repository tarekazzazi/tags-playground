const pg = require("pg");

const Pool = pg.Pool;

const pool = new Pool({
  database: "tags_playground", // name of database to connect to
  host: "localhost", // hosting locally on localhost:3000/#/
  port: 5432, // connecting to postgres port
  max: 10, // max number of connections for this pool
  idleTimeoutMillis: 30000, // 30 seconds before timeout/cancel query
});

// pool listener for connection
pool.on("connect", () => {
  console.log("connected to DB");
});

pool.on("error", (error) => {
  console.log("error with DB pool", error);
});

module.exports = pool;
