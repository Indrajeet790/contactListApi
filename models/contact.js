const mongoose = require("mongoose");

// create schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Contact = new mongoose.model("Contact", contactSchema);
module.exports = Contact;
