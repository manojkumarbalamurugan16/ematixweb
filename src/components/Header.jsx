import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Import the CSS file
import logo from '../assets/image/New _logo.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.nav}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img src={logo} alt="EmatixSolutions" />
      </div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {/* Simple Hamburger Icon (3 lines) */}
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Navigation Links */}
      <div className={`${styles.text} ${menuOpen ? styles.menuOpen : ''}`}>
        <Link to="/">Home</Link> {/* Link to Home */}
        <div className={styles.train_dropdown}>
          <a href="/Training">Training</a>
          <div className={styles.dropdownContent}>
            <div className={styles.subDropdown}>
              <a href="/Courseslist">Courses</a>
              <div className={styles.subDropdownContent}>
                <Link to="/courses/embedded">Embedded Systems</Link> {/* New Page for Embedded */}
                <Link to="/courses/automation">Internet of Things</Link>
                <Link to="/courses/automation">PCB Design</Link>
                <Link to="/courses/automation">Web Development</Link>
              </div>
            </div>
            <Link to="/Internship">Internship</Link>
            <Link to="/Inplanttraining">Inplant Training</Link>
            <Link to="/Virtualtraining">Virtual Training</Link>
            <Link to="/CampusAmbassador">Campus Ambassador</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <a href="/Solution">Solutions</a>
          <div className={styles.dropdownContent}>
            <Link to="/solutions/home-automation">Home Automation</Link>
            <Link to="/solutions/industrial-IOT">Industrial IOT</Link>
            <Link to="/solutions/micro-credentials">Micro-Credentials</Link>
            <Link to="/solutions/digital-assessment">Digital Assessment</Link>
            <Link to="/solutions/learning-content">Learning Content</Link>
            <Link to="/solutions/document-management">Digital Health Records</Link>
          </div>
        </div>
        <a href="/Mentorship">Mentorship</a>
        <a href="/franchise">Franchise</a>
        <a href="/Careers">Careers</a>
        <a href="/Contactus">Contact Us</a>
      </div>
    </div>
  );
};

export default Header;
