const bcrypt = require('bcrypt');
const User = require('../model/userdb');
const path = require('path')
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

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
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid email or password!"});
        }
        const checkPassword = await bcrypt.compare(password, user.password);
        if(!checkPassword){
            return res.status(400).json({message:"Invalid email or password!"});
        }
        console.log(user)
        const userToken = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

        return res.status(200).json({message:"Login successfull", userToken, user});
    } catch (error) {
        console.log(error)
    }
}

const uploadPhoto = async (req, res) =>{
    try {
        if(!req.file){
            return res.status(400).json({message:"No file uploaded"});
        }
        const filePath = path.join('./images', req.file.filename);
        const user_id = req.user.userId;
        const user = await User.findById(user_id);
        user.profilePhoto = filePath;
        await user.save();
        res.status(200).json({message:"Profile photo updated successfully", filePath: filePath})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
}

const updateUser = async (req,res) =>{
    try {
        const user_id = req.user.userId
        const {fName, lName, email} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser && user_id != existingUser._id){
            return res.status(409).json({message: "Email already exists"});
        }

            const updatedUser = await User.findByIdAndUpdate(user_id, {
                fName,
                lName,
                email
            },
            {new:true}
        );

        res.status(200).json({message:"Profile edited Successfully", user:updatedUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"});
    }
}


module.exports = {
    register,
    login,
    uploadPhoto,
    updateUser
}