import React, { useState } from 'react';
import styles from '../Pages/CampusAmbassador.module.css';
import axios from 'axios';

const CampusAmbassador = () => {
    const [responseMessage, setResponseMessage] = useState(''); // Define a state variable for response message

    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        mobile: '',
        email: '',
        qualification: '',
        branch: '',
        yearOfStudy: '',
        collegeName: '',
        department: '',
        specialization: '',
        yearOfPassout: '',
        motivation: '',
        resume: null, // To handle file upload
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleFileChange = (e) => {
        setFormData({
          ...formData,
          resume: e.target.files[0],
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          console.log("Requesting URL:", 'http://localhost:5000/api/campus-ambassador');
          const response = await axios.post('http://localhost:5000/api/campus-ambassador', {
            name: 'John Doe',
            email: 'john@example.com',
          });
          console.log(response.data);
        } catch (error) {
          console.error("Error occurred while submitting:", error);
        }
      };
      
      

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Join Our Campus Ambassador Program</h1>
        <div className={styles.formContainer}>
          <h2>Apply Now</h2>
          <form className={styles.form} onSubmit={handleSubmit} action="/api/campus-ambassador" method="POST" enctype="multipart/form-data">
            {/* Full Name */}
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
                className={styles.input}
              />
            </div>

            {/* Mobile Number */}
            <div className={styles.inputGroup}>
              <label htmlFor="mobile" className={styles.label}>
                Mobile Number*
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter your mobile number"
                required
                className={styles.input}
              />
            </div>

            {/* Email */}
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                required
                className={styles.input}
              />
            </div>
            {/* Gender */}
            <div className={styles.inputGroup}>
              <label htmlFor="gender" className={styles.label}>
                Gender*
              </label>
              <select id="gender" required className={styles.input}>
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* Specialization */}
            <div className={styles.inputGroup}>
              <label htmlFor="specialization" className={styles.label}>
                Specialization*
              </label>
              <select id="specialization" required className={styles.input}>
                <option value="" disabled selected>
                  Select your specialization
                </option>
                <option value="Arts">Arts</option>
                <option value="Diploma">Diploma</option>
                <option value="Engineering">Engineering</option>
              </select>
            </div>


            {/* Qualification */}
            <div className={styles.inputGroup}>
              <label htmlFor="qualification" className={styles.label}>
                Qualification*
              </label>
              <input
                type="text"
                id="qualification"
                placeholder="Enter your qualification"
                required
                className={styles.input}
              />
            </div>

            {/* Branch */}
            <div className={styles.inputGroup}>
              <label htmlFor="branch" className={styles.label}>
                Branch*
              </label>
              <input
                type="text"
                id="branch"
                placeholder="Enter your branch"
                required
                className={styles.input}
              />
            </div>
            {/* College Name */}
            <div className={styles.inputGroup}>
              <label htmlFor="college" className={styles.label}>
                College Name*
              </label>
              <input
                type="text"
                id="college"
                placeholder="Enter your college name"
                required
                className={styles.input}
              />
            </div>

           {/* Year of Study */}
          <div className={styles.inputGroup}>
            <label htmlFor="yearOfStudy" className={styles.label} >Year of Study*</label>
            <select
              id="yearOfStudy"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              required
              className={styles.input}
             
            >
              <option value="" disabled  >
                Select your year of study
              </option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

            {/* Year of Passed Out */}
            <div className={styles.inputGroup}>
              <label htmlFor="passedout" className={styles.label}>
                Year of Passed Out*
              </label>
              <input
                type="number"
                id="passedout"
                placeholder="Enter your year of graduation"
                required
                className={styles.input}
                min="1900"
                max={new Date().getFullYear() + 5} // Allows future years up to 5 years from now
              />
            </div>

            {/* Why Campus Ambassador */}
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                Why do you want to be a Campus Ambassador?*
              </label>
              <textarea
                id="message"
                placeholder="Share your motivation in a few sentences"
                required
                className={styles.textarea}
              ></textarea>
            </div>

            {/* Resume Upload */}
            <div className={styles.inputGroup}>
              <label htmlFor="resume" className={styles.label}>
                Upload Your Resume (PDF)*
              </label>
              <input
                type="file"
                id="resume"
                accept=".pdf,.docx,.doc"
                required
                className={styles.fileInput}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitButton}>
              Submit Application
            </button>
          </form>

          {responseMessage && <p className={styles.responseMessage}>{responseMessage}</p>}
        </div>

        <div className={styles.contact}>
          <h2>Contact Us</h2>
          <p>
            <strong>Email:</strong> ematixsolutions@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 6369268376
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampusAmbassador;
