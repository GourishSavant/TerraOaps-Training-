import React from "react";
import { FaPrint } from "react-icons/fa";

const StudentClassTimetable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const schedule = {
    Monday: "✗ Not Scheduled",
    Tuesday: "✗ Not Scheduled",
    Wednesday: "✗ Not Scheduled",
    Thursday: "✗ Not Scheduled",
    Friday: "✗ Not Scheduled",
    Saturday: "✗ Not Scheduled",
    Sunday: "✗ Not Scheduled",
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-6 relative">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Class Timetable</h1>
        {/* Print Icon */}
        <button
          onClick={handlePrint}
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 transition"
        >
          <FaPrint size={24} />
        </button>
        <table className="w-full">
          <thead>
            <tr>
              {days.map((day) => (
                <th
                  key={day}
                  className="px-4 py-2 text-left text-gray-800 font-medium"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {days.map((day) => (
                <td
                  key={day}
                  className="px-4 py-2 text-center text-red-600 font-semibold"
                >
                  {schedule[day]}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentClassTimetable;
