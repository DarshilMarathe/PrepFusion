var jwt = require('jsonwebtoken');
const JWT_SECRET = "shhhh"

const fetchuser = (req,res,next)=>{
    //Get the user from the JWT Token and add id to req object
    //Header name when sending req
    const token = req.header('auth-token'); // add in Header in thunderclient

    if(!token){
        res.status(401).send({error:"Please Authenticate using valid token"})
    }

    try {
        const data =  jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();

    } catch (error) {
        res.status(401).send({error:"Please Authenticate using valid token"})
    }

}

module.exports = fetchuser;