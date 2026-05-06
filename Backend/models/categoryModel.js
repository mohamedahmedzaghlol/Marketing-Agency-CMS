// Import mongoose
const mongoose = require('mongoose');
// 1- Create categorySchema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category required"],
      unique: [true, "Category must be unique"],
      minlength: [3, "Too short category name"],
      maxlength: [32, "Too long category name"]
    },
    // A and B ---> shopping.com/a-and-b
    slug: {
      type: String,
      lowercase: true
    },
    description: {
      type: String,
      maxlength: [200, "Description is too long"]
    },
    image: String,
    colorCode: {
      type: String,
      default: '#000000'
    }
  },
  {timestamps: true} // create two fields in DB the first: CreatedAdd // the second: UpdatedAdd
);

// 2- Create model
const CategoryModel = mongoose.model('Category', categorySchema);

//Export CategoryModel to use it in services in categoryService.js
module.exports = CategoryModel;