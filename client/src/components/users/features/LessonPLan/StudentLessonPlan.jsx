import React from "react";

const StudentLessonPlan = () => {
  const data = [
    { day: "Monday", date: "01/06/2025" },
    { day: "Tuesday", date: "01/07/2025" },
    { day: "Wednesday", date: "01/08/2025" },
    { day: "Thursday", date: "01/09/2025" },
    { day: "Friday", date: "01/10/2025" },
    { day: "Saturday", date: "01/11/2025" },
    { day: "Sunday", date: "01/12/2025" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Lesson Plan</h1>
        <p className="text-center text-gray-600 mb-8">01/06/2025 To 01/12/2025</p>

        {/* Days Row */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          {data.map((item) => (
            <div key={item.day} className="text-lg font-semibold text-gray-700">
              {item.day}
            </div>
          ))}
        </div>

        {/* Dates Column */}
        <div className="flex justify-between items-start">
          {data.map((item) => (
            <div
              key={item.date}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <span className="text-gray-800 text-base font-semibold">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentLessonPlan;
