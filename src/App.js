import React, { Component } from 'react';

import classes from './App.css';

import Main from './containers/main';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div>television</div>
        <Main />
      </div>
    );
  }
}

export default App;
