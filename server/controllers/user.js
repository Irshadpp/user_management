const bcrypt = require('bcrypt');
const User = require('../model/userdb');
const {validationResult} = require('express-validator');

const register = async (req, res) =>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        const {fName, lName, email, password} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(409).json({message: "Email already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            fName,
            lName,
            email,
            password:hashedPassword
        });
        await user.save();
        res.status(201).json({message: "Registeration successfull"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

const login = async (req,res) =>{
    try {
        const {email, password} = req.body;
        const checkEmail = await User.findOne({email});
        if(!checkEmail){
            return res.status(400).json({message:"Invalid email or password!"});
        }
        const checkPassword = await bcrypt.compare(password, checkEmail.password);
        if(!checkPassword){
            return res.status(400).json({message:"Invalid email or password!"});
        }
        return res.status(200).json({message:"Login successfull"});
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    register,
    login
}