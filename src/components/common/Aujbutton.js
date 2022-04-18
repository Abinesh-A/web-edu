import React from "react";

/* author: abinesh software developer
 * date: 06-08-2021
 */
const Aujbutton = (props) => {
  let htmlelement = (
    <button
      style={props.style}
      type={props.type}
      className={props.class}
      id={props.id}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
  return <div>{htmlelement}</div>;
};

export default Aujbutton;
