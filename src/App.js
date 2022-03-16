/** @format */

import { useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Data from "./components/Data";
import DataList from "./components/DataList";
import HomePage from "./components/pages/HomePage";
import MyCart from "./components/pages/MyCart";
import ProductPage from "./components/pages/ProductPage";

function App() {
  let [item, setItem] = useState([]);
  return (
    <div className="App">
      <div>
        I am the Head
        <Link to="/HomePage">Home</Link>*<Link to="/Products">Products</Link>*
        <Link to="/MyCart">MyCart</Link>
      </div>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Products" element={<DataList />} />
        <Route
          path="/MyCart"
          element={<MyCart item={item} setItem={setItem} />}
        />
        <Route
          path="/Products/Product/:id/"
          element={<ProductPage item={item} setItem={setItem} />}
        />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
