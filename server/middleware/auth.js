
const auth= (req, res, next) => {
  //get token
    const token = req.headers['authorization'];
    //check if token exists
    if (!token) {
        res.status(401).json({
            message: 'No token provided, authorization denied.'
        })
    }
    //verify token
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