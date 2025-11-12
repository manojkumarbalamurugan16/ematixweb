import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Pages/Courseslist.module.css';
import courses from './CourseData'; // Import the course data

const Courselist = () => { 
  return (
    <div className={styles.list}>
      <h1>COURSE DETAILS</h1>

      {courses.map((course) => (
        <div key={course.id} className={styles.courseCard}>
          <div className={styles.courseContent}>
            <h2>{course.title}</h2>
            <p><strong>Content:</strong> {course.content}</p>
            <p><strong>Date of Registration (DOR):</strong> {course.DOR}</p>
            <p><strong>Fees:</strong> {course.fees}</p>
            <Link to={`/Course/${course.id}`} state={course} className={styles.readMore}>Read More</Link>
            <Link to={`/Course/${course.id}`} className={styles.readMore}>Buy</Link>
          </div>
          <div className={styles.courseImage}>
            <img src={course.image} alt={course.title} />
          </div>
        </div>
      ))}
    </div>  
  );
};

export default Courselist;
