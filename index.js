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
    // console.log("getData");

    resp.status(200).json({
      message: "Contact created",
      data: getData,
    });
  } catch {
    console.log("err");
  }
});
// delete routes for(delete contact with help of id)
app.delete("/delete-contact", async function (req, resp) {
  let id = req.query.id;
  // console.log(id);
  try {
    const contact = await Contact.findOne({ id });
    if (!contact) {
      resp.send("no contact present in database");
    } else {
      const deleteContact = await Contact.findByIdAndDelete(id);
    }

    resp.status(200).json({
      message: "Contact deleted successfully",
      data: deleteContact,
    });
  } catch (err) {
    console.log("err in delete contact");
  }
});

// create routes for patch contact
app.patch("/update/:id", async function (req, resp) {
  console.log(req.params);

  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        useUnifiedTopology: true,
      }
    );
    resp.status(200).json({
      status: "success",
      data: {
        updatedContact,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running on port ${port}`);
  }
});
