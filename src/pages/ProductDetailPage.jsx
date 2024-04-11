import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import CaruselHero from "../components/CaruselHero";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const productsI = useSelector((state) => state.product.products);

  const { productId } = useParams();

  const parsedId = parseInt(productId);

  const product = productsI.find((item) => item.id === parsedId);
  console.log(product);
  if (!product) {
    return <div>Loading ....</div>;
  }

  return (
    <>
      <CaruselHero />
      <div class=" border-2 rounded mx-auto shadow-2xl w-[80vw] dark:bg-gray-800 py-8 mt-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div class="lg:h-[460px]  rounded-lg dark:bg-gray-700 mb-4">
                <img
                  class="md:w-full md:h-full w-40 h-40 md:object-cover mx-auto"
                  src={product.img}
                  alt="Product Image"
                />
              </div>
              <div class="flex -mx-2 mb-4 items-center">
                <div class="w-1/2 px-1">
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    class="w-full text-xs bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Add to Cart
                  </button>
                </div>
                <div class="w-1/2 px-1 ">
                  <button class="w-full text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-nowrap py-2   rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="md:text-2xl text-xl font-bold text-blue-800 dark:text-white mb-2">
                {product.name}
              </h2>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4"></p>
              <div class="flex mb-4 text-sm md:text-lg">
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                </div>
              </div>

              <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {product.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </>
  );
};

export default ProductDetailPage;
