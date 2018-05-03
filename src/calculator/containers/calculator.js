import React, { Component } from 'react';
import classes from "./calculator.css";

import Switch from '../components/switch';
import Input from '../components/input';

// import Calculator from '../utils/discount';
import {discount, customDiscount, fixedDiscount} from '../utils/discount';

export default class SwitchExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nr_checked: false,
            lc_checked: false,
            input_val: 0,
            ticked: true,
            price_input: [1, 2, 3, 4],
            prices: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.totalPrice  = this.totalPrice.bind(this);
        this.handleLcChange  = this.handleLcChange.bind(this);
    }

    handleChange () {
        let nr_checked = false;
        this.state.nr_checked ? nr_checked = false : nr_checked = true;
        this.setState({ nr_checked });

    }
    handleLcChange () {
        let lc_checked = false;
        this.state.lc_checked ? lc_checked = false : lc_checked = true;
        this.setState({
            lc_checked
        })
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
    discount = (price, num) => {
        let finalPrice = null;
        let numPrice = parseFloat(price);
        let discount = null;
        switch (true) {
            case num === 1:
                finalPrice = numPrice;
                break;
            case num === 2:
                discount = numPrice * .5;
                finalPrice = (numPrice - discount).toFixed(2);
                break;
            case num >= 3:
                discount = numPrice * 0.75
                finalPrice =(numPrice - discount).toFixed(2);
                break;
            default:
                finalPrice = numPrice;
        }
        console.log("final price -- num ", finalPrice, num);
        return finalPrice;
    } 
    priceChange = (e,key) => { // map prices to an object
        const enumer = parseInt(key, 10)
        const prices = {...this.state.prices}
        const repair_num = `repair${key + 1}`;
        const price_num = this.discount(e.target.value, enumer +1);
        prices[repair_num] = price_num;
        console.log(prices)
        this.setState({prices})

    }






    render() {
        console.log(fixedDiscount(50, true, true)); // test nr lc
        console.log("custom disc", customDiscount(100, 24)) // test the customdisck method (need a combobox or something)
        console.log(this.state.prices);
        const price = this.totalPrice(this.state.input_val);

            const toggle = this.state.nr_checked;
            const indicator = toggle ? (
                <h1 style={{"color": "green"}}>ON</h1>
            ) : (
                <h1 style={{"color": "red"}}>OFF</h1>
            )
        const priceInput = this.state.price_input.map((e, key) => (
            <div className={classes.input} key={key}>
                <Input id={e} handleInput={(e) => this.priceChange(e, key)}/>
            </div>
        ))


        return (
            <div className={classes.input_container}>
                {indicator}
                <Input handleInput={this.handleInput}
                       input_val={this.state.input_val}/>
                <h2><strong>Total</strong></h2>
                <h3>{price}</h3>
                <input type="checkbox"
                       checked={this.state.ticked}
                       onChange={this.checkboxChange}/>
                       <div className={classes.switchContainer}>
                       <div>nr</div>
                       <div className={classes.switch}>
                       <Switch
                            handleChange={this.handleChange}
                            checked={this.state.nr_checked}
                          />
                       </div>

                       </div>
                       <div className={classes.switchContainer}>                       
                       <div>lc</div>
                        <div className={classes.switch} >
                            <Switch
                            handleChange={this.handleLcChange}
                            checked={this.state.lc_checked}
                            />
                        </div>
                       </div>
                            {priceInput}
                        <select name="repairs">
                            <option value="1">first</option>
                            <option value="2">second</option>
                            <option value="3">third</option>
                            <option value="4">forth</option>
                            <option value="5">fifth</option>
                            <option value="6">sixth</option>                            
                        </select>
            </div>

        );
    }
}