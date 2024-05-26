import { Link, Outlet } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import TDeLogo from "../assets/TDe-logo.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import NavMenu from "./NavMenu";

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
        <NavMenu
          items={categories}
          navClass="lg:-ml-28 hidden md:flex "
          ulClass="flex gap-5 items-center "
          links={["All", "Products", "Contact", "Rental", "Projects"]}
          dropDownClass="w-[60vw]"
        />
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
            className="md:hidden  flex flex-col ml-10 gap-1 relative cursor-pointer "
          >
            <span className="w-4 h-[1px] border-black border-[1px]"></span>
            <span className="w-4 h-[1px]  border-black border-[1px]"></span>
            <span className="w-4 h-[1px]  border-black border-[1px]"></span>
          </div>
          {menuDrop && (
            <NavMenu
              items={categories}
              navClass="absolute  top-16 shadow-lg right-2 border-[1px]  bg-white  w-[300px] h-[280px]  rounded flex"
              ulClass="flex flex-col w-full gap-5 ml-4 items-start my-2 "
              links={["All", "Products", "Contact", "Rental", "Projects"]}
              dropDownClass="w-[60vw]"
              closeMenu={handleMenuToggle}
            />
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
