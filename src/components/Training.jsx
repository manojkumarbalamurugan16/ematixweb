import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from '../components/Training.module.css';
import coursesimg from '../assets/image/Coursesimg.png'; 
import internship from '../assets/image/Internship.png';
import inplantimg from '../assets/image/Inplant training.png';
import virtualimg from '../assets/image/virtual training.png';

const Training = () => {
  return (
    <div className={styles.train}>
      <header className={styles.train1}>
        <h1>Welcome to Ematix Solutions</h1>
        <p>Your one-stop solution for technology and training.</p>
      </header>
      
      <div className={styles.cardsContainer}>
        {/* Courses Card */}
        <Link to="/courseslist" className={styles.cardLink}>
          <div className={styles.card}>
          <h2>COURSES</h2>
            <img 
              src={coursesimg}
              alt="Courses" 
              className={styles.cardImage}
            />
            
            <p>Explore a wide range of technical courses designed to enhance your skills.</p>
          </div>
        </Link>

        {/* Internship Card */}
        <Link to="/Internship" className={styles.cardLink}>
          <div className={styles.card}>
          <h2>INTERNSHIP</h2>
            <img 
              src={internship}
              alt="Internship" 
              className={styles.cardImage}
            />
            
            <p>Gain hands-on experience with our internship programs designed for freshers.</p>
          </div>
        </Link>

        {/* Inplant Training Card */}
        <Link to="/Inplanttraining" className={styles.cardLink}>
          <div className={styles.card}>
          <h2>INPLANT TRAINING</h2>
            <img 
              src={inplantimg}
              alt="Inplant Training" 
              className={styles.cardImage}
            />
            
            <p>Learn industry-specific knowledge through our inplant training programs.</p>
          </div>
        </Link>

        {/* Virtual Training Card */}
        <Link to="/virtualtraining" className={styles.cardLink}>
          <div className={styles.card}>
          <h2>VIRTUAL TRAINING</h2>
            <img 
              src={virtualimg} 
              alt="Virtual Training" 
              className={styles.cardImage}
            />
            
            <p>Join our online training sessions from anywhere at your convenience.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Training;
