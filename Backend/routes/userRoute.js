//Import express
const express = require("express");
//Import userValidator
const {
  getUserValidator,
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
  changeUserPasswordValidator,
} = require("../utils/validator/userValidator");

//Import services/userService.js
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  changeUserPassword,
} = require("../services/userService");

// Import authService
const authService = require("../services/authService");

//Import router
const router = express.Router();

router.put(
  "/changePassword/:id",
  changeUserPasswordValidator,
  changeUserPassword,
);

router
  .route("/")
  .get(getUsers)
  .post(
    authService.protect,
    authService.allowTo("admin"),
    createUserValidator,
    createUser,
  );

router
  .route("/:id")
  .get(getUserValidator, getUser)
  .put(
    authService.protect,
    authService.allowTo("admin"),
    updateUserValidator,
    updateUser,
  )
  .delete(
    authService.protect,
    authService.allowTo("admin"),
    deleteUserValidator,
    deleteUser,
  );

//Export router to use it in server.js
module.exports = router;
