import React, { useState } from "react";
import { FaFilePdf, FaFileExcel, FaCopy, FaPrint, FaColumns, FaFileCsv, FaEdit, FaTrash } from "react-icons/fa";
import { jsPDF } from "jspdf"; // Import jsPDF for generating PDFs

const VisitorBook = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy visitor data
  const visitors = [
    {
      purpose: "Business Meeting",
      name: "John Doe",
      phone: "123-456-7890",
      idCard: "ID12345",
      numberOfPersons: 3,
      note: "Meeting about project plans.",
      date: "2025-01-16",
      inTime: "09:00 AM",
      outTime: "12:00 PM",
    },
    {
      purpose: "Site Visit",
      name: "Jane Smith",
      phone: "987-654-3210",
      idCard: "ID67890",
      numberOfPersons: 2,
      note: "Site inspection for construction project.",
      date: "2025-01-16",
      inTime: "10:00 AM",
      outTime: "02:00 PM",
    },
    {
      purpose: "Interview",
      name: "Alice Johnson",
      phone: "555-123-4567",
      idCard: "ID11223",
      numberOfPersons: 1,
      note: "Interview for the marketing position.",
      date: "2025-01-16",
      inTime: "11:00 AM",
      outTime: "01:00 PM",
    },
  ];

  // Filter logic for search functionality
  const filteredVisitors = visitors.filter(
    (visitor) =>
      visitor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visitor.purpose.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle PDF download
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Visitor List", 20, 20);
    doc.autoTable({
      head: [["Purpose", "Visitor Name", "Phone", "ID Card", "Number of Person", "Note", "Date", "In Time", "Out Time"]],
      body: filteredVisitors.map((visitor) => [
        visitor.purpose,
        visitor.name,
        visitor.phone,
        visitor.idCard,
        visitor.numberOfPersons,
        visitor.note,
        visitor.date,
        visitor.inTime,
        visitor.outTime,
      ]),
    });
    doc.save("visitor_list.pdf");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Visitor List</h1>

        {/* Toolbar with Search Bar and Icons */}
        <div className="flex justify-between items-center mb-4">
          {/* Search Bar */}
          <div className="w-1/3">
            <input
              type="text"
              placeholder="Search by name or purpose..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Action Icons */}
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-gray-800" onClick={downloadPDF}>
              <FaFilePdf />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <FaFileExcel />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <FaCopy />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <FaPrint />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <FaColumns />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <FaFileCsv />
            </button>
          </div>
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
                  <td className="border border-gray-300 px-4 py-2 flex space-x-2 justify-center">
                    <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800 text-xs sm:text-sm">
                      <FaTrash />
                    </button>
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
