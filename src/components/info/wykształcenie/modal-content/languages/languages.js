import React from 'react';
import styles from './languages.css';

const languages = props => {
  return (
    <div className={styles.languages}>
      <div className={styles.heading}>
        <i className={["fas fa-language", styles.icon].join(' ')}></i>
        <h2 className={styles.title}>Języki obce</h2>      
      </div>                
      <div className={styles.item} >
        <p className={styles.text}><strong>Angielski</strong>: średnio-zaawansowany</p>
        <p className={styles.text}><strong>Japoński</strong>: średni</p>
      </div>      
    </div>
  )
}

export default languages;