import React from "react";

const Aujtable = (props) => {
  return (
    <div>
      <tabel className={props.class} id={props.id} style={props.style}>
        <thead>
          <tr className={props.class} style={props.style}>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          <tr className={props.class} style={props.style}>
            <td>01</td>
            <td>Abi</td>
            <td>20</td>
          </tr>
          <tr className={props.class} style={props.style}>
            <td>02</td>
            <td>Eve</td>
            <td>20</td>
          </tr>
        </tbody>
      </tabel>
    </div>
  );
};

export default Aujtable;
