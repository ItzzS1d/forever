import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleToggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  const handleToggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav>
      <div className="flex justify-between mt-5 items-center ">
        <Link to={"/"}>
          {" "}
          <img src={assets.logo} alt="" width={160} />{" "}
        </Link>
        <ul className="items-center gap-8 hidden md:flex">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            HOME
          </NavLink>
          <NavLink
            to={"/collection"}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            COLLECTION
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            CONTACT
          </NavLink>
        </ul>
        <div className="flex items-center gap-8">
          {showSearchBar ? (
            <img
              src={assets.cross_icon}
              alt=""
              width={20}
              onClick={handleToggleSearchBar}
              className="cursor-pointer"
            />
          ) : (
            <img
              src={assets.search_icon}
              alt=""
              width={20}
              onClick={handleToggleSearchBar}
              className="cursor-pointer"
            />
          )}
          <NavLink to={"/login"}>
            <img
              src={assets.profile_icon}
              alt=""
              width={20}
              className="shrink-0"
            />
          </NavLink>
          <div className="flex">
            <NavLink to={"/cart"}>
              <img
                src={assets.cart_icon}
                alt=""
                width={20}
                className="shrink-0"
              />
            </NavLink>
            <span className="">0</span>
          </div>
          <img
            src={assets.menu_icon}
            alt=""
            width={20}
            className="md:hidden"
            onClick={handleToggleMobileMenu}
          />
        </div>
      </div>
      <div
        className={`border-b-2  ${
          showSearchBar ? "block" : "hidden"
        } mt-3 md:mt-0`}
      >
        <div className="border rounded-full flex items-center justify-between w-full md:max-w-[56%] px-4 py-3 md:py-2 m-auto mb-4">
          <input
            type="text"
            className="w-full outline-none "
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src={assets.search_icon} alt="" width={18} />
        </div>
      </div>
      {/* mobile nav */}
      {showMobileMenu && (
        <div className="absolute top-0 right-0 md:hidden left-0 bottom-0 overflow-hidden mt-5 bg-white ">
          <div className="md:hidden w-full ">
            <div className="flex items-center gap-4 mb-5">
              <img
                src={assets.dropdown_icon}
                width={10}
                alt=""
                className="rotate-180"
              />
              <button className="text-xl " onClick={handleToggleMobileMenu}>
                Back
              </button>
            </div>
            <ul className="w-full" onClick={handleToggleMobileMenu}>
              <div className="border-b-2  border-t-2 py-2" >
                <Link  to={"/"} className="ml-4">
                  HOME
                </Link>
              </div>
              <div className="border-b-2   py-2">
                <Link  to={"/collection"} className="ml-4">
                  COLLECTION
                </Link>
              </div>
              <div className="border-b-2   py-2">
                <Link  to={"/about"} className="ml-4">
                  ABOUT
                </Link>
              </div>
              <div className="border-b-2   py-2">
                <Link  to={"/contact"} className="ml-4">
                  CONTACT US
                </Link>
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
