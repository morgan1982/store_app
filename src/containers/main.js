import React, { Component } from 'react';
import classes from './Main.css';


export default class Main extends Component {
    

    state = {
        name: 'test'
    }




    render () {

        return (
            <div className={classes.main}>hello there</div>
        )
    }
} 