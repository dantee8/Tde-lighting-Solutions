import React from "react";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const FeaturedCardProduct = ({ product }) => {
  const { id, name, desc, quantity, img } = product;

  const dispatch = useDispatch();

  const incrementQuantity = () => {
    dispatch(handleQuantityIncrement({ productId: id }));
  };

  const decrementQuantity = () => {
    dispatch(handleQuantityDecrement({ productId: id }));
  };

  return (
    <div className="border-2 gap-3 rounded shadow-md flex flex-col justify-center items-center ">
      <img className="w-40 h-40 object-contain" src={product.img} alt="" />
      <div>
        <h3>{product.name}</h3>
        <p className="text-sm font-light py-2">
          {product.desc.slice(0, 30)}...
        </p>
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

export default FeaturedCardProduct;
