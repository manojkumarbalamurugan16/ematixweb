import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import courses from './CourseData'; // Import the course data
import styles from './CourseDetails.module.css';

const CourseDetails = () => {
  const googleFormLink = 'https://forms.gle/your-google-form-link';
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id)); // Find the course by ID

  const [activeSection, setActiveSection] = useState(null);

  // Toggle function to open/close the dropdown
  const toggleSection = (index) => {
    setActiveSection((prevIndex) => (prevIndex === index ? null : index));
  };

  if (!course) {
    return <div className={styles.error}>Course not found!</div>;
  }

  return (
    <div className={styles.details}>
      <div className={styles.title}>
        <h1>{course.title}</h1>
      </div>
      <div className={styles.contentWrapper}>
        {/* Left Side: Curriculum */}
        <div className={styles.curriculum}>
          <h2>Curriculum</h2>
          {course.curriculum && course.curriculum.length > 0 ? (
            course.curriculum.map((module, index) => (
              <div key={index} className={styles.module}>
                <div
                  className={styles.moduleHeader}
                  onClick={() => toggleSection(index)}
                >
                  <h3>{module.title}</h3>
                  <span>{activeSection === index ? '-' : '+'}</span>
                </div>
                {/* Show topics if the module is active */}
                {activeSection === index && (
                  <ul className={styles.moduleContent}>
                    {module.topics && module.topics.length > 0 ? (
                      module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>{topic}</li>
                      ))
                    ) : (
                      <li>No topics available</li>
                    )}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <p>No curriculum details available.</p>
          )}
        </div>

        {/* Right Side: Course Details */}
        <div className={styles.detailsCard}>
          <img
            src={course.image || 'https://via.placeholder.com/300'}
            alt={course.title}
            className={styles.courseImage}
          />
          <div className={styles.detailsContent}>
            <p>
              <strong>Date of Registration (DOR):</strong> {course.DOR}
            </p>
            <p>
              <strong>Fees:</strong> {course.fees}
            </p>
            <button
              className={styles.applyButton}
              onClick={() => window.open(googleFormLink, '_blank')}
            >
              Register Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
