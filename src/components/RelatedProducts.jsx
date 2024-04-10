import React from "react";
import { products } from "../data";

const RelatedProducts = () => {
  return (
    <div className="w-[80vw] mx-auto   my-20">
      <h2 className="md:text-3xl text-xl text-center  sm:text-start">
        Related Products
      </h2>
      <div className="carousel  rounded-box border-4 mt-2   ">
        {products.map((product) => {
          return (
            <div className="carousel-item mx-1 w-1/4  bg-gray-200  rounded p-4">
              <img src={product.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
