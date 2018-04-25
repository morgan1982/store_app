import React, { Component } from 'react';
// import Driver from 'selenium-webdriver';
import classes from './App.css';
import Main from './containers/main';


const ipc = window.ipcRenderer;

class App extends Component {
  constructor(props){
    super(props); 


  }

  emit = () => {
    console.log('test');
    console.log('ipc => ', ipc);
    ipc.send('ping');
    console.log('ok');
  }

 

  render() {


    return (
      <div className={classes.App}>
        <div className={classes.draggable}>television</div>
        <Main emit={this.emit}/>
      </div>
    );
  }
}

export default App;
  