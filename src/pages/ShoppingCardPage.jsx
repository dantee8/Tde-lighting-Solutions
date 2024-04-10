import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromCart,
  incrementCartItem,
  decrementCartItem,
} from "../features/cartSlice";

import { Button } from "flowbite-react";

const ShoppingCardPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const shoppingProducts = items.map((product) => {
    return (
      <div
        key={product.id}
        className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
      >
        <div className="md:w-4/12 2xl:w-1/4 w-full">
          <img
            src={product.img}
            alt="Black Leather Purse"
            className="h-full object-center object-cover md:block hidden"
          />
        </div>
        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
          <div className="flex items-center justify-between w-full">
            <p className="text-base font-black leading-none text-gray-800">
              {product.name}
            </p>
          </div>
          <div className="flex items-center justify-between pt-5">
            <div>
              <div className="flex  justify-center items-center  ">
                <Button
                  onClick={() => dispatch(decrementCartItem(product.id))}
                  className="flex w-5 h-5 items-center justify-center rounded-full"
                >
                  -
                </Button>
                <p className="mx-4">Quantity: {product.quantity}</p>
                <Button
                  onClick={() => dispatch(incrementCartItem(product.id))}
                  className="flex w-5 h-5 items-center justify-center rounded-full"
                >
                  +
                </Button>
              </div>
            </div>
            <div className="flex itemms-center">
              <p
                onClick={() => dispatch(deleteFromCart(product))}
                className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
              >
                Remove
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container mx-auto ">
      <div className="sm:flex shadow-md ">
        <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            {items.length > 0 && (
              <h2 className="font-semibold text-2xl">{items.length} Items</h2>
            )}
          </div>
          {items.length === 0 ? (
            <p>There are no products in the Cart</p>
          ) : (
            shoppingProducts
          )}
          <svg
            className="fill-current mr-2 text-indigo-600 w-4"
            viewBox="0 0 448 512"
          >
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          <Link className="text-indigo-600" to="/">
            Continue Shopping
          </Link>
        </div>
        <div
          id="summary"
          className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10"
        >
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Total number of products{" "}
            </span>
            <span className="font-semibold text-sm"></span>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span className=" m-auto">
                {" "}
                {items.length} product{items.length <= 1 ? "" : "S"}
              </span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCardPage;
