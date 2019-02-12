import React from "react";
const person = props => {
  onchange=()=>{
    console.log("LOTS");
  }
  return (
    <div>
      <h1>So this is what {props.happy} looks like {props.name}</h1>
      <input type="text" value={props.value} onChange={props.handleChange}/>
      <input type="radio"/>
    </div>
  );
};

export default person;
