const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const placeHolderRouter = require("./routes/placeHolder.router.js");
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(express.static("build"));

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/placeholder", placeHolderRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
