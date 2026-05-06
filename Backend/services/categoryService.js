//Import slugify
const slugify = require("slugify");
//Import express-async-handler
const asyncHandler = require("express-async-handler");
//Import CategoryModel
const CategoryModel = require("../models/categoryModel");
//Import ApiError to handle operational error 
const ApiError = require("../utils/apiError");
//exports.getCategories to use it in routes in categoryRoute.js
//express-async-handler & async & await
// @desc Get list of categories
// @route GET  http://localhost:3000/api/v1/categories
// @access Public
exports.getCategories = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  const categories = await CategoryModel.find({}).skip(skip).limit(limit);
  res.status(200).json({ results: categories.length, page, data: categories });
});

//exports.getCategory to use it in routes in categoryRoute.js
//express-async-handler & async & await
// @desc Get Category By id
// @route GET  http://localhost:3000/api/v1/categories/:id
// @access Public
exports.getCategory = asyncHandler(async (req, res,next) => {
  const { id } = req.params;
  const category = await CategoryModel.findById(id);
  if (!category) {
    //res.status(404).json({ msg: `No category for this id ${id}` });

    //Refactor above code
    return next(new ApiError(`No category for this id ${id}`,404));
  }
  res.status(200).json({ data: category });
});

//exports.createCategory to use it in routes in categoryRoute.js
//express-async-handler & async & await
// @desc Create category
// @route POST  http://localhost:3000/api/v1/categories
// @access Private
exports.createCategory = asyncHandler(async (req, res) => {
  const { name, description, colorCode } = req.body;
  const category = await CategoryModel.create({
    name,
    slug: slugify(name),
    description,
    colorCode,
  });
  res.status(201).json({ data: category });
});

//exports.updateCategory to use it in routes in categoryRoute.js
//express-async-handler & async & await
// @desc Update category
// @route PUT  http://localhost:3000/api/v1/categories/:id
// @access Private
exports.updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (name) {
    req.body.slug = slugify(name);
  }
  const category = await CategoryModel.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true },
  );
  if (!category) {
    //res.status(404).json({ msg: `No category for this id ${id}` });

    //Refactor above code
    return next(new ApiError(`No category for this id ${id}`,404));
  }
  res.status(200).json({ data: category });
});

//exports.deleteCategory to use it in routes in categoryRoute.js
//express-async-handler & async & await
// @desc Delete category
// @route Delete  http://localhost:3000/api/v1/categories/:id
// @access Private
exports.deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await CategoryModel.findByIdAndDelete(id);
  if (!category) {
    //res.status(404).json({ msg: `No category for this id ${id}` });

    //Refactor above code
    return next(new ApiError(`No category for this id ${id}`,404));
  }
  res.status(204).send();
});
