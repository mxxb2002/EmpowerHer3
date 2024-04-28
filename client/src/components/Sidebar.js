import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ showSidebar }) {
  return (
    <div
      className={`${
        showSidebar
          ? "fixed top-0 left-0 z-20 w-[250px] min-h-screen flex flex-col py-4 bg-slate-900"
          : "hidden bg-slate-900"
      } lg:flex lg:flex-col lg:py-4 lg:bg-slate-900 lg:min-h-screen lg:w-[250px] lg:fixed lg:top-0 lg:left-0 lg:z-20 `}
    >
      <ul
        className={`${
          showSidebar
            ? " flex flex-col mt-20 font-quicksand text-[16px] text-white px-1"
            : "hidden"
        } lg:flex lg:flex-col lg:mt-20 lg:font-quicksand lg:text-[16px] lg:text-white lg:px-1`}
      >
        <li className="">
          <NavLink
            to="/dashboard/empowerment"
            className="flex flex-row items-center justify-start my-2 py-4 hover:bg-rose-200 px-2"
            activeClassName="bg-rose-200"
          >
            <i className="fa-solid fa-graduation-cap text-[20px] text-rose-700 mr-1"></i>
            <p>Learning Empowerment</p>
          </NavLink>
        </li>

        <li className="">
          <NavLink
            to="/dashboard/community"
            className="flex flex-row items-center justify-start my-2 py-4 hover:bg-rose-200 px-2"
            activeClassName="bg-rose-200"
          >
            <i className="fa-solid fa-comments text-[20px] text-rose-700 mr-1"></i>
            <p>Community forumn</p>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/dashboard/quizes"
            className="flex flex-row items-center justify-start my-2 py-4 hover:bg-rose-200 px-2"
            activeClassName="bg-rose-200"
          >
            <i className="fa-solid fa-clipboard-question text-[20px] text-rose-700 mr-2"></i>
            <p>Quizes</p>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/dashboard/roleplay"
            className="flex flex-row items-center justify-start my-2 py-4 hover:bg-rose-200 px-2"
            activeClassName="bg-rose-200"
          >
            <i className="fa-solid fa-circle-play text-[20px] text-rose-700 mr-1"></i>
            <p>RolePlays</p>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/dashboard/feedback"
            className="flex flex-row items-center justify-start my-2 py-4 hover:bg-rose-200 px-2"
            activeClassName="bg-rose-200"
          >
            <i className="fa-regular fa-pen-to-square text-[20px] text-rose-700 mr-1"></i>
            <p>Feedback</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
