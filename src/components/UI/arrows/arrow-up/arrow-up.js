import React from 'react';
import styles from './arrow-up.css';

const arrowUp = props => {
  return (
    <div className={styles.wrapper}>
      <i 
        className={["far fa-arrow-alt-circle-up", styles.arrow].join(' ')}
        onClick={props.setPage}
      ></i>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default arrowUp;