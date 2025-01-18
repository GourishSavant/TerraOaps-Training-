import React, { useState } from "react";
import {
  FaFilePdf,
  FaCopy,
  FaFileCsv,
  FaColumns,
  FaPrint,
  FaFileExcel,
} from "react-icons/fa";

const BookIssued = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-6">Book Issued</h2>

      {/* Search Bar and Icons */}
      <div className="flex justify-between items-center mb-4">
        {/* Search Bar on Left */}
        <div className="flex items-center w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Icons on Right */}
        <div className="flex gap-4">
          <button className="text-gray-500 hover:text-gray-700">
            <FaFilePdf size={18} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <FaCopy size={18} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <FaFileCsv size={18} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <FaColumns size={18} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <FaPrint size={18} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <FaFileExcel size={18} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">Book Title</th>
              <th className="p-3 border-b">Book Number</th>
              <th className="p-3 border-b">Author</th>
              <th className="p-3 border-b">Issue Date</th>
              <th className="p-3 border-b">Due Return Date</th>
              <th className="p-3 border-b">Return Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder Rows */}
            <tr>
              <td className="p-3 border-b">The Great Gatsby</td>
              <td className="p-3 border-b">B001</td>
              <td className="p-3 border-b">F. Scott Fitzgerald</td>
              <td className="p-3 border-b">01/10/2025</td>
              <td className="p-3 border-b">15/10/2025</td>
              <td className="p-3 border-b">-</td>
            </tr>
            <tr>
              <td className="p-3 border-b">1984</td>
              <td className="p-3 border-b">B002</td>
              <td className="p-3 border-b">George Orwell</td>
              <td className="p-3 border-b">05/10/2025</td>
              <td className="p-3 border-b">20/10/2025</td>
              <td className="p-3 border-b">18/10/2025</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookIssued;
