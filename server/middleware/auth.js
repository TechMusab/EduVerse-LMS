import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const auth = (req, res, next) => {
    let token = req.headers['authorization'];
    
    
    if (!token) {
        return res.status(401).json({
            message: 'No token provided, authorization denied.'
        });
    }

    // Handle both "Bearer <token>" and plain token formats
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            message: 'Token is not valid or has expired.'
        });
    }
};

export default auth;