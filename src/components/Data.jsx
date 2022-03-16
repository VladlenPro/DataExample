/** @format */

import React from "react";
import Ratings from "./Ratings";

function Data(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        <img width="200px" height="200px" src={props.image} atl="a" />
      </div>
      <p>
        <b>Price: </b>
        {props.price}$
      </p>
      <p>
        <b>Description:</b> {props.description}
      </p>
      <p>
        <b>Category: </b>
        {props.category}
      </p>
      <Ratings count={props.count} rate={props.rate}></Ratings>
    </div>
  );
}

export default Data;
