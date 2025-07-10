import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();
const auth= (req, res, next) => {
    let token = req.headers['authorization'];
    if (!token) {
        res.status(401).json({
            message: 'No token provided, authorization denied.'
        })
        return;
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err) {
        res.status(401).json({
            message: 'Token is not valid.'
        })
    }
}
export default auth;