import React from 'react';
import SwitchComp from 'react-switch';

const Switch = (props) => (

    <SwitchComp 
    onChange={props.handleChange}
    checked={props.checked}
    id="normal-switch"
    boxShadow="1px 1px 5px black"
    handleDiameter={22}
    offColor="#e85050"
    uncheckedIcon={false}
    checkedIcon={false}
    height={26}
    width={50}
    />
)


export default Switch;