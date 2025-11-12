import React from 'react';
import styles from '../Pages/Solution.module.css';
import homeautoimg from "../Pages/Images/Homeautomation.png";
import industrialIoT from'../Pages/Images/Industrial IoT.png';
import digitalassesment from "../Pages/Images/Digital Assessment.png";
import learningcontent from "../Pages/Images/Learning Content.png";
import Digtialrecord from "../Pages/Images/Digital Health records.png"
const Solution = () => {
  // Solutions data array
  const solutionsData = [
    { id: 1, title: "Home Automation", description: "Enhance your home with smart, automated solutions for comfort and convenience.",image: homeautoimg },
    { id: 2, title: "Industrial IoT", description: "Leverage IoT to optimize industrial processes and improve efficiency.",image:industrialIoT },
    { id: 3, title: "Digital Assessment", description: "Transform assessments with modern, digital solutions for accurate results.", image: digitalassesment },
    { id: 4, title: "Learning Content", description: "Access high-quality learning materials tailored to your needs.",image: learningcontent },
    { id: 5, title: "Digital Health Records", description: "Manage and secure health data efficiently through digital platforms.",image:Digtialrecord },
  ];

  return (
    <div className={styles.solutionsContainer}>
      {/* Header */}
      <h1 className={styles.title}>Our <span className={styles.highlight}>Solutions</span></h1>
      <p className={styles.subtext}>
        Discover a variety of innovative solutions tailored to meet your needs across industries.
      </p>
      
      {/* Cards Section */}
      <div className={styles.cardContainer}>
        {solutionsData.map((solution) => (
          <div key={solution.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{solution.title}</h2>
            <p className={styles.cardDescription}>{solution.description}</p>
            <img className={styles.cardimage} src={solution.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;