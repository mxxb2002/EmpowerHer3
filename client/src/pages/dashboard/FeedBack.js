import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function FeedBack({ onLogout }) {
  // State variables for ratings
  const [learningRating, setLearningRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [review, setReview] = useState("");

  // Event handler for clicking on stars
  const handleRating = (category, rating) => {
    switch (category) {
      case "learning":
        setLearningRating(rating);
        break;
      case "communication":
        setCommunicationRating(rating);
        break;
      case "service":
        setServiceRating(rating);
        break;
      default:
        break;
    }
  };

  // Calculate average rating
  const averageRating =
    (learningRating + communicationRating + serviceRating) / 3;

  const handleSubmit = async () => {
    // Check if any rating is zero or review is empty
    if (
      learningRating === 0 ||
      communicationRating === 0 ||
      serviceRating === 0 ||
      review.trim() === ""
    ) {
      toast.error("Please provide ratings and review before submitting.");
      return;
    } else {
      const feedback = {
        learning: learningRating,
        communication: communicationRating,
        service: serviceRating,
        avgRating: averageRating,
        review: review,
      };
      try {
        const response = await axios.post(
          "http://localhost:3001/feedback",
          feedback
        );

        if (response.status === 201) {
          toast.success("Feedback submitted successfully!");
          // Optionally, you can clear the form after successful submission
          setLearningRating(0);
          setCommunicationRating(0);
          setServiceRating(0);
          setReview("");
        } else {
          toast.error("Failed to submit feedback");
        }
      } catch (error) {
        console.error("Error submitting feedback:", error);
        toast.error("Error submitting feedback");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* ---- Main Page contents Start----- */}
      <div className="pt-16 lg:ml-[250px] pb-10  bg-dash-bg bg-cover bg-no-repeat min-h-screen">
        <div className="mt-10 text-center stm:px-10">
          <h2 className="font-quicksand text-[44px] text-rose-700 text-center">
            Give your Feedback!
          </h2>
        </div>
        <div className="flex flex-row justify-center stm:px-5">
          <div className="flex flex-col w-[700px] stm:w-[350px] bg-rose-900/75 rounded-[5px] text-white mt-5 py-10 px-10">
            {/* Rating for Learning Platform */}
            <div className="flex flex-row items-center justify-start my-1">
              <h3>As a learning platform: </h3>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`cursor-pointer mr-1 ${
                    index < learningRating
                      ? "text-yellow-400 text-[28px] stm:text-[18px]"
                      : "text-gray-400 text-[28px] stm:text-[18px]"
                  }`}
                  onClick={() => handleRating("learning", index + 1)}
                >
                  <i className="fa-solid fa-star"></i>
                </span>
              ))}
            </div>
            {/* Rating for Our Communication */}
            <div className="flex flex-row items-center justify-start my-1">
              <h3>Our Communication: </h3>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`cursor-pointer  mr-1 ${
                    index < communicationRating
                      ? "text-yellow-400 text-[28px] stm:text-[18px]"
                      : "text-gray-400 text-[28px] stm:text-[18px]"
                  }`}
                  onClick={() => handleRating("communication", index + 1)}
                >
                  <i className="fa-solid fa-star"></i>
                </span>
              ))}
            </div>
            {/* Rating for Our Service */}
            <div className="flex flex-row items-center justify-start my-1">
              <h3>Our Service: </h3>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`cursor-pointer  mr-1 ${
                    index < serviceRating
                      ? "text-yellow-400 text-[28px] stm:text-[18px]"
                      : "text-gray-400 text-[28px] stm:text-[18px]"
                  }`}
                  onClick={() => handleRating("service", index + 1)}
                >
                  <i className="fa-solid fa-star"></i>
                </span>
              ))}
            </div>
            {/* Display Average Rating */}
            <div className="flex flex-row items-center justify-center my-1">
              <h3 className="font-Poppins text-white text-[20px] font-medium">
                Average Rating: {"("}
                {averageRating.toFixed(1)}
                {")"}
              </h3>
            </div>
            {/* Review */}
            <p className="font-roboto text-[18px] text-white mt-5">
              Give A Review:
            </p>
            <textarea
              placeholder="What do you think about us?"
              rows={5}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full border-2 border-gray-300 text-gray-600 font-quicksand text-[18px] p-3"
            />
            <div className="flex flex-row items-center justify-end w-full">
              <button onClick={handleSubmit} className={"bg-yellow-400 my-3"}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ----- Main Page contents end ----- */}
    </div>
  );
}
