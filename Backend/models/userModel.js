// Import mongoose
const mongoose = require('mongoose');
//Import bcryptjs
const bcrypt = require("bcryptjs");
// 3- Create userSchema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: ["name", "name required"]
    },
    slug: {
      type: String,
      lowercase: true
    },
    email: {
      type: String,
      required: [true,"email required"],
      unique: true,
      lowercase: true
    },
    phone: String,
    profileImg: String,
    password: {
      type: String,
      required: [true,"Password required"],
      minlength: [6,"Too Short password"],
      select: false
    },
    passwordChangedAt: Date,
    role: {
      type: String,
      enum: ["user","manager","admin"],
      default: "user"
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  {timestamps: true}
);

//Ignore Password from Global Solution in signup & login
const setTransform = (doc,ret) => {
  delete ret.password;
  return ret;
};
userSchema.set("toJSON", {transform: setTransform});
userSchema.set("toObject", {transform: setTransform});

//Hashing password in DB
userSchema.pre("save", async function(){
  if (!this.isModified("password")) {
    return;
  }
  this.password = await bcrypt.hash(this.password,12);
});

// 6- Create model
const userModel = mongoose.model("User",userSchema);

//Export CategoryModel to use it in services in userService.js
module.exports = userModel;