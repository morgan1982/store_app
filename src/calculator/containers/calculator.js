import React, { Component } from 'react';
import classes from "./calculator.css";

import Switch from '../components/switch';
import Input from '../components/input';

// import Calculator from '../utils/discount';
import {discount, customDiscount, fixedDiscount} from '../utils/discount';
import Combobox from '../components/combobox';

export default class SwitchExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nr_checked: false,
            lc_checked: false,
            input_val: 0,
            ticked: true,
            price_input: [1, 2, 3], // num of input boxes
            prices: {},
            selectedOption: '',
            customDiscount: null
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

    priceChange = (e,key) => { // map prices to an object
        const enumer = parseInt(key, 10)
        const prices = {...this.state.prices}
        const repair_num = `repair${key + 1}`;
        const price_num = discount(e.target.value, enumer +1);
        prices[repair_num] = price_num;
        // console.log(prices)
        this.setState({prices})

    }

    comboChange = (selectedOption) => {
        // console.log(selectedOption);
        this.setState({
            selectedOption
        })
    }

    inputChange = (val) => {
        // console.log(val);
        this.setState({
            customDiscount: val
        })
    }
    addRepair = () => {
        const list = [...this.state.price_input];
        list.push(list.length + 1);
        this.setState({
            price_input: list
        })


        console.log(list);
    }
    subRepair = () => {
        const list = [...this.state.price_input];
        if (list.length > 1) {
                list.splice(-1, 1);
                this.setState({
                    price_input: list
            })
        }

    }






    render() {
        console.log(this.state.customDiscount);
        console.log("combostate ", this.state.selectedOption);
        // console.log(fixedDiscount(50, true, true)); // test nr lc
        // console.log("custom disc", customDiscount(100, 24)) // test the customdisck method (need a combobox or something)
        console.log(this.state.prices);
        const price = this.totalPrice(this.state.input_val);

            const toggle = this.state.nr_checked;
            const indicator = toggle ? (
                <h1 style={{"color": "green"}}>ON</h1>
            ) : (
                <h1 style={{"color": "tomato"}}>OFF</h1>
            )
        const priceInput = this.state.price_input.map((e, key) => (
            <div className={classes.input} key={key}>
                <Input id={e} handleInput={(e) => this.priceChange(e, key)}/>
            </div>
        ))


        return (
            <div className={classes.container}>
                {indicator}
                <div className={classes.total}>
                    <h2><strong>Total</strong></h2>
                    <h3>{price}</h3>                
                </div>
                    <input type="checkbox"
                        checked={this.state.ticked}
                        onChange={this.checkboxChange}/>
                       <div className={classes.switchContainer}>
                        <div className={classes.switch}>
                            <div>nr</div>
                            <div className={classes.switchBtn}>
                                <Switch
                                    handleChange={this.handleChange}
                                    checked={this.state.nr_checked}/>       
                            </div>
                        </div>
                        <div className={classes.switch} >
                            <div>lc</div>
                            <div className={classes.switchBtn}>
                                <Switch
                                    handleChange={this.handleLcChange}
                                    checked={this.state.lc_checked}/>         
                            </div>

                        </div>
                       </div>                    
                       <div className={classes.inputs}>
                       <button onClick={this.addRepair}>+</button>
                            <button onClick={this.subRepair}>-</button>
                            {priceInput}
                        <Combobox 
                            selectedOption={this.state.selectedOption}
                            handleChange={this.comboChange}
                            inputChange={this.inputChange}
                            />
                       </div>

            </div>

        );
    }
}