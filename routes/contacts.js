const express = require('express');

const { addContact } = require('../controllers/contactsControllers');

const router = express.Router();

router.post('/', addContact);

module.exports = router;