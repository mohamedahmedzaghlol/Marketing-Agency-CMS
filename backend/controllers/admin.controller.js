//model
const Admin=require("../models/Admin.model")
//joi schema
const adminSchema=require("./Validation/admin.validation")
//Jwt
const jwt=require("jsonwebtoken")
const signtoken=(id)=>{
    return jwt.sign({id},process.env.SK_JWT,{expiresIn:"7d"})
}
//login controller
//export