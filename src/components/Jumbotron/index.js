import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Employee Directory</h1>
      <p>You can filter the list of employees by name by typng in the Filter List By Name field</p>
      <p>You can sort the list on full name by clicking the Full Name header</p>
    </div>
  );
}

export default Jumbotron;
