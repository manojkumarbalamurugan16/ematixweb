import React from 'react';
import styles from './Campus.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import campusbackimage from "../Pages/Images/campus img.jpg"

const Campus = () => {
  const navigate = useNavigate();

 

  return (
    <div className={styles.wrapper}>
      
        <div className={styles.container}>
        
      <h1 className={styles.heading}>Campus Ambassador Program</h1>
      <section className={styles.section}>
        <h2>About the Program</h2>
        <p>
         <ul>
            <li>Brand Promotion</li>
            <li>Event organisation</li>
            <li>Networking</li>
            <li>Collaboration</li>
         </ul>
        </p>
      </section>
      <section className={styles.section}>
        <h2>Skills Required</h2>
        <ul>
          <li>Strong communication skills</li>
          <li>Leadership qualities</li>
          <li>Marketing Skills</li>
          
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Who Can Apply</h2>
        <ul>
            <li>Can start the Part time job/Internship between December 20,2024 to January 29,2024</li>
            <li>Are available  for duration of 3 Months</li>
            <li>Who have an Interest</li>
        </ul>
        
        

      </section>
      <section className={styles.section}>
        <h2>Rewards and Incentives</h2>
        <ul>
          <li>Opportunity to build your network</li>
          <li>Performance-based payout on a certain target</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Perks</h2>
        <ul>
          <li>Certifications</li>
          <li>Letter of recommendation</li>
          <li>Felxible work hours</li>
        </ul>
      </section>
      
       <Link to="/CampusAmbassadorform"  className={styles.apply}>Apply now</Link> 
      
    </div>
    </div>
  );
};

export default Campus;
