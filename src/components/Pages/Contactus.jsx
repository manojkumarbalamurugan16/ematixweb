import React, { useState } from 'react';
import axios from 'axios';
import styles from '../Pages/Contactus.module.css';

const Contactus = () => {
  const [responseMessage, setResponseMessage] = useState('');
  
  // States for capturing form inputs
  const [firstName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const[mobile,setMobile]= useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the form data
    const formData = {
      firstName,
      email,
      mobile,
      message
    };

    try {
      // Send data to the backend using axios
      const response = await axios.fetch('https://ematixsolutions.com/api/data', formData, {
      });
      
      // Check the response and update the message
      if (response.status === 200) {
        setResponseMessage('Your inquiry has been submitted successfully!');
      } else {
        setResponseMessage('Error occurred while submitting your inquiry.');
      }
    } catch (error) {
      console.error('Error details:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      setResponseMessage('Error occurred while submitting your inquiry.');
    }
  }
    

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Contact Ematix Solutions</h1>
        <p className={styles.description}>
          Get in touch with us for innovative embedded and software solutions <br />
          tailored to your business needs. We are here to help you succeed.
        </p>

        <div className={styles.contactInfo}>
          <p>
            <strong>Support:</strong> +91 8825913155
          </p>
          <p>
            <strong>Inquiry:</strong> ematixsolutions@gmail.com
          </p>
        </div>
      </div>
      
      <div>
        <form className={styles.form} onSubmit={handleSubmit} encType="multipart/form-data">
          <div className={styles.inputGroup}>
            <label htmlFor="firstName" className={styles.label}>Full Name *</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFullName(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email Address*</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="mobile" className={styles.label}>Mobile Number*</label>
                    <input
                      type="tel"
                      id="mobile"
                      placeholder="Enter your mobile number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className={styles.input}
                      required
                    />
                  </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Inquiry*</label>
            <textarea
              id="message"
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={styles.textarea}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Your Inquiry
          </button>
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>

      {/* WhatsApp Button */}
      <div className={styles.whatsappButton}>
        <a href="https://wa.me/+918825913155" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Contactus;
