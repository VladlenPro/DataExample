/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Data from "../Data";
import "../pages/product.css";

function MyCart(props) {
  return (
    <div>
      <div>
        <Link to="/Products">Go Back</Link>
      </div>
      <div className="container">
        {props.item.map((prod) => {
          return (
            <div className="productCard">
              <Data
                id={prod.id}
                title={prod.title}
                price={prod.price}
                description={prod.description}
                category={prod.category}
                image={prod.image}
              ></Data>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyCart;
