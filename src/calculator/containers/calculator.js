import React, { Component } from 'react';
import classes from "./calculator.css";


import Switch from 'react-switch';


export default class SwitchExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            total: "1€",
            input_val: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.totalPrice  = this.totalPrice.bind(this);
    }

    handleChange () {
        let checked = false;
        this.state.checked ? checked = false : checked = true;
        this.setState({ checked });

    }
    handleInput (e) {
        this.setState({
            input_val: e.target.value
        })
        this.totalPrice();
    }
    totalPrice () {
        let price;
        let init_price = this.state.input_val
        // console.log(price);
        this.state.checked ? price = init_price * 1.0 / 1.24 : price = init_price;
        Math.round(price, 2);
        console.log("the price is", price);
        this.setState({
            total: price
        })
    }
    testing = () => {
        const total = this.state.total;
        return <h1>{total}</h1>
        console.log("changed")
    } 




    render() {

            const toggle = this.state.checked;
            const indicator = toggle ? (
                <h1 style={{"color": "green"}}>ON</h1>
            ) : (
                <h1 style={{"color": "red"}}>OFF</h1>
            )
            const test = this.testing();


        return (
            <div>
            <label htmlFor="normal-switch">
                <span>Switch with default style</span>
                <Switch 
                    onChange={this.handleChange}
                    checked={this.state.checked}
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
                <h2>{this.state.total}</h2>
                {test}
            </div>

        );
    }
}