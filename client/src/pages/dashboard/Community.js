import React, { useState, useRef, useEffect } from "react";
import DashboardNavbar from "../../components/DashboardNavbar";
import Sidebar from "../../components/Sidebar";

export default function Community({ onLogout }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [replyToMessageIndex, setReplyToMessageIndex] = useState(null);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyMessages, setReplyMessages] = useState([]);

  const replyInputRef = useRef(null);

  const handleMessageSend = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]); // Append new message to the end
      setNewMessage("");
    }
  };
  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);

    const updatedReplyMessages = [...replyMessages];
    updatedReplyMessages.splice(index, 1);

    setMessages(updatedMessages);
    setReplyMessages(updatedReplyMessages);

    setShowReplyInput(false);
  };
  const handleReplyMessage = () => {
    // If replying to a message, add the reply message to replyMessages array
    const updatedReplyMessages = [...replyMessages];
    updatedReplyMessages[replyToMessageIndex] = [
      ...(updatedReplyMessages[replyToMessageIndex] || []),
      replyMessage,
    ];
    setReplyMessages(updatedReplyMessages);
    setReplyToMessageIndex(null);
    setShowReplyInput(false);
    setReplyMessage("");
  };

  useEffect(() => {
    if (!showReplyInput) {
      setReplyToMessageIndex(null);
      setReplyMessage("");
    }
  }, [showReplyInput]);

  return (
    <div>
      {/* ---- Main Page contents Start----- */}
      <div className="pt-16 lg:ml-[250px] bg-dash-bg bg-cover bg-no-repeat min-h-screen">
        <div className="text-black mt-20 text-center">
          <h2 className="">Community Forum</h2>
        </div>
        <div className="px-10 py-10 stm:px-3 lsm:px-1 bg-white/75 mt-5 mb-5 mx-44 stm:mx-5 lsm:mx-1">
          <div className="my-8">
            {messages.map((message, index) => (
              <div key={index} className="relative">
                <div className="rounded-tr-[15px] rounded-br-[15px] rounded-bl-[15px] p-2 py-5 bg-rose-600 mr-32 text-white font-quicksand my-5 z-30">
                  {/* Parent Message */}
                  {message}
                  <div className="absolute bottom-0 right-28 bg-white/75 rounded-[50px] px-4 py-2 text-black flex flex-col">
                    <div className="flex flex-row justify-between items-center mb-2">
                      <div
                        onClick={() => handleDeleteMessage(index)}
                        className="mr-2"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </div>
                      <div
                        onClick={() => {
                          setShowReplyInput((prevOpen) => !prevOpen);
                          setReplyToMessageIndex(index);
                        }}
                        className="ml-2"
                      >
                        <i className="fa-regular fa-comment-dots"></i>
                      </div>
                    </div>
                  </div>
                  {/* Displaying reply messages */}
                  {replyMessages[index] && (
                    <div className="p-2 bg-gray-200 ml-8 absolute top-10 bottom-0 left-64 w-96 rounded-tl-[15px] rounded-br-[15px] rounded-bl-[15px] py-5 flex flex-row items-center mb-5">
                      <div className="text-gray-700">
                        {replyMessages[index].map((reply, replyIndex) => (
                          <div key={replyIndex}>{reply}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* ---- Reply Message Start --- */}
                {showReplyInput && replyToMessageIndex === index && (
                  <div className="mt-2 absolute w-[450px] bg-white top-10 right-0 p-4 rounded-lg z-50">
                    <input
                      ref={replyInputRef}
                      type="text"
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      placeholder="Type your reply..."
                      className="border rounded p-2 w-full"
                    />
                    <button
                      onClick={handleReplyMessage}
                      className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Send
                    </button>
                  </div>
                )}
                {/* ---- Reply Message End --- */}
              </div>
            ))}
          </div>
          {/* --- Sending Message Start --- */}
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="border rounded p-2 w-full"
          />
          <button
            onClick={handleMessageSend}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Send
          </button>
          {/* --- Sending Message End --- */}
        </div>
      </div>
      {/* ----- Main Page contents end ----- */}
    </div>
  );
}
