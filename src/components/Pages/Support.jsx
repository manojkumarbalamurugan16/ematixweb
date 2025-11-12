import React from 'react';
import styles from '../Pages/Support.module.css'; // Import a CSS module for styling
import supportImage from '../Pages/Images/SUPPORT.png'; // Replace with the correct path to your image

const Support = () => {
  return (
    <div className={styles.support}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>Support Services</h1>
        <p>
          At Ematix, we provide comprehensive support services to ensure smooth operation and
          maintenance of your embedded systems and software solutions. Our team is here to assist you
          every step of the way.
        </p>
      </header>

      {/* Support Content Section */}
      <section className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={supportImage} alt="Support" className={styles.supportImage} />
        </div>
        <div className={styles.textContainer}>
          <h2>Why Choose Our Support Services?</h2>
          <ul>
            <li>24/7 Customer Assistance</li>
            <li>Expert Troubleshooting and Problem Resolution</li>
            <li>Regular Software and System Updates</li>
            <li>Flexible Support Plans to Suit Your Needs</li>
            <li>On-Site and Remote Support Options</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2>Get in Touch</h2>
        <p>
          Need support? Contact our team for reliable solutions and prompt assistance. 
          We’re always ready to help you succeed.
        </p>
        <a href="https://wa.me/6369268376" target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
          Contact Us on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Support;
