import { Link, Outlet } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import TDeLogo from "../assets/TDe-logo.png";
import { Dropdown } from "flowbite-react";
import { useSelector } from "react-redux";
import { useState } from "react";

const NavBar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const categories = useSelector((state) => state.product.products);
  const [menuDrop, setMenuDrop] = useState(false);

  const handleMenuToggle = () => {
    setMenuDrop((prevMenu) => !prevMenu);
  };

  return (
    <>
      <header className=" flex items-center justify-between md:px-28  px-4 py-3 shadow-lg fixed bg-white top-0   w-full z-20">
        <Link to="/">
          <img className="lg:w-40 w-28" src={TDeLogo} alt="" />
        </Link>
        <nav className="lg:-ml-28 hidden md:flex">
          <ul className="flex gap-5 items-center">
            <li>
              <Link to="/products">All</Link>
            </li>
            <li>
              <Dropdown
                label="Products"
                inline
                placement="bottom"
                className="w-[60vw]"
              >
                {categories.map((category) => {
                  return (
                    <div key={category.id} className="  text-nowrap">
                      <Link to={`/products/${category.id}`} className="">
                        <Dropdown.Item className=" ">
                          {category.name.slice(0, 10)}
                        </Dropdown.Item>
                      </Link>
                    </div>
                  );
                })}
              </Dropdown>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className=" flex gap-2 items-center rounded ">
          <Link to="/shopping-cart">
            <FaShoppingBag className="w-5 h-5 rounded relative" />
            {cartItems.length === 0 ? (
              ""
            ) : (
              <span className="w-5 h-5 font-extralight text-sm flex items-center justify-center rounded-full bg-red-400 absolute md:top-4 md:right-24 sm:top-2 sm:right-40 top-2 right-16">
                {cartItems.length}
              </span>
            )}
          </Link>
          <div
            onClick={() => handleMenuToggle()}
            className="md:hidden flex flex-col ml-10 gap-1 relative cursor-pointer "
          >
            <span className="w-4 h-[1px] border-black border-[1px]"></span>
            <span className="w-4 h-[1px]  border-black border-[1px]"></span>
            <span className="w-4 h-[1px]  border-black border-[1px]"></span>
          </div>
          {menuDrop && (
            <div className=" absolute  top-16 shadow-lg right-2 border-[1px]  bg-white z-20  w-[300px] h-[340px]  rounded flex">
              <ul className="flex flex-col w-full justify-between ml-4 items-start my-2 ">
                <li>
                  <Link>All</Link>
                </li>
                <hr className="w-3/4" />
                <li>
                  <Dropdown
                    label="Products"
                    inline
                    placement="bottom"
                    className="w-[60vw]"
                  >
                    {categories.map((category) => {
                      return (
                        <div key={category.id} className="  text-nowrap">
                          <Link to={`/products/${category.id}`} className="">
                            <Dropdown.Item className=" ">
                              {category.name.slice(0, 10)}
                            </Dropdown.Item>
                          </Link>
                          <hr className="w-3/4" />
                        </div>
                      );
                    })}
                  </Dropdown>
                </li>
                <hr className="w-3/4" />

                <li>
                  <Link to={"/contact"}>Rental</Link>
                </li>
                <hr className="w-3/4" />
                <li>
                  <Link to={"/contact"}>Projects</Link>
                </li>
                <hr className="w-3/4" />
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <hr className="w-3/4" />
                <li>
                  <Link>About Us</Link>
                </li>
                <hr className="w-3/4" />

                <li className="w-3/4 mx-auto items-center text-center ">
                  <button
                    onClick={() => handleMenuToggle()}
                    className="border-2 bg-teal-200 mb-2 hover:bg-teal-500 py-1 w-full  text-sm rounded-full px-5 "
                  >
                    Close
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <div className=" mt-20">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
