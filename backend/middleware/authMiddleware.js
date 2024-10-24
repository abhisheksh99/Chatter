import jwt from "jsonwebtoken"; 
import User from "../models/userModel.js"; 

// Middleware to protect routes by verifying JWT
export const protect = async (req, res, next) => {
    try {
        // Get the token from the cookies
        const token = req.cookies.jwt;
        
        // Check if token is present
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the token is valid
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid token provided" });
        }

        // Find the user based on the decoded user ID, excluding the password from the result
        const user = await User.findById(decoded.userId).select("-password");

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Attach the user object to the request for use in subsequent middleware/routes
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
        
    } catch (error) {
        // Log any errors that occur during token verification or user retrieval
        console.log("Error:", error.message);
        
        // Return a 500 Internal Server Error response for unexpected errors
        res.status(500).json({ error: "Internal server error" });
    }
};
