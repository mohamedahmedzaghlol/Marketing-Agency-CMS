//Require mongoose

const mongoose=require("mongoose");
const bycryppt=require()
//Schema
const Adminschema =new mongoose.Schema({
    username:{
        type:String,
        required:[true, "username is required"]

    },
    email:{
        type:String,
        required:[true, "email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minlength:[6 , "password must be at least 6 charachters"],
        select:false
    }
},{
    timestamps:true});
//Hooks
Adminschema.pre("save", async function(next){
if (this.isModified("password"))return next();
this .password=await bycryppt.hash(this.password,10);
})
Adminschema.methodes.comparepassword=async function(mathed){
    return await bycryppt.compare(matched,this.password)
}
//model
const Admin=mongoose.model("Admin",Adminschema)

//export
module.exports=Admin;