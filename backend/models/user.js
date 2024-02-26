const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type : String,
    required: true,
    unique: true
  },
  password : {
    type : String,
    required : true
  }
})



userSchema.statics.signup = async function(email,password) {


  // validate
  if(!email || !password){
    throw Error(`All fields must be filled !`)
  }
  if(!validator.isEmail(email)){
    throw Error(`please enter the correct email`)
  }
  if(!validator.isStrongPassword(password)){
    throw Error(`password must be strong ?`)
  }


  const exist = await this.findOne({email})

  if(exist){
    throw Error("email already exist in DB !")
  }

  //  encrypting password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password,salt);
  const user = await this.create({email,password:hash});

  return user;

}



const userModel = mongoose.model("user",userSchema);

module.exports = userModel ;
