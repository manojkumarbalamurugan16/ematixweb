import express from 'express';  // Use ES module syntax
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';

import { something } from './module.js';


const app = express();
const port = process.env.PORT || 3001; // Use the PORT environment variable or default to 3001

// const port = 3001; // Use consistent port

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Ensure 'uploads' directory exists
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir); // Create the folder if it doesn't exist
}

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Store files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB file size limit
});

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'auth-db1824.hstgr.io',
  user: 'u816864393_ematixsolution', // Default username for MySQL in XAMPP
  password: 'Ematix@2024', // Default password is empty for MySQL in XAMPP
  database: 'u816864393_Jobapplication', // Replace with your database name
});

// Test the connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Backend POST API for form submission (Job Applications)
app.post('/api/submit', upload.single('resume'), (req, res) => {
  const {
    fullName,
    dob,
    qualification,
    branch,
    noticePeriod,
    experience,
    address,
    mobile,
    email,
    institution,
    cgpa,
    skills,
    jobRole,
  } = req.body;

  const resumeFilePath = req.file ? req.file.path : null; // Path to uploaded file

  const query = `
    INSERT INTO applications (fullName, dob, qualification, branch, noticePeriod, experience, address, mobile, email, institution, cgpa, skills, jobRole, resume)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      fullName,
      dob,
      qualification,
      branch,
      noticePeriod,
      experience,
      address,
      mobile,
      email,
      institution,
      cgpa,
      skills,
      jobRole,
      resumeFilePath, // Store the file path or filename
    ],
    (err, result) => {
      if (err) {
        console.error('Error inserting data into database:', err);
        return res.status(500).json({ message: 'Error submitting application', error: err });
      }
      console.log('Data inserted successfully', result);
      res.status(200).json({ message: 'Application submitted successfully' });
    }
  );
});

// Handle POST request to /api/contact
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

const db1 = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Default username for MySQL in XAMPP
  password: '', // Default password is empty for MySQL in XAMPP
  database: 'contact_form', // Replace with your database name
});
app.post('https://ematixsolutions.com/api/contact', (req, res) => {
  try {
    const { firstName, email, message } = req.body;

    // Example validation
    if (!firstName || !email || !mobile || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Simulate saving inquiry (e.g., to a database)
    console.log('Received data:', { firstName, email,mobile, message });

    // Simulate success
    res.status(200).json({ message: 'Inquiry submitted successfully!' });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ message: 'Error saving inquiry', error: error.message });
  }
});


// Campus Ambassador Submission Route
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json()); 

const db3 = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Default username for MySQL in XAMPP
  password: '', // Default password is empty for MySQL in XAMPP
  database: 'campus_ambassador', // Replace with your database name
});
app.post('https://ematixsolutions.com/api/campus-ambassador', upload.single('resume'), (req, res) => {
  const {
    fullName,
    gender,
    mobile,
    email,
    qualification,
    branch,
    yearOfStudy,
    collegeName,
    department,
    specialization,
    yearOfPassout,
    motivation,
  } = req.body;

  const resumePath = req.file ? req.file.path : null; // Path to uploaded file

  const query = `
    INSERT INTO campus_ambassadors (fullName, gender, mobile, email, qualification, branch, yearOfStudy, collegeName, department, specialization, yearOfPassout, motivation, resume)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    fullName,
    gender,
    mobile,
    email,
    qualification,
    branch, 
    yearOfStudy,
    collegeName,
    department,
    specialization,
    yearOfPassout,
    motivation,
    resumePath,
  ];

  db3.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting campus ambassador data:', err);
      return res.status(500).json({ message: 'Error submitting campus ambassador application', error: err });
    }
    console.log('Campus ambassador application submitted successfully:', result);
    res.status(200).json({ message: 'Campus ambassador application submitted successfully' });
  });
});
app.post('/api/campus-ambassador', (req, res) => {
  res.json({ message: 'Submission successful' });
});

app.listen(5000, () => console.log('Server running on port 5000'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
