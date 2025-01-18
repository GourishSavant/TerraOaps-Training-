import React, { useState } from "react";
import { FaFilePdf, FaFileCsv, FaCopy, FaPrint, FaFileExcel, FaColumns } from "react-icons/fa"; // FontAwesome icons

const ApplyLeave = () => {
  const [search, setSearch] = useState("");
  const [isAddFormVisible, setIsAddFormVisible] = useState(false); // Toggle for the form
  const [newLeave, setNewLeave] = useState({
    applyDate: "",
    fromDate: "",
    toDate: "",
    reason: "",
    document: null,
  });

  const leaveList = [
    {
      class: "8",
      section: "A",
      applyDate: "01/01/2025",
      fromDate: "01/02/2025",
      toDate: "01/04/2025",
      reason: "Medical Leave",
      status: "Pending",
    },
    {
      class: "7",
      section: "B",
      applyDate: "02/01/2025",
      fromDate: "02/02/2025",
      toDate: "02/04/2025",
      reason: "Family Function",
      status: "Approved",
    },
    {
      class: "8",
      section: "C",
      applyDate: "03/01/2025",
      fromDate: "03/02/2025",
      toDate: "03/04/2025",
      reason: "Personal",
      status: "Rejected",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLeave({ ...newLeave, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewLeave({ ...newLeave, document: e.target.files[0] });
  };

  const handleAddLeave = () => {
    alert("Leave added successfully!");
    setIsAddFormVisible(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Apply Leave</h1>
          <button
            onClick={() => setIsAddFormVisible(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            +Add
          </button>
        </div>

        {isAddFormVisible ? (
          // Add Leave Form
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Leave</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Apply Date *</label>
                <input
                  type="date"
                  name="applyDate"
                  value={newLeave.applyDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">From Date *</label>
                <input
                  type="date"
                  name="fromDate"
                  value={newLeave.fromDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">To Date *</label>
                <input
                  type="date"
                  name="toDate"
                  value={newLeave.toDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Reason</label>
                <textarea
                  name="reason"
                  value={newLeave.reason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Attach Document</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full text-gray-500 border border-gray-300 rounded-lg cursor-pointer"
                />
                <span className="text-sm text-gray-600">
                  Drag and drop a file here or click to upload.
                </span>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsAddFormVisible(false)}
                  className="px-4 py-2 mr-2 bg-gray-300 text-gray-800 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddLeave}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        ) : (
          // Table View
          <>
            {/* Toolbar with Search Bar on Left and Icons on Right */}
            <div className="flex justify-between items-center mb-4">
              {/* Search Bar on Left */}
              <div className="w-2/3">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Icons on Right */}
              <div className="flex space-x-4 ml-4">
                <button className="text-gray-600 hover:text-blue-800">
                  <FaFilePdf className="text-xl" />
                </button>
                <button className="text-gray-600 hover:text-blue-800">
                  <FaFileCsv className="text-xl" />
                </button>
                <button className="text-gray-600 hover:text-blue-800">
                  <FaCopy className="text-xl" />
                </button>
                <button className="text-gray-600 hover:text-blue-800">
                  <FaPrint className="text-xl" />
                </button>
                <button className="text-gray-600 hover:text-blue-800">
                  <FaFileExcel className="text-xl" />
                </button>
                <button className="text-gray-600 hover:text-blue-800">
                  <FaColumns className="text-xl" />
                </button>
              </div>
            </div>

            {/* Leave List Table */}
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">Class</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Section</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Apply Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">From Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">To Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Reason</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {leaveList.length > 0 ? (
                  leaveList.map((leave, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{leave.class}</td>
                      <td className="border border-gray-300 px-4 py-2">{leave.section}</td>
                      <td className="border border-gray-300 px-4 py-2">{leave.applyDate}</td>
                      <td className="border border-gray-300 px-4 py-2">{leave.fromDate}</td>
                      <td className="border border-gray-300 px-4 py-2">{leave.toDate}</td>
                      <td className="border border-gray-300 px-4 py-2">{leave.reason}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span
                          className={`px-2 py-1 rounded-full ${
                            leave.status === "Approved"
                              ? "bg-green-200 text-green-800"
                              : leave.status === "Pending"
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-red-200 text-red-800"
                          }`}
                        >
                          {leave.status}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button className="text-blue-600 hover:text-blue-800">View</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-4">
                      No matching records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default ApplyLeave;
