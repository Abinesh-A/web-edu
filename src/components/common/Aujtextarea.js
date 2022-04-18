import React from "react";

/**
 * author: adhwaitha software developer
 * date:08-08-2021
 */
const Aujtextarea = (props) => {
  /* declaring HTMLELEMENT*/
  let HTMLELEMENT = 
    <textarea
      id={props.id}
      required={props.required}
      className={props.class}
      rows={props.rows}
      cols={props.cols}
      style={props.style}
      placeholder={props.placeholder}>
        {props.name}</textarea>
      // method declaration
    const gethtmlelement = (props) => {
      return HTMLELEMENT;
    };
return (
  //  here we have to enclose in one div rapid tag otherwise error will occur
  <div>
    {gethtmlelement(props)}
  </div>
);
}

export default Aujtextarea;
