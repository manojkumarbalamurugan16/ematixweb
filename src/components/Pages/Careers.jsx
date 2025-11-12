import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Pages/Careers.module.css";

const Careers = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  // Careers data array
  const careerData = [
    {
      id: 1,
      title: "Non-Voice Process Executive",
      location: "Salem, India",
      description: "We are looking for someone strong in English, both written and spoken.",
      jobId: "non-voice-process",
    },
    {
      id: 2,
      title: "Web Developer Intern",
      location: "Salem, India",
      description: "Looking for a Node.js developer with basic knowledge of REST APIs.",
      jobId: "web-developer-intern",
    },
    {
      id: 3,
      title: "UI/UX Developer",
      location: "Remote",
      description: "Creative designer with experience in Figma and Adobe XD.",
      jobId: "uiux-developer",
    },
    {
      id: 4,
      title: "PCB Designer Intern",
      location: "Salem, India",
      description: "Basic knowledge of PCB design required.",
      jobId: "pcb-designer",
    },
  ];

  // Function to handle Apply Now button click
  const handleApplyNow = (jobId) => {
    navigate(`/application-form?jobId=${jobId}`); // Pass jobId as a query parameter
  };

  return (
    <div className={styles.careersContainer}>
      {/* Section Header */}
      <h1 className={styles.title}>
        Join Our <span className={styles.highlight}>Team</span>
      </h1>
      <p className={styles.subtitle}>
        Explore exciting opportunities to grow your career with us!
      </p>

      {/* Cards Section */}
      <div className={styles.cardContainer}>
        {careerData.map((career) => (
          <div key={career.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{career.title}</h2>
            <p className={styles.cardLocation}>{career.location}</p>
            <p className={styles.cardDescription}>{career.description}</p>
            <button
              className={styles.applyButton}
              onClick={() => handleApplyNow(career.jobId)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
