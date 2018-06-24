import React from 'react';
import styles from './wykształcenie.css';
import Card from '../../UI/Card/Card';
import Modal from '../../UI/Modal/Modal';
import Cdv from './modal-content/cdv/cdv';
import Wsjo from './modal-content/wsjo/wsjo';
import Languages from './modal-content/languages/languages';

const wykształcenie = props => {

  const modalHandler = (type) => {
    switch(type) {
      case 'cdv':
        props.modalSet(
          <Cdv />  
        );
        break;
      case 'wsjo':
        props.modalSet(
          <Wsjo />
        );
        break;
      case 'lang':
        props.modalSet(
          <Languages />
        );
        break;

      default: break;
    }
  }

  return (
    <div className={styles.wykształcenie}>
      <Card title="Wykształcenie" titleclass="profileTitle" cardclass="profile">
        <div className={[styles.item].join(' ')} onClick={() => modalHandler('cdv')}>
          <i className={["fas fa-university", styles.iconUniversity].join(' ')}></i>
          <span className={styles.description}>Informatyka</span>
        </div>
        <div className={[styles.item].join(' ')} onClick={() => modalHandler('wsjo')}>
          <i className={["fas fa-university", styles.iconUniversity].join(' ')}></i>
          <span className={styles.description}>Japonistyka</span>
        </div>
        <div className={[styles.item].join(' ')} onClick={() => modalHandler('lang')}>
          <i className={["fas fa-language", styles.iconLanguage].join(' ')}></i>
          <span className={styles.description}>Języki obce</span>
        </div>
      </Card>
    </div>
  )
}

export default wykształcenie;