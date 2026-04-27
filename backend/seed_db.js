require('dotenv').config();
const mongoose = require('mongoose');
const Job = require('./models/Job');

const jobsData = [
  { title: 'Senior Systems Administrator', org: 'National Informatics Bureau • New Delhi', salary: '₹1.2L - 1.8L /mo', type: 'Permanent', tag: 'GOVERNMENT', posted: '2h ago' },
  { title: 'UX Design Intern', org: 'Lumina Digital Solutions • Bengaluru', salary: '₹35k - 45k /mo', type: '6 Months', tag: 'PRIVATE', posted: '5h ago' },
  { title: 'Financial Policy Analyst', org: 'Department of Economic Affairs • Mumbai', salary: '₹90k - 1.4L /mo', type: 'Full-time', tag: 'GOVERNMENT', posted: 'Yesterday' }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB Connected for Seeding');
    await Job.deleteMany({});
    await Job.insertMany(jobsData);
    console.log('Seed Data Inserted Successfully');
    process.exit();
  })
  .catch(err => {
    console.error('Seeding Error:', err);
    process.exit(1);
  });
