import React, { Component } from 'react';
import styles from './info.css';
import Card from '../UI/Card/Card';

class Info extends Component {

  state = {
    keyboard: false,
    one: {
      animation: null,
      position: {
        left: true,
        center: false,
        right: false
      }
    },
    two: { 
      animation: null,
      position: {
        left: false,
        center: true,
        right: false
      }
    },
    three: { 
      animation: null,
      position: {
        left: false,
        center: false,
        right: true
      }
    },
  }

  componentDidUpdate() {
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
        this.rotateLeft();
        break;
      case 'ArrowRight':
        this.rotateRight();
        break;
      case 'ArrowUp':
        this.props.setPage('header');
        break;
      default: break;
    }
  }

  rotateLeft = () => {
    Object.entries(this.state).map( element => {
      if(this.state[element[0]].position) {
        Object.entries(this.state[element[0]].position).map( position => {
          if(position[1] === true) {
            switch(position[0]) {
              case 'left':
                this.setState({
                  [element[0]]: {
                    animation: 'leftToRight',
                    position: {
                      left: false,
                      center: false,
                      right: true
                    }
                  }
                })
                break;
              case 'center':
                this.setState({
                  [element[0]]: {
                    animation: 'centerToLeft',
                    position: {
                      left: true,
                      center: false,
                      right: false
                    }
                  }
                })
                break;
              case 'right':
                this.setState({
                  [element[0]]: {
                    animation: 'rightToCenter',
                    position: {
                      left: false,
                      center: true,
                      right: false
                    }
                  }
                })
              default: break;
            }
          }
        })
      }
    })
  }

  rotateRight = () => {
    Object.entries(this.state).map( element => {
      if(this.state[element[0]].position) {
        Object.entries(this.state[element[0]].position).map( position => {
          if(position[1] === true) {
            switch(position[0]) {
              case 'left':
                this.setState({
                  [element[0]]: {
                    animation: 'leftToCenter',
                    position: {
                      left: false,
                      center: true,
                      right: false
                    }
                  }
                })
                break;
              case 'center':
                this.setState({
                  [element[0]]: {
                    animation: 'centerToRight',
                    position: {
                      left: false,
                      center: false,
                      right: true
                    }
                  }
                })
                break;
              case 'right':
                this.setState({
                  [element[0]]: {
                    animation: 'rightToLeft',
                    position: {
                      left: true,
                      center: false,
                      right: false
                    }
                  }
                })
              default: break;
            }
          }
        })
      }
    })
  }

  animClickHandler = (element) => {
    Object.entries(this.state).map( item => {
      if(item[0] === element) {
        Object.entries(this.state[element].position).map( position => {
          if(position[1] === true) {
            switch(position[0]) {
              case 'left':
                this.rotateRight();
                break;
              case 'center':
                break;
              case 'right':
                this.rotateLeft();
                break;
              default: break;
            }
          }
        })
      }
    })
  }

  render() {
    return (
      <div className={[
        styles.info,
        this.props.state ? styles.infoStateAnim : null
        ].join(' ')
      } 
        id="info"
      >
        <h1>Info</h1>
        <i 
          className={["far fa-arrow-alt-circle-up", styles.arrowUp].join(' ')}
          onClick={() => this.props.setPage('header')}
        ></i>
        <i 
          className={["fas fa-angle-double-right", styles.arrowRight].join(' ')}
          onClick={this.rotateRight}
        >
        </i>
        <i 
          className={["fas fa-angle-double-left", styles.arrowLeft].join(' ')}
          onClick={this.rotateLeft}
        ></i>
        <div className={[
          styles.item,
          styles.one,
          this.props.animation ? styles.oneAnim : null,
          this.state.one.animation ? styles[this.state.one.animation] : null,
          this.state.one.position.center ? styles.center : null
        ].join(' ')}
          onClick={() => this.animClickHandler('one')}
        >
          <Card title="One" titleclass="infoTitle" cardclass="info">
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, quasi. Quia aperiam nihil tempore laboriosam. Atque ut dolorem repudiandae rem tempora fuga minus placeat ipsa qui facilis cumque distinctio deserunt reiciendis fugiat exercitationem optio, assumenda quidem, nulla cum odio. Possimus!</p>
          </Card>
        </div>
        <div className={[
          styles.item,
          styles.two,
          this.props.animation ? styles.twoAnim : null,
          this.state.two.animation ? styles[this.state.two.animation] : null,
          this.state.two.position.center ? styles.center : null
        ].join(' ')}
          onClick={() => this.animClickHandler('two')}
        >
          <Card title="Two" titleclass="infoTitle" cardclass="info">
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, quasi. Quia aperiam nihil tempore laboriosam. Atque ut dolorem repudiandae rem tempora fuga minus placeat ipsa qui facilis cumque distinctio deserunt reiciendis fugiat exercitationem optio, assumenda quidem, nulla cum odio. Possimus!</p>
          </Card>
        </div>
        <div className={[
          styles.item,
          styles.three,
          this.props.animation ? styles.threeAnim : null,
          this.state.three.animation ? styles[this.state.three.animation] : null,
          this.state.three.position.center ? styles.center : null
        ].join(' ')}
          onClick={() => this.animClickHandler('three')}
        >
          <Card title="Three" titleclass="infoTitle" cardclass="info">
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, quasi. Quia aperiam nihil tempore laboriosam. Atque ut dolorem repudiandae rem tempora fuga minus placeat ipsa qui facilis cumque distinctio deserunt reiciendis fugiat exercitationem optio, assumenda quidem, nulla cum odio. Possimus!</p>
          </Card>
        </div>
      </div>
    )
  } 
}
  
export default Info;