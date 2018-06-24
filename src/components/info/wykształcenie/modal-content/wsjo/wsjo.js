import React from 'react';
import styles from './wsjo.css';

const wsjo = props => {
  return (
    <div className={styles.wsjo}>
      <div className={styles.heading}>
        <i className={["fas fa-university", styles.icon].join(' ')}></i>
        <h2 className={styles.title}>2009 - 2015</h2>      
      </div>                
      <span className={styles.text}>Wyższa Szkoła Języków Obcych im. Samuela Bogumiła Lindego z siedzibą w Poznaniu</span>
      <span className={styles.eduLevel}>Poziom wykształcenia: licencjat</span>
    </div>
  )
}

export default wsjo;