import React from 'react';
import styles from './front-end.css';
import Card from '../../UI/Card/Card';

const frontEnd = props => {
  return (
    <div className={styles.frontEnd}>
      <Card title="Front-end" titleclass="profileTitle" cardclass="profile">
        <div className={styles.list}>
          <div className={styles.listItem}>
            <i className={["fab fa-html5", styles.html].join(' ')}></i>
            <span className={styles.text}>HTML5</span>
          </div>
          <div className={styles.listItem}>
            <i className={["fab fa-css3-alt", styles.css].join(' ')}></i>
            <span className={styles.text}>CSS3</span>
          </div>
          <div className={styles.listItem}>
            <i className={["fab fa-react", styles.react].join(' ')}></i>
            <span className={styles.text}>React</span>
          </div>
          <div className={styles.listItem}>
            <i className={["fab fa-js", styles.js].join(' ')}></i>
            <span className={styles.text}>Javascript</span>
          </div>
          <div className={styles.listItem}>
            <i className={["fab fa-angular", styles.angular].join(' ')}></i>
            <span className={styles.text}>Angular 4+</span>
          </div>
          <div className={styles.listItem}>
            <i className={["fab fa-sass", styles.sass].join(' ')}></i>
            <span className={styles.text}>Sass</span>
          </div>
          <div className={styles.listItem}>
            <i className={["fab fa-node", styles.node].join(' ')}></i>
            <span className={styles.text}>Node.js</span>
          </div>
          <div className={styles.listItem}>
            <i className={["fab fa-npm", styles.npm].join(' ')}></i>
          </div>
          <div className={styles.listItem}>
            <span className={styles.text}>Express.js</span>            
          </div>
          <div className={styles.listItem}>
            <span className={styles.text}>MongoDB</span>            
          </div>
        </div>
      </Card>
    </div>
  )
}

export default frontEnd;