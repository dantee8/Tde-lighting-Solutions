import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import {
  handleQuantityDecrement,
  handleQuantityIncrement,
} from "../features/productSlice";

const ProductCard = ({ product, isGrid }) => {
  const { id, name, desc, quantity, img } = product;
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    dispatch(handleQuantityIncrement({ productId: id }));
  };

  const decrementQuantity = () => {
    dispatch(handleQuantityDecrement({ productId: id }));
  };

  return (
    <div
      className={
        isGrid
          ? "border-2  my-10 rounded-lg shadow-sm hover:shadow-2xl flex flex-col justify-between"
          : "border-2 my-10 rounded-lg shadow-sm flex items-center justify-between"
      }
    >
      <div className="image overflow-hidden">
        <Link to={`/products/${id}`}>
          <img
            className={
              isGrid
                ? "overflow-hidden md:w-32 md:h-32 mx-auto w-20 h-20 object-contain"
                : "overflow-hidden w-20 h-20 mx-auto object-contain "
            }
            src={img}
            alt=""
          />
        </Link>
      </div>
      <div className="name and desc ">
        <h2 className="text-blue-600 font-bold text-sm md:text-lg text-center mb-2">
          {name}
        </h2>
        <div className="mx-2 text-sm font-extralight text-gray-600">
          <span>
            Description:
            <p className="md:text-sm">{`${desc.slice(0, 28)}...`}</p>
          </span>
        </div>
      </div>
      <div className="p-2  ">
        <div className="flex items-center my-4  justify-center">
          <Button
            className="w-5 h-5 items-center rounded-full"
            onClick={decrementQuantity}
          >
            -
          </Button>
          <p className="mx-4 text-nowrap">Quantity: {quantity}</p>
          <Button
            className="w-5 h-5 items-center rounded-full"
            onClick={incrementQuantity}
          >
            +
          </Button>
        </div>
        <Button
          className=" w-full items-center rounded-full"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
