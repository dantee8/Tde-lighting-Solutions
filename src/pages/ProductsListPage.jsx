import React from "react";
import CaruselHero from "../components/CaruselHero";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const ProductsListPage = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="w-[80vw]  mx-auto">
      <CaruselHero />
      <div className="b  mt-10  gap-4  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsListPage;
