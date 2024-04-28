import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ isAuthenticated, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full px-20 flex flex-row justify-between items-center h-[70px] bg-slate-800 fixed">
      <p className="text-white text-[24px] font-quicksand font-bold">
        EmpowerHer
      </p>
      <div
        className="block lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
      {menuOpen ? (
        <ul
          className={`${
            menuOpen
              ? "flex flex-col items-center justify-start absolute top-[70px] right-0 bg-gray-200 px-10 py-10 text-black"
              : "hidden"
          } lg:hidden`}
        >
          <li className={`lg:mx-3 ${menuOpen ? "my-3" : ""}`}>
            <NavLink to="/" className="active:font-bold">
              Home
            </NavLink>
          </li>
          <li className={`lg:mx-3 ${menuOpen ? "my-3" : ""}`}>
            <NavLink to="/about-us" className="active:font-bold">
              About us
            </NavLink>
          </li>
          <li className={`lg:mx-3 ${menuOpen ? "my-3" : ""}`}>
            <NavLink to="/contact-us" className="active:font-bold">
              Contact us
            </NavLink>
          </li>
          {isAuthenticated ? (
            <>
              <li className={`lg:mx-3 ${menuOpen ? "my-3" : ""}`}>
                <NavLink
                  to="/dashboard/empowerment"
                  className="active:font-bold"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className={`lg:mx-3 ${menuOpen ? "my-3" : ""}`}>
                <div
                  className={
                    "border-2 border-rose-700 text-rose-700 hover:bg-rose-700 hover:text-white w-[100px] h-[40px] rounded-[5px]  flex flex-row items-center justify-center  cursor-pointer"
                  }
                  onClick={() => {
                    onLogout();
                  }}
                >
                  <p className="font-semibold">Logout</p>
                </div>
              </li>
            </>
          ) : (
            <li className="lg:mx-3">
              <NavLink to="/login">
                <div className="w-[100px] h-[40px] rounded-[5px] border-2 border-white text-white flex flex-row items-center justify-center hover:text-rose-700 hover:bg-white cursor-pointer">
                  <p className="font-semibold">Login</p>
                </div>
              </NavLink>
            </li>
          )}
        </ul>
      ) : null}
      <ul
        className={`hidden text-white lg:flex lg:flex-row lg:items-center lg:justify-center`}
      >
        <li className={`lg:mx-3 ${menuOpen ? "my-3" : ""}`}>
          <NavLink to="/" className="active:font-bold">
            Home
          </NavLink>
        </li>
        <li className={`lg:mx-3 ${menuOpen ? "my-3" : ""}`}>
          <NavLink to="/about-us" className="active:font-bold">
            About us
          </NavLink>
        </li>
        <li className={`lg:mx-3 ${menuOpen ? "my-3" : ""}`}>
          <NavLink to="/contact-us" className="active:font-bold">
            Contact us
          </NavLink>
        </li>
        {isAuthenticated ? (
          <>
            <li className={`lg:mx-3 ${menuOpen ? "my-3" : ""}`}>
              <NavLink to="/dashboard/empowerment" className="active:font-bold">
                Dashboard
              </NavLink>
            </li>
            <li className={`lg:mx-3 ${menuOpen ? "my-3" : ""}`}>
              <div
                className={
                  "border-2 border-white text-white hover:text-rose-700 hover:bg-white w-[100px] h-[40px] rounded-[5px] flex flex-row items-center justify-center  cursor-pointer"
                }
                onClick={() => {
                  onLogout();
                }}
              >
                <p className="font-semibold">Logout</p>
              </div>
            </li>
          </>
        ) : (
          <li className="lg:mx-3">
            <NavLink to="/login">
              <div className="w-[100px] h-[40px] rounded-[5px] border-2 border-white text-white flex flex-row items-center justify-center hover:text-rose-700 hover:bg-white cursor-pointer">
                <p className="font-semibold">Login</p>
              </div>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
