const User = require('../models/User');

const sendOtp = (req, res) => {
  const { mobileNumber } = req.body;
  if (!mobileNumber) {
    return res.status(400).json({ error: 'Mobile number is required' });
  }

  res.json({ message: 'OTP sent successfully', mockOtp: '123456' });
};

const verifyOtp = async (req, res) => {
  const { mobileNumber, otp } = req.body;
  
  if (otp === '123456') {
    try {
      let user = await User.findOne({ mobileNumber });
      if (!user) {
        user = new User({ mobileNumber });
        await user.save();
      }
      res.json({ success: true, message: 'Login successful', token: 'mock-jwt-token', userId: user._id, user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.status(401).json({ error: 'Invalid OTP' });
  }
};

module.exports = { sendOtp, verifyOtp };
