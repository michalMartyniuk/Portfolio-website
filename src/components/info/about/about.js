import React from 'react';
import styles from './about.css';
import Card from '../../UI/Card/Card';

const otherTech = props => {
  return (
    <div className={styles.about}>
      <Card title="About" titleclass="profileTitle" cardclass="profile">
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsa fugiat soluta repellendus natus ex aperiam suscipit. Officiis, quaerat esse.</p>
      </Card>
    </div>
  )
}

export default otherTech;