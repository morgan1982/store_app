import React, { Component } from 'react';
import classes from "./calculator.css";


import Switch from 'react-switch';


export default class SwitchExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nr_checked: false,
            lc_checked: true,
            total: "1€",
            input_val: 0,
            ticked: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.totalPrice  = this.totalPrice.bind(this);
    }

    handleChange () {
        let nr_checked = false;
        this.state.nr_checked ? nr_checked = false : nr_checked = true;
        this.setState({ nr_checked });

    }
    handleInput (e) {
        let price = e.target.value;
        this.setState({
            input_val: price
        })
        // this.totalPrice();      
    }
    totalPrice (val) {
        let total = this.state.nr_checked ? parseFloat(val) / 1.24 : val;
        total = this.state.lc_checked ? total / 1.1 : total;
        total = Math.round(total * 100) / 100;
        return total; 
    }
    checkboxChange = (e) => {
        let tick = false;
        this.state.ticked ? tick = false : tick = true;
        this.setState({
            ticked: tick
        })
        console.log(e.target.checked)
    }






    render() {
        const price = this.totalPrice(this.state.input_val);

            const toggle = this.state.nr_checked;
            const indicator = toggle ? (
                <h1 style={{"color": "green"}}>ON</h1>
            ) : (
                <h1 style={{"color": "red"}}>OFF</h1>
            )


        return (
            <div>
            <label htmlFor="normal-switch">
                <Switch 
                    onChange={this.handleChange}
                    checked={this.state.nr_checked}
                    id="normal-switch"
                    boxShadow="1px 1px 5px black"
                    handleDiameter={22}
                    offColor="#e85050"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    height={26}
                    width={50}
                    />
                </label> 
                {indicator}
                <input className={classes.input}
                       onChange={this.handleInput}
                       value={this.state.input_val}/>
                <h2><strong>Total</strong></h2>
                <h3>{price}</h3>
                <input type="checkbox"
                       checked={this.state.ticked}
                       onChange={this.checkboxChange}/>
            </div>

        );
    }
}