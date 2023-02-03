import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import Select from "./Select";
export default function Comp({ query }) {
  console.log("Inside component");
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState("");
  useEffect(() => {
    // this runs when component mounts;
    setIsLoading(true);
    axios
      .get(
        query === "all" || query === ""
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${query}`
      )
      .then((res, err) => {
        setIsLoading(false);
        setProducts(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [query]);
  console.log("products", products);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLoading ? (
          <img
            style={{ height: "100px" }}
            src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
          />
        ) : (
          <Product key={products.key} products={products} />
        )}
      </div>
    </>
  );
}
