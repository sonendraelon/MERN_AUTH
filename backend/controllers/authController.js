const User = require('../models/user')

const test = (req,res) => {
    res.json('test is working')
}

const registerUser = (req,res) => {
    try{
        const {name, email, password} = req.body;
        //check if name was entered
        if(!name){
            return res.json({
                error:'name is required'
            })
        };
        //check if password is good
        if(!password || password.length<6){
            return  res.json({
            error: 'Password is required and should be at least 6 char long'
            })
        };
        //check email
        const exist =  User.findOne({email});
        if(exist){
            return res.json({
                error: "Email already exists"
            })
        }
        //create user activation token
        const user =  User.create({
            name, email, password
        })
        return res.json(user)

    }catch(error){
        console.log(error)
    }

}

module.exports = {
    test,
    registerUser
}