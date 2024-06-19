const jwt = require('jsonwebtoken');

const userAuth = (req, res, next) =>{
    const userToken = req.header('Authorization').replace('Bearer ', '');
    console.log(userToken)
    if(!userToken){
        return res.status(401).json({message:'No userToken, Authorization denied'});
    }

    try {
        const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'userToken is not valid' });
    }
}

module.exports = userAuth;