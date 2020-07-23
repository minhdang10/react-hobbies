import React from "react";

function Hobbies(props) {
  return (
    <div>
      <h2>{props.hobby}</h2>
      <img src={props.img} className = "hob-img"/>
      <p>{props.details}</p>
    </div>
  );
}
export default Hobbies;