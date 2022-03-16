/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DataList(props) {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return (
    <div>
      <ul>
        {data.slice(0, 25).map((item) => {
          let linkTemp = `/Products/Product/${item.id}`;
          const myData = {
            title: item.title,
            price: item.price,
            description: item.description,
            category: item.category,
            image: item.image,
            rating: { rate: item.rating.rate, count: item.rating.count },
          };
          console.log(myData);
          return (
            <li>
              <Link to={linkTemp} state={myData}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DataList;
