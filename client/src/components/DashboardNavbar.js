import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function DashboardNavbar({
  onLogout,
  showSidebar,
  toggleSidebar,
  token,
}) {
  const [show, setShow] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:3001/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setProfileData([data]);
        setProfileImageUrl(data.profile);
      } else {
        // Handle error response
        console.error("Failed to fetch profile data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  // if (profileData.length > 0) {
  //   console.log(profileData);
  //   const blob = profileData[0].profile.blob();
  //   const imageUrl = URL.createObjectURL(blob);
  //   setProfileImageUrl(imageUrl);
  // }
  if (profileData.length > 0) {
    console.log(profileData);
  }

  return (
    <div className="w-full px-6 flex flex-row justify-between items-center h-[70px] bg-blue-800 fixed top-0 z-40">
      <div className="flex flex-row items-center">
        <div
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          {showSidebar ? (
            <i className="fa-solid fa-xmark mr-2"></i>
          ) : (
            <i className="fa-solid fa-bars mr-2"></i>
          )}
        </div>
        <p className="text-white text-[24px]">Dashboard</p>
      </div>
      <ul className="flex flex-row items-center justify-center text-white cursor-pointer">
        <li className="mx-3">
          <NavLink to="/" className="active:font-bold">
            Home
          </NavLink>
        </li>
        <li className="mx-3">
          <p
            className="font-medium text-white border-2 border-white cursor-pointer hover:bg-white hover:text-rose-700 px-4 py-2 my-1 rounded-md"
            onClick={() => onLogout()}
          >
            Logout
          </p>
        </li>
        {/*---- Profile Image -- */}
        <li className="mx-3" onClick={() => setShow((prevOpen) => !prevOpen)}>
          {profileImageUrl !== null ? (
            <>
              <img
                src={profileImageUrl}
                className="w-[40px] h-[40px]  rounded-[50px]"
                alt=""
              />
            </>
          ) : (
            <i className="fa-solid fa-circle-user text-[24px]"></i>
          )}
        </li>
        {/*---- Profile Image -- */}
      </ul>
      {/* {show && (
        <div className="flex flex-col w-[130px] py-4 rounded-[5px] shadow-lg absolute top-[70px] border bg-white border-[#eee] right-[10px]">
          <p className="font-medium text-black cursor-pointer hover:bg-gray-300 px-4 py-2 my-1">
            Profile
          </p>
        </div>
      )} */}
    </div>
  );
}
