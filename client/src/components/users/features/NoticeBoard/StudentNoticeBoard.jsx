import React, { useState } from "react";
import { FaEnvelope, FaArrowLeft, FaTimes } from "react-icons/fa";

const StudentNoticeBoard = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);

  const notices = [
    {
      id: 1,
      title: "Notice 1",
      description: "This is the description for Notice 1.",
      publishDate: "12/04/2024",
      noticeDate: "12/06/2024",
      createdBy: "Super Admin (9000)",
    },
    {
      id: 2,
      title: "Notice 2",
      description: "This is the description for Notice 2.",
      publishDate: "13/04/2024",
      noticeDate: "13/06/2024",
      createdBy: "Super Admin (9000)",
    },
  ];

  const handleEmailClick = (description) => {
    console.log(description); // Print the notice description to the console
    alert(`Email content: ${description}`); // Display an alert with the description
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        {selectedNotice ? (
          <div>
            {/* Selected Notice Details */}
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setSelectedNotice(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaArrowLeft className="text-xl" />
              </button>
              <button
                onClick={() => setSelectedNotice(null)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-2">{selectedNotice.title}</h2>
            <p className="text-gray-700 mb-4">{selectedNotice.description}</p>
            <div className="text-gray-600 text-sm">
              <p>Publish Date: {selectedNotice.publishDate}</p>
              <p>Notice Date: {selectedNotice.noticeDate}</p>
              <p>Created By: {selectedNotice.createdBy}</p>
            </div>
          </div>
        ) : (
          <div>
            {/* Notice List */}
            <h1 className="text-3xl font-bold mb-6">Notice Board</h1>
            <ul className="space-y-4">
              {notices.map((notice) => (
                <li
                  key={notice.id}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <div>
                    <h3 className="text-lg font-bold">{notice.title}</h3>
                    <p className="text-gray-500 text-sm">{notice.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleEmailClick(notice.description)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEnvelope className="text-xl" />
                    </button>
                    <button
                      onClick={() => setSelectedNotice(notice)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      View
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentNoticeBoard;
