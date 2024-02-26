const User = require('../models/user')


const login = async(req,res)=> {
    res.send({msg:"login"})
}

const signup = async(req,res)=> {


    const {email,password} = req.body ;

    try {

        const user = await User.signup(email,password);
        res.status(200).json({email,user})
        
    } catch (error) {
        res.status(404).json({error:error.message})
    }

    // res.send({msg:"signup"})
}


module.exports = {
    login,
    signup
}