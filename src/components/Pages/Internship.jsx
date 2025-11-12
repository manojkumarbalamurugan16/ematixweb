import React from 'react';
import styles from './Internship.module.css'; // Import the corresponding CSS file

const Internship = () => {
  const googleFormLink = 'https://forms.gle/UQ5a2s8aZRTafTgD9';
  return (
    <div className={styles.internshipContainer}>
         {/* <h1>INTERNSHIP DETAILS</h1> */}
      <div className={styles.internshipBox}>
        <h2>Welcome to the Internship Program</h2>
        <p>
          Gain hands-on experience and enhance your skills with our industry-focused internship
          programs.
        </p>
        <div className={styles.programDetails}>
          <h3>Who can Apply for our Internship</h3>
          <ul>
            <li>Recent graduates eager to gain hands-on experience and build their career are encouraged to apply.</li>
            <li>Applicants must demonstrate a strong academic foundation and interest in the internship domain.</li>
            <li>Individuals with a Passion for Learning.</li>
            <li>The internship requires full-time or part-time availability for the specified duration.</li>
          </ul>
        </div>

        <div className={styles.programDetails}>
          <h3>Why Choose Our Internship Program?</h3>
          <ul>
            <li>Real-world projects guided by industry professionals.</li>
            <li>Workshops and training sessions for skill development.</li>
            <li>Certificate of completion to showcase your expertise.</li>
            <li>Opportunities for full-time positions based on performance.</li>
          </ul>
        </div>

        <div className={styles.callToAction}>
          <h3>Apply Now!</h3>
          <p>Take the first step towards a successful career.</p>
          <button className={styles.applyButton} 
                onClick={() => window.open(googleFormLink, '_blank')}>
            Apply for Internship
          </button>
        </div>
      </div>
    </div>
  );
};

export default Internship;
