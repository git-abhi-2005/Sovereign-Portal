const User = require('../models/User');

const updateProfile = async (req, res) => {
  const { userId, ...profileData } = req.body;
  
  try {
    const user = await User.findByIdAndUpdate(userId, profileData, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ success: true, message: 'Profile completed successfully!', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
};

module.exports = { updateProfile };
