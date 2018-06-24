import React from 'react';
import styles from './Modal.css';
import Aux from '../../../hoc/aux';
import Card from '../Card/Card';

const Modal = props => {

  let modal = props.show ? (
    <div className={styles.Modal}>    
      <Card title={props.title} styleCard={{"width": "100%"}}>
        {props.children}
      </Card>
    </div>
  ) : null;


  return (
    <Aux>
      {modal}
    </Aux>
  )
}

export default Modal