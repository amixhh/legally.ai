const express = require('express');
const router = express.Router();
const ChatHistory = require('../models/ChatHistory');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.userId = user._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Save chat history
router.post('/save', verifyToken, async (req, res) => {
  try {
    const { message, response } = req.body;

    const chatHistory = new ChatHistory({
      user_id: req.userId,
      message,
      response
    });

    await chatHistory.save();

    res.status(201).json({
      success: true,
      message: 'Chat history saved successfully',
      chatHistory
    });
  } catch (error) {
    console.error('Error saving chat history:', error);
    res.status(500).json({
      success: false,
      message: 'Error saving chat history',
      error: error.message
    });
  }
});

// Get chat history for a user
router.get('/history', verifyToken, async (req, res) => {
  try {
    const chatHistory = await ChatHistory.find({ user_id: req.userId })
      .sort({ timestamp: -1 })
      .limit(50); // Get last 50 messages

    res.json({
      success: true,
      chatHistory
    });
  } catch (error) {
    console.error('Error fetching chat history:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching chat history',
      error: error.message
    });
  }
});

module.exports = router; 