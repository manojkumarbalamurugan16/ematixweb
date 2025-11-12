import React from 'react';
import styles from "./VirtualTraining.module.css";


const VirtualTraining = () => {
  const googleFormLink = 'https://forms.gle/ZBWLLmCEtgGxBvMd6';
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Virtual Training Programs</h1>
        <p>
          Learn, grow, and achieve your goals from the comfort of your home with
          our interactive virtual training courses.
        </p>
      </header>

      <section className={styles.features}>
        <h2>Why Choose Our Virtual Training?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Live Sessions</h3>
            <p>Attend live interactive sessions with industry experts.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Flexible Schedule</h3>
            <p>Choose training slots that fit your busy lifestyle.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Expert Mentorship</h3>
            <p>Get guidance and feedback from experienced mentors.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Certification</h3>
            <p>Earn certificates to showcase your new skills.</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Begin?</h2>
        <p>Start your journey with us and take the first step toward success.</p>
        <button
          className={styles.enrollButton}
          onClick={() => window.open(googleFormLink, '_blank')}>
          Enroll Now
        </button>
      </section>
    </div>
  );
};

export default VirtualTraining;
