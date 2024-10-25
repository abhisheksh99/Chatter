import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const getUserForSidebar = asyncHandler(async (req, res) => {
  const loggedInUserId = req.user._id;

  // Find users except the logged-in user, excluding the password field
  const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

  if (filteredUsers) {
    res.status(200).json(filteredUsers);
  } else {
    res.status(404).json({ error: "Users not found" });
  }
});
