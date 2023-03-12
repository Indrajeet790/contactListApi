const express = require("express");
const app = express();
const port = 8600;
// database connection
const db = require("./config/mongoose");

// import contactSchema
const Contact = require("./models/contact");

// add middleware from body parser
app.use(express.json());

// post route for create contact
app.post("/create_contact", function (req, resp) {
  Contact.create({
    name: req.body.name,
    phone: req.body.phone,
  }),
    function (err, newContact) {
      if (err) {
        console.log("err in create contact list");
        return;
      }
      return resp.json({
        message: "Contact created",
        data: newContact,
      });
    };
  console.log(message);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running on port ${port}`);
  }
});
