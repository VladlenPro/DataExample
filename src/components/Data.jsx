/** @format */

import React from "react";

function Data(props) {
  return (
    <div>
      <p>user id:{props.userId}</p>
      <p> id:{props.id}</p>
      <p>title:{props.title}</p>
      <p>completed:{props.completed}</p>
    </div>
  );
}

export default Data;
