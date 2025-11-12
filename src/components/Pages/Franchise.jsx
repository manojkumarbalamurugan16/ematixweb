import React from "react";
import styles from "../Pages/Franchise.module.css";

const Franchise = () => {
  return (
    <div className={styles.franchiseContainer}>
      {/* Franchise Header Section */}
      <h1 className={styles.title}>
        Become a <span className={styles.highlight}>Franchise Partner</span>
      </h1>
      <p className={styles.subtitle}>
        Partner with us and grow your business with our trusted brand.
      </p>

      {/* Franchise Benefits */}
      <div className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>Why Partner With Us?</h2>
        <div className={styles.benefitCards}>
          <div className={styles.card}>
            <h3>Trusted Brand</h3>
            <p>Leverage our reputation to build your business quickly.</p>
          </div>
          <div className={styles.card}>
            <h3>Comprehensive Support</h3>
            <p>Receive training, marketing, and operational support.</p>
          </div>
          <div className={styles.card}>
            <h3>Proven Model</h3>
            <p>Access a tested and successful business model.</p>
          </div>
        </div>
      </div>

      {/* Steps to Become a Franchise */}
      <div className={styles.stepsSection}>
        <h2 className={styles.sectionTitle}>How to Get Started</h2>
        <ul className={styles.stepsList}>
          <li>1. Fill out the franchise application form.</li>
          <li>2. Discuss opportunities with our team.</li>
          <li>3. Finalize agreements and get trained.</li>
          <li>4. Launch your franchise location successfully!</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h2>Ready to Join Us?</h2>
        <p>Contact us today to explore franchise opportunities.</p>
        <a href="/contact" className={styles.ctaButton}>
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Franchise;
