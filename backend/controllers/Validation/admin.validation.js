const joi =require("joi")
const loginschema=joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(6).required(),
})

module.exports=loginschema;