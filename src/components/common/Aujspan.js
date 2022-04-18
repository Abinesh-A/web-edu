import React from 'react'

const Aujspan = (props) => {
    //declaring HTMLElement
    let HTMLElement = <span id={props.id} className={props.class}
        style={props.style}>{props.text} </span>
    //creating another function to return HTMLElement
    const gethtmlelement = (props) => {
        return HTMLElement;
    }
    return (
        <div>
            {gethtmlelement(props)}
        </div>
    )
}

export default Aujspan
