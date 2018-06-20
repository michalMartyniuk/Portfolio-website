import React, { Component } from 'react';
import styles from './header.css';
import Carousel from '../UI/carousel/carousel';

class Header extends Component {

  render() {
    const headerClasses = [
      styles.header,
      this.props.animation ? styles.headerAnim : null
    ]

    const profileClasses = [
      styles.link,
      styles.profile
    ]

    const projectsClasses = [
      styles.link,
      styles.projects
    ]

    return (
      <div className={headerClasses.join(' ')} id="header">
        {/* <div className={styles.animDiv}></div>     */}
        <div className={styles.linkWrapper}>
          <a className={profileClasses.join(' ')} href="#" onClick={(e) => this.props.linkHandler(e,'info')}>
            <span className={styles.profileP}>P</span>
            <span className={styles.profileR}>r</span>
            <span className={styles.profileO}>o</span>
            <span className={styles.profileF}>f</span>
            <span className={styles.profileI}>i</span>
            <span className={styles.profileL}>l</span>
            <span className={styles.profileE}>e</span>
          </a>
          <a className={projectsClasses.join(' ')} href="#" onClick={(e) => this.props.linkHandler(e,'projects')}>Projekty</a>
          {/* <a className={styles.link} href="#" onClick={(e) => this.props.linkHandler(e,'contact')}>Contact</a> */}
        </div>
      </div>
    )
  }
}

export default Header;