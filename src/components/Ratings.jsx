/** @format */

import React from "react";

function Ratings(props) {
  return (
    <div>
      <p>
        <b>rate:</b> {props.rate} <b>count: </b>
        {props.count} units
      </p>
    </div>
  );
}

export default Ratings;
