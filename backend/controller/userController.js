


const login = async(req,res)=> {
    res.send({msg:"login"})
}

const signup = async(req,res)=> {
    res.send({msg:"signup"})
}


module.exports = {
    login,
    signup
}