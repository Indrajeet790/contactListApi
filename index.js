const express = require("express");
const app = express();
app.use(express.json());
const port = 8600;
// database connection
const db = require("./config/mongoose");

// import contactSchema
const Contact = require("./models/contact");

// add middleware from body parser

// post route for create contact
app.post("/create_contact", async function (req, resp) {
  try {
    const newContact = await Contact.create({
      name: req.body.name,
      phone: req.body.phone,
    });
    console.log(newContact);

    resp.status(200).json({
      status: "success",
      data: {
        data: newContact,
      },
    });
  } catch (err) {
    console.log(err);
  }
});
// get routes
app.get("/get-contact", async function (req, resp) {
  try {
    const getData = await Contact.find({});
    console.log("getData");

    resp.status(200).json({
      message: "Contact created",
      data: getData,
    });
  } catch {
    console.log("err");
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running on port ${port}`);
  }
});
