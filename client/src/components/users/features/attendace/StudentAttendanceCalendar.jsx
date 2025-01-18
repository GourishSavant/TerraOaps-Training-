import React from "react";

// Utility function to get the days of a month
const getMonthDays = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const StudentAttendanceCalendar = ({ year }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderCalendar = (year, month) => {
    const days = getMonthDays(year, month);
    const firstDay = days[0].getDay(); // Day of the week for the first day
    const totalDays = days.length;

    const weeks = [];
    let week = new Array(firstDay).fill(null); // Start the first week with empty days for offset

    days.forEach((day, index) => {
      week.push(day);
      if ((index + firstDay + 1) % 7 === 0 || index === totalDays - 1) {
        weeks.push(week);
        week = [];
      }
    });

    return (
      <table className="border-collapse w-full mb-6 text-center">
        <thead>
          <tr>
            <th className="border p-2">Mon</th>
            <th className="border p-2">Tue</th>
            <th className="border p-2">Wed</th>
            <th className="border p-2">Thu</th>
            <th className="border p-2">Fri</th>
            <th className="border p-2">Sat</th>
            <th className="border p-2">Sun</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, idx) => (
            <tr key={idx}>
              {week.map((day, index) => (
                <td
                  key={index}
                  className={`border p-2 ${
                    day ? "bg-gray-50" : "bg-gray-200"
                  }`}
                >
                  {day ? day.getDate() : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Attendance Calendar</h1>
        {months.map((month, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold mb-4">{`${month} ${year}`}</h2>
            {renderCalendar(year, index)}
          </div>
        ))}
      </div>
    </div>
  );
};




export default StudentAttendanceCalendar;
