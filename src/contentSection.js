import React from "react";

const contentSection = props => {
  return (
    <div>
      <p>
        <h2>{props.title}</h2>
        {props.description}<br/><br/>
        {props.description2}<br/><br/>
        {props.description3}
      </p>
      <img src={props.image} width="100%" height="50%" />
    </div>
  );
};
export default contentSection;
