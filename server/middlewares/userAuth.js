const jwt = require('jsonwebtoken');

const userAuth = (req, res, next) =>{
    const token = req.header('Autherization').replace('Bearer ', '');
    if(!token){
        return res.status(401).json({message:'No token, Authorization denied'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
}

module.exports = userAuth