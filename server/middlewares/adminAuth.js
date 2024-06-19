const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) =>{
    const token = req.header('Authorization').replace('Bearer ', '');
    if(!token){
        return res.status(401).json({message:'No token, Authorization denied'});
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
        console.log(error)
    }
}

module.exports = adminAuth;