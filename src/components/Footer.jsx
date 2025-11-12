import React from "react";
import styles from "../components/Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy; {year} Ematix Embedded & Software Solutions Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
