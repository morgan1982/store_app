import React from 'react';
import Select from 'react-select';
// import select from './combobox.css'
// import 'react-select/dist/react-select.css';
import './combobox.css';
const Combobox = (props) =>  (
    <Select
        onInputChange={props.inputChange}
        placeholder="select discount"
        name="discount"
        value={props.selectedOption}
        onChange={props.handleChange}
        options={[
            { value: 'one', label: 'One'},
            { value: 'two', label: 'Two'},            
        ]}/>

)


export default Combobox;

 