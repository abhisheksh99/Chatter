import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// Controller for user signup
export const userSignUp = asyncHandler(async (req, res) => {
  // Destructure the relevant fields from the request body
  const { fullName, username, password, confirmPassword, gender } = req.body;

  // Ensure password and confirmPassword fields match
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Password and Confirm Password do not match" });
  }

  // Check if a user with the provided username already exists
  const user = await User.findOne({ username });
  if (user) {
    return res.status(400).json({ error: "Username already exists" });
  }

  // Hash the password to store it securely
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Generate profile picture URL based on gender
  const boyProfilePic = `${process.env.AVATAR_BASE_URL}/boy?username=${username}`;
  const girlProfilePic = `${process.env.AVATAR_BASE_URL}/girl?username=${username}`;

  // Create a new user object with provided details
  const newUser = new User({
    fullName,
    username,
    password: hashedPassword, // Store hashed password
    gender,
    profilePic: gender === "Male" ? boyProfilePic : girlProfilePic,
  });

  // Save the user and generate a JWT token if valid
  await newUser.save();
  generateToken(newUser._id, res);

  // Send response with basic user details
  res.status(201).json({
    _id: newUser._id,
    fullName: newUser.fullName,
    username: newUser.username,
    profilePic: newUser.profilePic,
  });
});

// Controller for user login
export const userLogin = asyncHandler(async (req, res) => {
  // Retrieve username and password from request body
  const { username, password } = req.body;

  // Find the user in the database by username
  const user = await User.findOne({ username });

  // Compare provided password with stored hashed password
  const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

  // If user is not found or password is incorrect, return an error
  if (!user || !isPasswordCorrect) {
    return res.status(400).json({ error: "Invalid username or password" });
  }

  // Generate token and send successful login response
  generateToken(user._id, res);
  res.status(200).json({
    _id: user._id,
    fullName: user.fullName,
    username: user.username,
    profilePic: user.profilePic,
  });
});

// Controller for user logout
export const userLogout = asyncHandler(async (req, res) => {
  // Clear the JWT cookie by setting its value to an empty string
  // and set the expiration date to a time in the past.
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0), // Setting the expiration to the past will remove the cookie
  });

  // Send a success response confirming the user has logged out
  res.status(200).json({ message: "Logged out successfully" });
});
