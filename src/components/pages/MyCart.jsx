/** @format */

import React, { useState } from "react";
import Data from "../Data";

function MyCart(props) {
  return (
    <div>
      {props.item.map((prod) => {
        return (
          <Data
            id={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
            category={prod.category}
            image={prod.image}
            rate={prod.rating.rate}
            count={prod.rating.count}
          ></Data>
        );
      })}
    </div>
  );
}

export default MyCart;
