import React from 'react'

/**author:sherlin software developer
 * date:06/08/2021
 *  */
const Aujlabel = (props) => {
    //declaring HTMLElement
    let HTMLElement = <label id={props.id} className={props.class} value={props.value}
        style={props.style} placeholder={props.placeholder}>{props.name} </label>
    //creating another function to return HTMLElement
    const gethtmlelement = (props) => {
        return HTMLElement;
    }
    //returning label tag  
    return (
        <div>
            {gethtmlelement(props)}
        </div>
    )
}

export default Aujlabel
