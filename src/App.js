import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Info from './components/info/info';
import Card from './components/UI/Card/Card';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

class App extends Component {
  
  state = {
    header: { state: true, animation: false },
    info: { state: false, animation: false },
    projects: { state: false, animation: false },
    contact: { state: false, animation: false }
  }

  componentDidMount() {
    const elements = {
      header: document.querySelector('#header'),
      info: document.querySelector('#info'),
      projects: document.querySelector('#projects'),
      contact: document.querySelector('#contact')
    }
    
    window.onscroll = () => {
      for(let element of Object.keys(elements)) {
        if(
          window.pageYOffset >= elements[element].offsetTop - window.innerHeight + 100 &&
          window.pageYOffset <= elements[element].offsetTop + elements[element].offsetHeight &&
          this.state[element].animation === false
        ) {
          this.setState({
            [element]: { ...this.state[element], animation: true }  
          });
        }
        else if (
          window.pageYOffset <= elements[element].offsetTop - window.innerHeight + 100 &&
          // window.pageYOffset >= (elements[element].offsetTop + elements[element].offsetHeight) - window.innerHeight / 2) &&
          this.state[element].animation === true
        ) {
          this.setState({
            [element]: { ...this.state[element], animation: false }
          });
        }
      }
    }
  }

  linkHandler = (e, page) => {
    e.preventDefault();
    this.setPage(page);
    // SMOOTH SCROLL    
    // const element = document.querySelector('#' + name);
    // const offset = element.offsetTop;
    // let position = 0;
    // let speed = 20;
    // const smoothScroll = setInterval( () =>{
    //   if(position < offset) {
    //     if(position + speed > offset) {
    //       speed = offset - position;          
    //     } 
    //     position += speed;
    //     window.scroll(0, position);
    //   }
    //   else clearInterval(smoothScroll);
    // }, 1);
  }

  setPage = (page) => {
    Object.keys(this.state).map( element => {
      if(page === element) {
        this.setState({
          [element]: { ...this.state[element], state: true }
        })
      }
      else {
        this.setState({
          [element]: { ...this.state[element], state: false }
        }, () => console.log(this.state))
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header linkHandler={this.linkHandler} animation={this.state.header.animation}/>
        <Info setPage={this.setPage} state={this.state.info.state} animation={this.state.info.animation}/>
        <Projects setPage={this.setPage} state={this.state.projects.state} animation={this.state.projects.animation}/>
        {/* <Contact animation={this.state.contact.animation}/> */}
      </div>
    );
  }
}

export default App;
