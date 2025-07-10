import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();
const auth= (req, res, next) => {
  //get token
    let token = req.headers['authorization'];
    console.log(token);
    // Support 'Bearer <token>' and plain token
    if (token && token.startsWith('Bearer ')) {
        token = token.split(' ')[1];
    }
    //check if token exists
    if (!token) {
        res.status(401).json({
            message: 'No token provided, authorization denied.'
        })
        return;
    }
    //verify token
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err) {
        console.log(err);
        res.status(401).json({
            message: 'Token is not valid.'
        })
    }
}
export default auth;