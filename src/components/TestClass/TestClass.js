import React, { Component } from 'react';
import styles from './TestClass.css';

class TestClass extends Component {

  constructor(props) {
    super(props);  
  }

  state = {
    keyboard: false
  }

  componentDidUpdate() {
    console.log('TestClass did update');
    if(this.props.state === true && this.state.keyboard === false) {
      this.setState({
        keyboard: true
      }, () => {
        document.addEventListener('keydown', this.eventHandler)
        console.log(this.state.keyboard)
      })
    }
  }

  // addListener = () => {
  //   document.addEventListener('keydown', this.eventHandler);
  // }

  eventHandler = (e) => {
    console.log(e.key);
  }


  removeListener = () => {
    document.removeEventListener('keydown', this.eventHandler);
  }

  render () {
    return (
      <div className={styles.TestClass}>
        <div className={styles.testOne}></div>
        <div className={styles.testTwo}></div>
        {/* <button 
          className={styles.addListener}
          onClick={this.addListener}  
        >Add listener</button> */}
        <button 
          className={styles.removeListener}
          onClick={this.removeListener}  
        >Remove listener</button>        
      </div>
    )
  }
}

export default TestClass;