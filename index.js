const express = require("express");
const app = express();
const port = 8600;
// database connection
const db = require("./config/mongoose");

// import contactSchema
const Contact = require("./models/contact");

// add middleware from body parser
app.use(express.json());
app.get("/", (req, resp) => {
  resp.send("it is running");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running on port ${port}`);
  }
});
