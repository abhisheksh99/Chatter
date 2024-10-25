import asyncHandler from "express-async-handler";
import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";

// Controller to send a message
export const sendMessage = asyncHandler(async (req, res) => {
  // Destructure message and receiverId from the request body and parameters
  const { message } = req.body;
  const { id: receiverId } = req.params;

  // Get the sender's ID from the authenticated user
  const senderId = req.user._id;

  // Check if a conversation exists between the sender and receiver
  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  // If no conversation exists, create a new one
  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  // Create a new message object
  const newMessage = new Message({
    senderId,
    receiverId,
    message,
  });

  // Push the new message ID to the conversation's messages array
  conversation.messages.push(newMessage._id);

  // Save the new message and the updated conversation; this will run in parallel
  await Promise.all([conversation.save(), newMessage.save()]);

  // Respond with the newly created message
  res.status(201).json(newMessage);
});

// Controller to get messages in a conversation
export const getMessages = asyncHandler(async (req, res) => {
  // Destructure userToChatId from request parameters
  const { id: userToChatId } = req.params;
  const senderId = req.user._id;

  // Find the conversation that includes both the sender and the recipient
  const conversation = await Conversation.findOne({
    participants: { $all: [senderId, userToChatId] },
  }).populate("messages");

  // If no conversation is found, return an empty array
  if (!conversation) {
    return res.status(200).json([]);
  }

  // Extract messages from the conversation
  const messages = conversation.messages;

  // Respond with the retrieved messages
  res.status(200).json(messages);
});
