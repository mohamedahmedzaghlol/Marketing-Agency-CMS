//Import express
const express = require("express");
//Import getCategories , createCategory from services/categoryService.js
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../services/categoryService");

//Import categoryValidator.js
const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCatagoryValidator,
} = require("../utils/validator/categoryValidator");

// Import authService
const authService = require("../services/authService");

//Import router
const router = express.Router();

router
  .route("/")
  .get(getCategories)
  .post(
    authService.protect,
    authService.allowTo("manger", "admin"),
    createCategoryValidator,
    createCategory,
  );

router
  .route("/:id")
  .get(getCategoryValidator, getCategory)
  .put(
    authService.protect,
    authService.allowTo("manger", "admin"),
    updateCategoryValidator,
    updateCategory,
  )
  .delete(
    authService.protect,
    authService.allowTo("admin"),
    deleteCatagoryValidator,
    deleteCategory,
  );
//Export router to use it in server.js
module.exports = router;
