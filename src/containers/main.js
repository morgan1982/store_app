import React, { Component } from 'react';
import classes from './Main.css';
import Switch from '../calculator/containers/calculator';




export default class Main extends Component {
    
  
    state = {
        name: 'test'
    }
    


    render () {

        return (
        <div className={classes.main}>
            <button onClick={this.props.emit}>emit</button>
            <Switch/>
                
        </div>
        )
    }
} 