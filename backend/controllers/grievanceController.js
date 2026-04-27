const Grievance = require('../models/Grievance');

const getGrievances = async (req, res) => {
  try {
    const { userId } = req.query;
    const filter = userId ? { user: userId } : {};
    const grievances = await Grievance.find(filter).sort({ createdAt: -1 });
    res.json({ grievances });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
};

const createGrievance = async (req, res) => {
  try {
    const { category, title, description, userId } = req.body;
    const newGrievance = new Grievance({
      category,
      title,
      description,
      user: userId
    });
    
    await newGrievance.save();
    res.json({ success: true, grievance: newGrievance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
};

module.exports = { getGrievances, createGrievance };
