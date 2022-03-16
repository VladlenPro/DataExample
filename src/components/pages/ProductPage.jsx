/** @format */

import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Data from "../Data";
import "../pages/product.css";

function ProductPage(props) {
  const location = useLocation();
  let data = location.state;
  console.log(data);
  let { id } = useParams();
  return (
    <div>
      <Link to="/Products">Go Back</Link>
      <div className="productCard">
        <div>
          <Data
            id={id}
            title={data.title}
            price={data.price}
            description={data.description}
            category={data.category}
            image={data.image}
            rate={data.rating.rate}
            count={data.rating.count}
          ></Data>
          <div>
            <button
              onClick={() => {
                props.setItem([...props.item, data]);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
