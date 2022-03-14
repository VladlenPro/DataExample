/** @format */

import React, { useState, useEffect } from "react";
import Data from "./Data";

function DataList(props) {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return (
    <div>
      {data.slice(0, 5).map((item) => {
        return (
          <Data
            userId={item.userId}
            id={item.id}
            title={item.title}
            completed={item.completed}
          ></Data>
        );
      })}
    </div>
  );
}

export default DataList;
