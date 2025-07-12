const requireInstructor = (req, res, next) => {
    
    // Check if user exists and has role information
    if (!req.user || !req.user.role) {
        return res.status(401).json({
            message: 'User information not found. Please log in again.'
        });
    }
    
    // Check if user is instructor
    if (req.user.role !== "instructor") {
        return res.status(403).json({
            message: 'Access denied. You must be an instructor to perform this action.'
        });
    }
    
    next();
};

export default requireInstructor;