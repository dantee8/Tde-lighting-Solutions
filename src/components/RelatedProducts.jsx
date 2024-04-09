import React from "react";
import { products } from "../data";

const RelatedProducts = () => {
  return (
    <div className="ml-40  mt-20 mb-20">
      <h2 className="text-3xl">Related Products</h2>
      <div className="carousel carousel-center rounded-box border-2 mt-2 h-60 w-[800px] ">
        {products.map((product) => {
          return (
            <div className="carousel-item mx-2">
              <img src={product.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
