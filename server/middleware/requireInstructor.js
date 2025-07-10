const requireInstructor=(req,res,next)=>{
    // Check if user is instructor
    if (req.user.role!==instructor) {
        return res.status(403).json({
            message: 'Access denied. You must be an instructor to perform this action.'
        });
    }er
    next();
}