const jwt = require('jsonwebtoken');

module.exports = {

    isAuth: (req,res,next) => {
        const authorizationHeader = req.headers.authorization;

        try{
            if(authorizationHeader){
                const token = req.headers.authorization.split(' ')[1];
    
                const decoded = jwt.verify(token,'sshhsshh');
                req.user = decoded;
            }
            
            next();
        }
        catch(err){
            res.status(401).json({
                message: 'Token is Invalid'
            });
        }
    }

}