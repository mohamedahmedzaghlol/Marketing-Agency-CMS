//Import express
const express = require("express");
//Import authValidator
const {signupValidator,loginValidator} = require("../utils/validator/authValidator")
//Import services/authService.js
const {signup,login} = require("../services/authService");

const router = express.Router();
router.route("/signup").post(signupValidator,signup)
router.route("/login").post(loginValidator,login)

//Export router to use it in server.js
module.exports = router;