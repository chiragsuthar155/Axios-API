import React, { useEffect, useState } from "react";
import axios from "axios";
import Comp from "./Comp";
export default function Select({ setProduct }) {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    setIsLoading(true);
    const promise = axios.get("https://fakestoreapi.com/products/categories");
    promise.then((res, err) => {
      setIsLoading(false);
      setCategories(res.data);
    });
  }, []);
  return (
    <>
      <select
        style={{ fontSize: "2rem", cursor: "pointer" }}
        name="Categories"
        onChange={handleChange}
      >
        <option value="all">All</option>
        {categories.map((item) => (
          <option>{item}</option>
        ))}
      </select>
      {isLoading ? "Loading..." : <Comp query={query} />}
    </>
  );
}
