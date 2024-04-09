import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const LatestProducts = () => {
  const latestProducts = useSelector((state) => state.product.products);

  return (
    <div className="mt-10 w-[80vw] m-auto">
      <h2 className="text-2xl mb-5 ">Latest Products</h2>
      <div className="grid lg:grid-cols-4 gap-10 md:grid-cols-3 sm:grid-cols-2">
        {latestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
