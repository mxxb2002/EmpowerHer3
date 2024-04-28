import React, { useState } from "react";
import DashboardNavbar from "../../components/DashboardNavbar";
import Sidebar from "../../components/Sidebar";
import { LearningTopics } from "./Demodata";

export default function Dashboard({ onLogout }) {
  // State to track the currently selected article topic
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Function to handle click on a topic box
  const handleTopicClick = (topic) => {
    setSelectedTopic(topic.component); // Set selectedTopic to the component associated with the clicked topic
  };

  // Function to handle click on the back button
  const handleBackClick = () => {
    setSelectedTopic(null); // Reset selectedTopic to null to show the topic boxes again
  };

  return (
    <div>
      {/* ---- Main Page contents Start----- */}
      <div className="pt-16 lg:ml-[250px] bg-dash-bg bg-cover bg-no-repeat min-h-screen overflow-y-auto fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="text-black mt-10 text-center relative z-10">
          <h2 className="font-quicksand text-[44px] text-rose-700 text-center">
            Learning Empowerment
          </h2>
          {/* --- Articles --- */}
          {!selectedTopic ? ( // Render topic boxes if no topic is selected
            <div className="flex flex-col items-center justify-center mt-8 px-20 stm:px-5 lsm:px-1">
              {/* Render boxes for each article topic */}
              {LearningTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="cursor-pointer border border-gray-400 bg-rose-700 rounded-md p-4 mb-4 w-[650px] stm:w-[350px] lsm:w-[260px] h-[120px] stm:h-auto lsm:h-auto flex-wrap text-left text-white font-quicksand text-[18px] stm:text-[15px] lsm:text-[12px] font-semibold"
                  onClick={() => handleTopicClick(topic)}
                >
                  {topic.id}. {topic.topic}
                </div>
              ))}
            </div>
          ) : (
            // Render the selected topic's component if a topic is selected
            <div className="mt-3 px-20 stm:px-5 lsm:px-1 flex flex-col items-start justify-center">
              <button
                className="mt-4 flex flex-row items-center justify-center bg-rose-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleBackClick}
              >
                <i className="fa-solid fa-arrow-left mr-2"></i>Back to the Topic
              </button>
              {/* Render the selected topic's component */}
              {selectedTopic}
              {/* Back button */}
            </div>
          )}
        </div>
      </div>
      {/* ----- Main Page contents end ----- */}
    </div>
  );
}
