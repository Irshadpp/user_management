const bcrypt = require('bcrypt');
const User = require('../model/userdb');
const jwt = require('jsonwebtoken')

const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const admin = await User.findOne({email});
        console.log('-------------------',admin)
        if(!admin){
            return res.status(401).json({message:"Invalid email or password"});
        }
        console.log('-------------------',admin)
        if(!admin.isAdmin){
            return res.status(401).json({message:'Sorry you are not an admin'});
        }
        const checkPassword = await bcrypt.compare(password, admin.password);
        if(!checkPassword){
            return res.status(401).json({message:"Invalid email or password"});
        }

        const token = jwt.sign({adminId:admin._id}, process.env.JWT_SECRET,{expiresIn:'1h'});
        console.log(jwt, admin)
        return res.status(200).json({message:"Login successfull", token, admin});
        
    } catch (error) {
        console.log(error);
    }
}

const getUsers = async (req,res) =>{
    try {
        const users = await User.find();
        return res.status(200).json({users});
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (req, res) =>{
    try {
        const {userId} = req.params;
        await User.deleteOne({_id:userId});
        const users = await User.find()
        res.status(200).json({message:"Deleted user successfully", users});
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    login,
    getUsers,
    deleteUser
}