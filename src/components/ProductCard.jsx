import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import {
  handleQuantityDecrement,
  handleQuantityIncrement,
} from "../features/productSlice";

const ProductCard = ({ product }) => {
  const { id, name, desc, quantity, img } = product;
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    dispatch(handleQuantityIncrement({ productId: id }));
    console.log();
  };

  const decrementQuantity = () => {
    dispatch(handleQuantityDecrement({ productId: id }));
  };

  return (
    <div className="border-[3px] h-[450px] md:h-[420px]  pb-3 rounded-lg hover:shadow-2xl hover:cursor-pointer">
      <div className="h-2/5 ">
        <Link to={`/products/${id}`}>
          <img className="object-contain w-full h-full" src={img} alt="" />
        </Link>
      </div>
      <div className="h-2/5 flex flex-col ">
        <h2 className="text-center     md:text-lg md:mx-2 my-4 text-blue-500 font-semibold">
          {name}
        </h2>
        <div className="mx-2.5 ">
          <span>
            Description:
            <p className="md:text-sm">{`${desc.slice(0, 28)}...`}</p>
          </span>
        </div>
      </div>
      <div className="h-1/5 border-blue-600 grid gap-3 p-2 items-center">
        <div className="flex justify-center items-center ">
          <Button
            onClick={decrementQuantity}
            className="flex w-5 h-5 items-center justify-center rounded-full"
          >
            -
          </Button>
          <p className="mx-4">Quantity: {quantity}</p>
          <Button
            onClick={incrementQuantity}
            className="flex w-5 h-5 items-center justify-center rounded-full"
          >
            +
          </Button>
        </div>
        <Button
          onClick={() => dispatch(addToCart(product))}
          className="rounded-full"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
