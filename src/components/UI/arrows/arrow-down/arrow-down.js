import React from 'react';
import styles from './arrow-down.css';

const arrowDown = props => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{props.text}</p>      
      <i 
        className={["far fa-arrow-alt-circle-down", styles.arrow].join(' ')}
        onClick={props.setPage}
      ></i>
    </div>
  )
}

export default arrowDown;