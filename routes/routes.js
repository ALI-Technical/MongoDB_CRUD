const express = require('express');
const getUsers = require('../controllers/getUsers');
const loginController = require('../controllers/loginController');
const router = express.Router();

const signupController = require("../controllers/signup");

router.post("/api/signup", signupController);
router.post('/api/login', loginController);
router.get('/api/users', getUsers);

module.exports = router;