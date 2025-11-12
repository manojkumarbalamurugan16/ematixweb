import React from 'react';

import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import trainingimg from '../Pages/Images/Training image.png';
import solutionimg from '../Pages/Images/SOLUTIONS.png'
import supportimg from '../Pages/Images/SUPPORT.png';
import internshalalogo from "../Pages/Images/internshala.jpg";
import aeeclogo from "../Pages/Images/AEEC.jpg";
import cdotlogo from "../Pages/Images/CODT.gif";
import nsdclogo from "../Pages/Images/NSDC.png";
import ai_image from '../Pages/Images/AI image.png';
import styles from './Home.module.css'; // Import CSS for styling
import heroImage from '../../assets/image/image_add_con.avif'; // Update the path based on your folder structure
import Solution from './Solution';

const Home = () => {
 
  return (
    <div className={styles.home}>
      <section className={styles.marquee}>
        <div className={styles.marqueeContent}>
        <span> <b>Upcoming Event:</b>  EMATIX Global Awards !!!**** International Conference and Journal Publications!!!</span>
        <span>Stay tuned for more updates!!!</span>      
          
          
        </div>
      </section>
      <header className={styles.hero}>
      
         <h1>EMATIX Embedded & Software Solutions</h1> 
        <p>EMATIX Solutions is dedicated to delivering cutting-edge embedded systems that address evolving global challenges, such as IoT and edge computing, while driving technological transformation across diverse industries, including automotive, healthcare, consumer electronics, defense, and industrial automation. Our products prioritize safety, efficiency, and precision, ensuring reliability and exceptional performance in mission-critical applications. Committed to sustainability, we focus on designing energy-efficient systems and reducing electronic waste. Through strong global partnerships, collaborations, and a relentless pursuit of innovation, we aim to establish global leadership. Our customer-centric approach ensures tailored solutions that meet unique needs, foster satisfaction, and build lasting relationships.</p>
        
        <Link className={styles.cta} to="/Solution">Explore Services</Link> 
      </header>

      <section id="services" className={styles.services}>
        <h2>Our Services</h2>
       
          <div className={styles.cards}>
          <Link to="/training" style={{ textDecoration: "none", color: "inherit" }}>
            <div className={styles.card}>
              <img className={styles.training}  src={trainingimg} alt="" />
          </div>
        </Link>
          <Link to="/solution" style={{ textDecoration: "none", color: "inherit" }}>
          <div className={styles.card}>
            <img  className={styles.solution} src={solutionimg} alt="" />
          </div>
          </Link>
          <Link to="/support" style={{ textDecoration: "none", color: "inherit" }}>
          <div className={styles.card}>
            <img className={styles.support} src={supportimg} alt="" />
          </div>
          </Link>
        </div>
      </section>
      <section id="partners" className={styles.partners}>
        <h2>TRUSTED BY</h2>
        <div className={styles.partnerLogos}>
          <img src={internshalalogo} alt="Partner 1" className={styles.partnerLogo} />
          <img src={aeeclogo} alt="Partner 2" className={styles.partnerLogo} />
          {/* <img src={cdotlogo} alt="Partner 3" className={styles.partnerLogo} /> */}
          <img src={nsdclogo} alt="Partner 4" className={styles.partnerLogo} />
        </div>
      </section>
      
      <section className={styles.additionalContent}>
        {/* Hero Section for the new content */}
        <div className={styles.heroSection}>
          <div className={styles.textContent}>
            <h1>Innovative Embedded Software Solutions</h1>
            <p>
              At Ematix, we specialize in providing cutting-edge embedded and
              software solutions tailored to meet the unique needs of our clients across various industries.
            </p>
            <div className={styles.stats}>
          <div className={styles.statItem}>
            <h2><CountUp start={0} end={15} duration={3} suffix="+" /></h2>
            <p>Proven Success</p>
          </div>
          <div className={styles.statItem}>
            <h2><CountUp start={0} end={10} duration={3} suffix="+" /></h2>
            <p>Trusted by Experts</p>
          </div>
        </div>
          </div>
          <div className={styles.imageContent}>
            <img src={heroImage}  alt="Innovative Software Solutions"
            />
          </div>
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
      </section>
      <section className={styles.aboutSection}>
  <div className={styles.aboutContainer}>
    {/* Left Section with Image */}
    <div className={styles.aboutImageContainer}>
      <img
        src={ai_image}// Replace with your image path
        alt="About Us Illustration"
        className={styles.aboutImage}
      />
    </div>

    {/* Right Section with Content */}
    <div className={styles.aboutContent}>
      <h2>About Us</h2>
      <h3>EMATIX Helps in Business Development</h3>
      <p>
        Whether it is retail or any other type of business, Ematix Solutions
        offers 360-degree optimized solutions for every competitive business. 
        We help your products and services reach every consumer through innovative and 
        tailored digital platforms.
      </p>
      <div className={styles.socialMediaIcons}>
      <Link to="/about" className={styles.aboutButton}>
        More About →
      </Link>
    <a href="https://www.facebook.com/people/Ematix-Embedded-Software-Solutions-Inc/61569986475342/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
        alt="Facebook"
        className={styles.socialIcon}
      />
    </a>
    
   
    <a href="https://www.instagram.com/ematix_solutions/" target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        alt="Instagram"
        className={styles.socialIcon}
      />
    </a>
    <a href="https://www.linkedin.com/company/ematix-embedded-and-software-solutions/" target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="LinkedIn"
        className={styles.socialIcon}
      />
    </a>
    
  </div>

      {/* Features Section */}
      

        
      </div>
    </div>
  </section>

    </div>
  );
};

export default Home;
