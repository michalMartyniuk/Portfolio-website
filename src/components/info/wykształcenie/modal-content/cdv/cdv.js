import React from 'react';
import styles from './cdv.css';

const cdv = props => {
  return (
    <div className={styles.cdv}>
      <div className={styles.heading}>
        <i className={["fas fa-university", styles.icon].join(' ')}></i>
        <h2 className={styles.title}>2015 - nadal</h2>      
      </div>                
      <span className={styles.text}>Collegium Da Vinci z siedzibą w Poznaniu</span>                
    </div>
  )
}

export default cdv;