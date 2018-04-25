import React, { Component } from 'react';
import Switch from 'react-switch';


export default class SwitchExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange () {
        let checked = false;
        this.state.checked ? checked = false : checked = true;
        this.setState({ checked });
    }




    render() {

            const toggle = this.state.checked;
            const indicator = toggle ? (
                <h1 style={{"color": "green"}}>ON</h1>
            ) : (
                <h1 style={{"color": "red"}}>OFF</h1>
            )


        return (
            <label htmlFor="normal-switch">
                <span>Switch with default style</span>
                <Switch 
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    id="normal-switch"
                    boxShadow="1px 1px 1px grey"/>
                    {indicator}
            </label> 
        );
    }
}