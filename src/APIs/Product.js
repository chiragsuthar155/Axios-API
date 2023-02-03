import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

export default function Product({ products }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "2rem",
          marginLeft: "2rem",
          marginTop: "2rem",
        }}
      >
        {products
          ? products.map((item) => (
              <div
                className="product-card"
                style={{
                  cursor: "pointer",
                  height: "350px",
                  border: "1px solid white",
                  padding: "0rem 1rem",
                }}
              >
                <img
                  src={item.image}
                  style={{ width: "220px", height: "200px" }}
                  alt={item.title}
                />
                <p style={{ width: "200px", fontSize: "1.3rem" }}>
                  {item.title}
                </p>
                <p
                  style={{
                    width: "200px",
                    fontSize: "1rem",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))
          : "not defined"}
      </div>
    </>
  );
}
