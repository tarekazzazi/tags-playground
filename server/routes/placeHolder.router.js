const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

router.get("/", (req, res) => {
  const querytxt = `SELECT * FROM "tag"`;
  pool
    .query(querytxt)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`error in placeHolder Router ${querytxt}, ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
