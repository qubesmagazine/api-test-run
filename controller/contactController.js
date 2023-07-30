
const Contact = require("../models/contactModel");
const expressAsyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = expressAsyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc Create New contact
// @route POST /api/contacts
// @access public

const createContact = expressAsyncHandler( async (req, res) => {
const contact = await Contact.create(req.body);
  if (!contact) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json(contact);
  console.log("The request body is ", req.body);
});

// @desc Get New contact
// @route GET /api/contacts/:id
// @access public

const getContact = expressAsyncHandler( async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if (!contact) {
    res.status(404);
    throw new Error('Couldnt find contact')
  }
  res.status(200).json(contact);
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public

const updateContact = expressAsyncHandler( async  (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('Couldnt find contact')
  }
  const updatedContact = await Contact.findByIdAndUpdate(
  req.params.id,
  req.body,
  {new: true}

  )

  res.status(200).json(updatedContact);
});

// @desc Delete contact
// @route delete /api/contacts/:id
// @access public

const deleteContact = expressAsyncHandler( async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('Couldnt find contact')
  }
  await Contact.remove(contact)

  res.status(200).json(contact);

});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
