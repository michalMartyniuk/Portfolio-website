import React from 'react';
import styles from './Card.css';

const Card = props => {

  let title = props.title ? <h2 className={styles[props.titleclass]}>{props.title}</h2> : null

  return (
    <div className={styles[props.cardclass]}>
      {title}
      {props.children}
    </div>
  )
}

export default Card;