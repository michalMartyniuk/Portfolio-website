import React, { Component } from 'react';
import styles from './test.css';
import { CSSTransition } from 'react-transition-group';
import Aux from '../../hoc/aux';

class Test extends Component {

  state = {
    classState: true
  }

  change = () => {
    this.setState({
      classState: !this.state.classState
    })
  }

  render() {
    return (
      <Aux>
        <button onClick={this.change} style={{'font-size': '3rem'}}>
          Change state
        </button>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={this.state.classState}
          timeout={2000}
          classNames={{
            enterActive: styles.enter,
            exitActive: styles.exit
          }}
        >
          <div className={styles.test}>
          </div>
        </CSSTransition>
      </Aux>
    )
  }
}

export default Test;