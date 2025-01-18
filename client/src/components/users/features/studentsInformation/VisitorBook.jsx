import React, { useState } from "react";

const VisitorBook = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Example structure for visitor data (empty list)
  const visitors = [];

  // Filter logic for search functionality
  const filteredVisitors = visitors.filter(
    (visitor) =>
      visitor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visitor.purpose.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Visitor List</h1>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name or purpose..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Visitor List Table */}
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Purpose</th>
              <th className="border border-gray-300 px-4 py-2">Visitor Name</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">ID Card</th>
              <th className="border border-gray-300 px-4 py-2">Number Of Person</th>
              <th className="border border-gray-300 px-4 py-2">Note</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">In Time</th>
              <th className="border border-gray-300 px-4 py-2">Out Time</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredVisitors.length > 0 ? (
              filteredVisitors.map((visitor, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{visitor.purpose}</td>
                  <td className="border border-gray-300 px-4 py-2">{visitor.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{visitor.phone}</td>
                  <td className="border border-gray-300 px-4 py-2">{visitor.idCard}</td>
                  <td className="border border-gray-300 px-4 py-2">{visitor.numberOfPersons}</td>
                  <td className="border border-gray-300 px-4 py-2">{visitor.note}</td>
                  <td className="border border-gray-300 px-4 py-2">{visitor.date}</td>
                  <td className="border border-gray-300 px-4 py-2">{visitor.inTime}</td>
                  <td className="border border-gray-300 px-4 py-2">{visitor.outTime}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="text-blue-600 hover:underline">Edit</button>
                    {" | "}
                    <button className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-4">
                  No visitors logged yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisitorBook;
