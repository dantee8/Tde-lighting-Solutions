import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";

const NavMenu = ({
  items,
  navClass,
  ulClass,
  links,
  dropDownClass,
  closeMenu,
}) => {
  return (
    <nav className={navClass}>
      <ul className={ulClass}>
        {links.map((link, index) => {
          if (link === "Products") {
            return (
              <li key={index}>
                <Dropdown
                  label={link}
                  inline
                  className={dropDownClass}
                  placement="bottom"
                >
                  {items.map((item) => (
                    <Link to={`/products/${item.id}`} key={item.id}>
                      <Dropdown.Item>{item.name.slice(0, 10)}</Dropdown.Item>
                    </Link>
                  ))}
                </Dropdown>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <Link to={link === "All" ? "/products" : `/${link}`}>
                  {link}
                </Link>
              </li>
            );
          }
        })}
        <li className="w-3/4 md:hidden mx-auto items-center text-center ">
          <button
            onClick={() => closeMenu()}
            className="border-2 bg-teal-200 mb-2 hover:bg-teal-500 py-1 w-full text-sm rounded-full px-5"
          >
            Close
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
