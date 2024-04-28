import React, { useState } from "react";
import DashboardNavbar from "../../components/DashboardNavbar";
import Sidebar from "../../components/Sidebar";

export default function Roleplays({ onLogout }) {
  const videosPerPage = 4; // Number of videos to display per page
  const videoLinks = [
    "https://www.youtube.com/embed/xEZH6YSQvwA",
    "https://www.youtube.com/embed/1uyeikIR3sg",
    "https://www.youtube.com/embed/vK3RhRwMwIg",
    "https://www.youtube.com/embed/Qc_GHITvTmI",
    "https://www.youtube.com/embed/vdUWW-xogIM",
    "https://www.youtube.com/embed/jLj0NkA8mos",
    "https://www.youtube.com/embed/XkUEK7-h0lg",
    "https://www.youtube.com/embed/RsJQiXqu9Ns",
    "https://www.youtube.com/embed/KVpxP3ZZtAc",
    "https://www.youtube.com/embed/T7aNSRoDCmg",
    "https://www.youtube.com/embed/zZM57oTu9Ng",
    "https://www.youtube.com/embed/g-92FZPNWNs",
    "https://www.youtube.com/embed/X5JiqCLh6ps",
  ];
  const totalVideos = videoLinks.length; // Total number of videos
  const totalPages = Math.ceil(totalVideos / videosPerPage); // Total number of pages

  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevOpen) => !prevOpen);
  };

  // Function to handle next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to toggle fullscreen mode for the video
  const toggleFullscreen = (event) => {
    const element = event.target;
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message}`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Calculate the range of videos to display for the current page
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = Math.min(startIndex + videosPerPage, totalVideos);

  return (
    <div>
      {/* ---- Main Page contents Start----- */}
      <div className="pt-16 lg:ml-[250px] min-h-screen overflow-y-auto bg-dash-bg bg-cover bg-no-repeat fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="relative z-10 items-center flex flex-col">
          <h2 className="font-quicksand text-[44px] text-rose-700 text-center mb-10 mt-5">
            Role Plays
          </h2>
          {/* --- Video Embeds --- */}
          <div className="bg-white/75 xl:px-10 px-3 lsm:px-1 stm:px-5 py-8 mx-5 lsm:mx-0 mb-5">
            <div className="video-row grid grid-cols-2 stm:grid-cols-1 lsm:grid-cols-1 items-center justify-center gap-10 xl:gap-20 stm:gap-10 xl:px-20 px-5 stm:px-5 lsm:px-0">
              {/* Render videos for the current page */}
              {videoLinks.slice(startIndex, endIndex).map((link, index) => (
                <div key={startIndex + index} className="video-container">
                  <iframe
                    width="340"
                    height="240"
                    src={link}
                    frameborder="0"
                    allowfullscreen
                    onClick={toggleFullscreen}
                  ></iframe>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-5">
              <div
                className={`mr-2 px-4 py-2  text-[24px]  rounded ${
                  currentPage === 1
                    ? "cursor-not-allowed text-rose-300 "
                    : "cursor-pointer text-rose-600 font-bold"
                }`}
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              {/* Render page numbers */}
              <div className="flex flex-row items-center">
                {[...Array(totalPages)].map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`mx-2 w-[30px] h-[30px] flex flex-row items-center justify-center text-white text-[15px] rounded-[50px] ${
                      currentPage === i + 1 ? " bg-rose-600" : "bg-rose-300"
                    }`}
                  >
                    <p>{i + 1}</p>
                  </div>
                ))}
              </div>
              <div
                className={`ml-2 px-4 py-2 text-[24px] rounded ${
                  currentPage === totalPages
                    ? "cursor-not-allowed text-rose-300"
                    : "cursor-pointer text-rose-600 font-bold"
                }`}
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          {/* --- Video Embeds End --- */}
        </div>
      </div>
      {/* ----- Main Page contents end ----- */}
    </div>
  );
}
