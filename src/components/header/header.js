import React, { Component } from 'react';
import styles from './header.css';
import Carousel from '../UI/carousel/carousel';
import ArrowDown from '../UI/arrows/arrow-down/arrow-down';
import { CSSTransition } from 'react-transition-group';
import Particles from '../UI/particles/particles';

class Header extends Component {

  state = {
    keyboard: false
  }

  componentDidMount() {
    this.keyboardEventHandler();
  }

  componentDidUpdate() {
    this.keyboardEventHandler();
  }

  keyboardEventHandler = () => {
    if(this.props.state === true && this.state.keyboard === false) {
      this.setState({
        keyboard: true
      }, () => {
        document.addEventListener('keydown', this.keyDownHandler)
      })
    }
    if(this.props.state === false && this.state.keyboard === true) {
      this.setState({
        keyboard: false
      }, () => {
        document.removeEventListener('keydown', this.keyDownHandler)
      })
    }
  }
  
  keyDownHandler = (e) => {
    console.log(e.key);
    switch(e.key) {
      case 'ArrowLeft':
        break;
      case 'ArrowRight':
        break;
      case 'ArrowUp':
        break;
      case 'ArrowDown':
        this.props.setPage('profile');
        break;
      default: break;
    }
  }

  render() {
    const profileClasses = [
      styles.link,
      styles.profile
    ]

    const projectsClasses = [
      styles.link,
      styles.projects
    ]

    const timeouts = {
      enter: 2050,
      exit: 2000
    }

    return (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={this.props.state}
        timeout={timeouts}
        classNames={{
          enterActive: styles.headerStateTrueAnim,
        }}
      >
        <div className={styles.header} id="header">
          <Particles />
          <ArrowDown setPage={() => this.props.setPage('profile')} text="Next" />
          <div className={styles.linkWrapper}>
            <img className={styles.image} src='/images/MM-big.jpg' alt=""/>
            <a className={profileClasses.join(' ')} href="#" onClick={(e) => this.props.linkHandler(e,'profile')}>
              <span className={styles.profileP}>P</span>
              <span className={styles.profileR}>r</span>
              <span className={styles.profileO}>o</span>
              <span className={styles.profileF}>f</span>
              <span className={styles.profileI}>i</span>
              <span className={styles.profileL}>l</span>
              <span className={styles.profileE}>e</span>
            </a>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default Header;