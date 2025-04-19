const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');

// Google OAuth callback
router.get('/callback', async (req, res) => {
  try {
    const { code } = req.query;
    
    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${process.env.FRONTEND_URL}/api/auth/callback`,
        grant_type: 'authorization_code',
      }),
    });

    const tokens = await tokenResponse.json();
    
    // Get user info from Google
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });

    const userInfo = await userInfoResponse.json();

    // Create or update user in database
    let user = await User.findOne({ email: userInfo.email });

    if (!user) {
      user = new User({
        email: userInfo.email,
        name: userInfo.name
      });
      await user.save();
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Redirect to Streamlit app with token
    res.redirect(`http://localhost:8501?token=${token}`);
  } catch (error) {
    console.error('Auth callback error:', error);
    res.redirect(`${process.env.FRONTEND_URL}/login?error=auth_failed`);
  }
});

// Save or update user information
router.post('/save-user', async (req, res) => {
  try {
    const { email, name } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      // Update existing user
      user.name = name;
      await user.save();
    } else {
      // Create new user
      user = new User({
        email,
        name
      });
      await user.save();
    }

    res.status(200).json({
      success: true,
      message: 'User information saved successfully',
      user
    });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({
      success: false,
      message: 'Error saving user information',
      error: error.message
    });
  }
});

// Get current user information
router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data' });
  }
});

module.exports = router; 