import { Link, Outlet } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import TDeLogo from "../assets/TDe-logo.png";
import { Dropdown, DropdownItem } from "flowbite-react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <header className=" flex items-center justify-between md:px-28  px-4 py-3 shadow-lg">
        <Link to="/">
          <img className="lg:w-40 w-28" src={TDeLogo} alt="" />
        </Link>
        <nav className="lg:-ml-28 hidden md:flex">
          <ul className="flex gap-5">
            <li>
              <Link to="/products">All</Link>
            </li>
            <li>
              <Dropdown
                label="Products"
                placement="bottom"
                inline
                className="w-2/5 "
              >
                <div className="grid grid-cols-5 gap-2 text-nowrap">
                  <div>
                    <DropdownItem>Led Light</DropdownItem>
                    <DropdownItem>Led Light</DropdownItem>
                    <DropdownItem>Led Light</DropdownItem>
                  </div>
                  <div>
                    <DropdownItem>Led Light</DropdownItem>
                    <DropdownItem>Led Light</DropdownItem>
                    <DropdownItem>Led Light</DropdownItem>
                  </div>
                  <div>
                    <DropdownItem>Led Light</DropdownItem>
                    <DropdownItem>Led Light</DropdownItem>
                    <DropdownItem>Led Light</DropdownItem>
                  </div>
                  <div>
                    <DropdownItem>Led Light</DropdownItem>
                    <DropdownItem>Led Light</DropdownItem>
                    <DropdownItem>Led Light</DropdownItem>
                  </div>
                  <div>
                    <DropdownItem>Led Light</DropdownItem>
                    <DropdownItem>Led Light</DropdownItem>
                    <DropdownItem>Led Light</DropdownItem>
                  </div>
                </div>
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
          <div className="md:hidden flex flex-col ml-10 gap-1">
            <span className="w-4 h-[1px] border-black border-[1px]"></span>
            <span className="w-4 h-[1px]  border-black border-[1px]"></span>
            <span className="w-4 h-[1px]  border-black border-[1px]"></span>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
