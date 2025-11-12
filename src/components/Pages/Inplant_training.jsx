import React from 'react';
import styles from './Inplant_training.module.css'; // Import the corresponding CSS file

const InplantTraining = () => {
  const googleFormLink = 'https://forms.gle/mBQviRsVtMkqHjdQ9';
  
  return (
    <div className={styles.inplantContainer}>
      <div className={styles.inplantBox}>
        <h2>Welcome to the Inplant Training Program</h2>
        <p>
          Bridge the gap between theoretical knowledge and practical experience with our inplant
          training programs.
        </p>
        <div className={styles.programDetails}>
          <h3>Why Choose Our Inplant Training?</h3>
          <ul>
            <li>Learn from experienced industry professionals.</li>
            <li>Hands-on experience with real-time projects.</li>
            <li>Insight into industry tools, technologies, and processes.</li>
            <li>Certification to enhance your professional profile.</li>
          </ul>
        </div>

        <div className={styles.callToAction}>
          <h3>Enroll Today!</h3>
          <p>Take the next step towards a successful career in your chosen field.</p>
          <button className={styles.enrollButton} 
           onClick={() => window.open(googleFormLink, '_blank')}>
            Enroll for Inplant Training
          </button>
        </div>
      </div>
    </div>
  );
};

export default InplantTraining;
