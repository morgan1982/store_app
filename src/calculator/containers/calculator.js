import React, { Component } from 'react';
import classes from "./calculator.css";

import Switch from '../components/switch'


export default class SwitchExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nr_checked: false,
            lc_checked: false,
            input_val: 0,
            ticked: true
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






    render() {
        const price = this.totalPrice(this.state.input_val);

            const toggle = this.state.nr_checked;
            const indicator = toggle ? (
                <h1 style={{"color": "green"}}>ON</h1>
            ) : (
                <h1 style={{"color": "red"}}>OFF</h1>
            )


        return (
            <div className={classes.input_container}>
                {indicator}
                <div>
                    <input className={classes.input}
                           placeholder="amount"
                           onChange={this.handleInput}
                           value={this.state.input_val}/>
                           <label htmlFor="input" className={classes.input_label}>hello</label> 
                </div> 
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

            </div>

        );
    }
}