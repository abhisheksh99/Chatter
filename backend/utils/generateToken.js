import jwt from "jsonwebtoken";


const generateToken = (userId, res) => {
    // Generate a JWT token using the user ID, with a secret key from environment variables
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d"  // Token will expire in 15 days
    });

    // Set the generated JWT as an HTTP-only cookie to ensure it's secure and cannot be accessed via client-side JavaScript
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // Cookie will expire after 15 days (15 days in milliseconds)
        httpOnly: true,  // Prevents the cookie from being accessible via client-side JavaScript
        sameSite: "strict",  // Ensures the cookie is only sent to the same site (CSRF protection)
        
    });
};

export default generateToken;
