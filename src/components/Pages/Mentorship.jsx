import React from "react";
import CountUp from "react-countup";
import styles from "../Pages/Mentorship.module.css";
import mentorimg from"../Pages/Images/Mentor image.png";

const Mentorship = () => {
  return (
    <div className={styles.mentorshipContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>
          1-on-1 <span className={styles.highlight}>Mentorship</span>
        </h1>
        <p className={styles.subtext}>
          Elevate your career with personalized mentorship from top-tier experts
          across diverse domains. Book a session today and embark on a journey
          to elevate your career!
        </p>
        <div className={styles.buttonGroup}>
          <button className={`${styles.button} ${styles.findMentor}`}>
            Find a Mentor
          </button>
          <button className={`${styles.button} ${styles.becomeMentor}`}>
            Become a Mentor
          </button>
          <button className={`${styles.button} ${styles.mentorLogin}`}>
            Mentor Login
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className={styles.imageSection}>
        <div className={styles.mainImageWrapper}>
          <img
            src={mentorimg}
            alt="Mentor"
            className={styles.mainImage}
          />
          <span className={styles.badge}><CountUp start={0} end={15} duration={3} suffix="+"/>Mentors</span>
        </div>
      </div>

      {/* Footer Section */}
      <div className={styles.footer}>
        <h2>WORLD-CLASS MENTORS</h2>
        <h3>Mentorship by Industry Experts</h3>
        <p className={styles.footerText}>
          Empower your professional growth by booking a session with our
          unmatched team of mentors.
        </p>
      </div>
    </div>
  );
};

export default Mentorship;
