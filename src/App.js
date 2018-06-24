import React, { Component } from 'react';
import styles from './App.css';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import Card from './components/UI/Card/Card';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Modal from './components/UI/Modal/Modal';
import Particles from './components/UI/particles/particles';

class App extends Component {
  
  state = {
    modalState: false,
    initialAnimation: true,
    header: { state: true, animation: false },
    profile: { state: false, animation: false },
    projects: { state: false, animation: false },
    contact: { state: false, animation: false }
  }

  componentDidMount() {}

  componentDidUpdate() {
    if(this.state.initialAnimation === true) {
      this.setState({
        initialAnimation: false
      })
    }
  }

  linkHandler = (e, page) => {
    e.preventDefault();
    this.setPage(page);
  }

  setPage = (page) => {
    Object.keys(this.state).map( element => {
      if(page === element) {
        this.setState({
          [element]: { ...this.state[element], state: true }
        }, () => console.log(this.state.profile.state))
      }
      else {
        this.setState({
          [element]: { ...this.state[element], state: false }
        })
      }
    })
  }

  modalSet = (content) => {
    this.setState({
      modalState: true,
      modalContent: content
    })
  }

  modalSetState = (state) => {
    this.setState({
      modalState: state,
    })
  }

  render() {
    return (
      <div className={styles.App}>
        <Particles />
        <Backdrop show={this.state.modalState === true} click={() => this.modalSetState(false)} />
        <Modal show={this.state.modalState === true}>
          {this.state.modalContent}
        </Modal>
        {/* {this.state.initialAnimation === true ? <div className={styles.initialAnimation}></div> : null } */}
        <Header setPage={this.setPage} state={this.state.header.state} linkHandler={this.linkHandler} animation={this.state.header.animation}/>
        <Profile 
          modalState={this.state.modalState} 
          modalSet={this.modalSet} 
          setPage={this.setPage} 
          state={this.state.profile.state} 
          animation={this.state.profile.animation}
        />
        <Projects setPage={this.setPage} state={this.state.projects.state} animation={this.state.projects.animation}/>
      </div>
    );
  }
}

export default App;
