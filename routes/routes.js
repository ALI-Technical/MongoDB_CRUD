const express = require('express');
const getUsers = require('../controllers/getUsers');
const router = express.Router();

const signupController = require("../controllers/signup");

router.post("/api/signup", signupController);
router.get('/api/users', getUsers)

module.exports = router;