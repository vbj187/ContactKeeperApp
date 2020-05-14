const express = require('express');
const router = express.Router();

// @route  "GET api/contacts"
// @description "GET all users contacts separately"
// @access "Private"
router.get('/', (req, res) => {
  res.send('get all contacts');
});

// @route  "POST api/contacts"
// @description "GET all users contacts separately"
// @access "Private"
router.post('/', (req, res) => {
  res.send('add contacts');
});

// @route  "PUT api/contacts/:id"
// @description "Update contact"
// @access "Private"
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route  "DELETE api/contacts/:id"
// @description "Update contact"
// @access "Private"
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
