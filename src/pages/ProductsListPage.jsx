import React, { useState } from "react";
import CaruselHero from "../components/CaruselHero";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import { IoGridOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";

const ProductsListPage = () => {
  const products = useSelector((state) => state.product.products);
  const [isGridStyle, setIsGridStyle] = useState(true);

  const handleGridStyle = () => {
    setIsGridStyle((prevStyle) => !prevStyle);
  };

  return (
    <div className="w-[80vw]  mx-auto">
      <CaruselHero />
      <div className="flex mt-10   justify-between">
        <div className="flex gap-4 items-center">
          <div className="cursor-pointer w-5 h-5" onClick={handleGridStyle}>
            <IoGridOutline className="w-4 h-4" />
          </div>
          <div className="cursor-pointer w-6 h-6" onClick={handleGridStyle}>
            <IoIosList className="h-5 w-5 " />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p>Sort by </p>
          <select className="rounded-lg text-sm p-2" name="" id="">
            <option value="">Name(A-Z)</option>
            <option value="">Name(Z-A)</option>
            <option value="">Price(low-High)</option>
            <option value="">Price(High-Low)</option>
          </select>
        </div>
      </div>
      <div
        className={
          isGridStyle
            ? "  mt-10  gap-4  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 "
            : ""
        }
      >
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              isGrid={isGridStyle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsListPage;
