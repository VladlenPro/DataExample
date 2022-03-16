/** @format */

import React from "react";
import { Link, useParams } from "react-router-dom";
import Ratings from "./Ratings";

function Data(props) {
  let { id } = useParams();
  return (
    <div>
      <div></div>
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
