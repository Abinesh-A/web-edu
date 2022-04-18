import React from 'react'
/*author: lavanya  software developer*
 *date:09/08/2021
 */
const Aujselect = (props) => {
    /* declaring the HTML element */
    let HTMLElement = <select className={props.class} style={props.style}
        required={props.required} >
        <div class="input-group input-group-sm mb-3 " />
        <option selected>Open this select menu</option>
        <option value="English">English </option>
        <option value="Mathematics">Mathematics </option>
        <option value="Science">Science </option>
        <option value="History">History </option>
        <option value="Physics">Physics </option>
    </select>
    /* method declaration */
    const gethtmlelement = (props) => {
        return HTMLElement;
    }
    return (
        <div>
            {gethtmlelement(props)}
        </div>
    )
}
export default Aujselect
