const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) =>{
    const adminToken = req.header('Authorization').replace('Bearer ', '');
    if(!adminToken){
        return res.status(401).json({message:'No adminToken, Authorization denied'});
    }
    
    try {
        const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'adminToken is not valid' });
        console.log(error)
    }
}

module.exports = adminAuth;