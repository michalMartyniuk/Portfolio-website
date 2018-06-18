import React, { Component } from 'react';
import styles from './header.css';
import Carousel from '../UI/carousel/carousel';

class Header extends Component {

  render() {
    const headerClasses = [
      styles.header,
      this.props.animation ? styles.headerAnim : null
    ]
    return (
      <div className={headerClasses.join(' ')} id="header">
        <div className={styles.animDiv}></div>    
        <div className={styles.linkWrapper}>
          <a className={styles.link} href="#" onClick={(e) => this.props.linkHandler(e,'info')}>Info</a>
          <a className={styles.link} href="#" onClick={(e) => this.props.linkHandler(e,'projects')}>Projects</a>
          <a className={styles.link} href="#" onClick={(e) => this.props.linkHandler(e,'contact')}>Contact</a>
        </div>
      </div>
    )
  }
}

export default Header;