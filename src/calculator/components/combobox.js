import React from 'react';
import Select from 'react-select';
// import select from './combobox.css'
// import 'react-select/dist/react-select.css';
// import './combobox.css';
import classes from './combobox.css';


const Combobox = (props) =>  (
    <Select
        className={classes.Combo}
        onInputChange={props.inputChange}
        placeholder="select discount"
        name="discount"
        value={props.selectedOption}
        onChange={props.handleChange}
        options={[
            { value: 10, label: '10%'},
            { value: 20, label: '20%'},
            { value: 25, label: '25%'},            
            { value: 40, label: '40%'},                                    
        ]}/>

)


export default Combobox;

 