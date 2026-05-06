//Import express
const express = require("express");
//Import getCategories , createCategory from services/categoryService.js
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
} = require("../services/categoryService");

//Import categoryValidator.js
const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCatagoryValidator
} = require("../utils/validator/categoryValidator");

//Import router
const router = express.Router();

router.route("/").get(getCategories).post(createCategoryValidator,createCategory);

router
  .route("/:id")
  .get( getCategoryValidator,getCategory)
  .put(updateCategoryValidator,updateCategory)
  .delete(deleteCatagoryValidator,deleteCategory)
//Export router to use it in server.js
module.exports = router;
