import React from "react";
import CaruselHero from "../components/CaruselHero";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const ProductsListPage = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="w-full  m-auto   ">
      {/* <CaruselHero /> */}
      <div className=" mx-5 gap-4  mt-20 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsListPage;
