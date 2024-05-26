import { useSelector } from "react-redux";
import FeaturedCardProduct from "./FeaturedCardProduct";

const LatestProducts = () => {
  const latestProducts = useSelector((state) => state.product.products);

  return (
    <div className="mt-10 w-[80vw] mx-auto">
      <h2 className="text-2xl mb-5 ">Latest Products</h2>
      <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 grid-cols-1">
        {latestProducts.map((product) => (
          <FeaturedCardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
