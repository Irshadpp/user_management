const bcrypt = require('bcrypt');
const User = require('../model/userdb')

const register = async (req, res) =>{
    try {
        const {fName, lName, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            fName,
            lName,
            email,
            password:hashedPassword
        })
        await user.save();
        res.status(201).json('user created');
    } catch (error) {
        console.log(error)
    }
}




module.exports = {
    register,
}