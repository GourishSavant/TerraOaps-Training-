import React, { useState } from "react";
import { FaFilePdf, FaFileCsv, FaCopy, FaPrint, FaFileExcel, FaColumns } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";

const StudentOnlineExam = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const exams = [
    {
      id: 1,
      name: "Mathematics Quiz",
      dateFrom: "2025-01-15",
      dateTo: "2025-01-20",
      duration: "30 mins",
      totalAttempt: 200,
      attempted: 150,
      status: "Upcoming",
    },
    {
      id: 2,
      name: "Science Quiz",
      dateFrom: "2025-01-10",
      dateTo: "2025-01-12",
      duration: "45 mins",
      totalAttempt: 180,
      attempted: 160,
      status: "Closed",
    },
  ];

  const filteredExams = exams.filter(
    (exam) =>
      exam.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeTab === "All" || exam.status === activeTab)
  );

  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableData = filteredExams.map((exam) => [
      exam.name,
      "Quiz",
      exam.dateFrom,
      exam.dateTo,
      exam.duration,
      exam.totalAttempt,
      exam.attempted,
      exam.status,
    ]);
    doc.text("Exams List", 14, 10);
    doc.autoTable({
      head: [
        ["Exam", "Quiz", "Date From", "Date To", "Duration", "Total Attempt", "Attempted", "Status"],
      ],
      body: tableData,
    });
    doc.save("Exams.pdf");
  };

  const downloadCSV = () => {
    const csvData = [
      ["Exam", "Quiz", "Date From", "Date To", "Duration", "Total Attempt", "Attempted", "Status"],
      ...filteredExams.map((exam) => [
        exam.name,
        "Quiz",
        exam.dateFrom,
        exam.dateTo,
        exam.duration,
        exam.totalAttempt,
        exam.attempted,
        exam.status,
      ]),
    ];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((row) => row.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Exams.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyData = () => {
    const textData = filteredExams
      .map(
        (exam) =>
          `${exam.name}, Quiz, ${exam.dateFrom}, ${exam.dateTo}, ${exam.duration}, ${exam.totalAttempt}, ${exam.attempted}, ${exam.status}`
      )
      .join("\n");
    navigator.clipboard.writeText(textData);
    alert("Data copied to clipboard!");
  };

  const printData = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Online Exam</h1>

        {/* Tabs */}
        <div className="flex mb-6">
          <button
            onClick={() => setActiveTab("Upcoming")}
            className={`px-4 py-2 rounded-l-lg ${
              activeTab === "Upcoming" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-600"
            }`}
          >
            Upcoming Exams
          </button>
          <button
            onClick={() => setActiveTab("Closed")}
            className={`px-4 py-2 rounded-r-lg ${
              activeTab === "Closed" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-600"
            }`}
          >
            Closed Exams
          </button>
        </div>

        {/* Search and Icons */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center w-3/4">
            <input
              type="text"
              placeholder="Search by exam name or status..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-lg"
            />
            <select
              id="rows-per-page"
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="px-2 py-2 border border-gray-300 ml-80 bg-white rounded-r-lg"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div className="flex gap-2 text-gray-600">
            <FaFilePdf
              className="text-xl cursor-pointer hover:text-red-600"
              title="Export to PDF"
              onClick={downloadPDF}
            />
            <FaFileCsv
              className="text-xl cursor-pointer hover:text-green-600"
              title="Export to CSV"
              onClick={downloadCSV}
            />
            <FaCopy
              className="text-xl cursor-pointer hover:text-blue-600"
              title="Copy"
              onClick={copyData}
            />
            <FaPrint
              className="text-xl cursor-pointer hover:text-gray-800"
              title="Print"
              onClick={printData}
            />
            <FaFileExcel
              className="text-xl cursor-pointer hover:text-green-500"
              title="Export to Excel"
              onClick={() => alert("Excel export functionality coming soon!")}
            />
            <FaColumns
              className="text-xl cursor-pointer hover:text-gray-700"
              title="Column Settings"
              onClick={() => alert("Column settings functionality coming soon!")}
            />
          </div>
        </div>

        {/* Table */}
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Exam</th>
              <th className="border border-gray-300 px-4 py-2">Quiz</th>
              <th className="border border-gray-300 px-4 py-2">Date From</th>
              <th className="border border-gray-300 px-4 py-2">Date To</th>
              <th className="border border-gray-300 px-4 py-2">Duration</th>
              <th className="border border-gray-300 px-4 py-2">Total Attempt</th>
              <th className="border border-gray-300 px-4 py-2">Attempted</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredExams.length > 0 ? (
              filteredExams.slice(0, rowsPerPage).map((exam) => (
                <tr key={exam.id}>
                  <td className="border border-gray-300 px-4 py-2">{exam.name}</td>
                  <td className="border border-gray-300 px-4 py-2">Quiz</td>
                  <td className="border border-gray-300 px-4 py-2">{exam.dateFrom}</td>
                  <td className="border border-gray-300 px-4 py-2">{exam.dateTo}</td>
                  <td className="border border-gray-300 px-4 py-2">{exam.duration}</td>
                  <td className="border border-gray-300 px-4 py-2">{exam.totalAttempt}</td>
                  <td className="border border-gray-300 px-4 py-2">{exam.attempted}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        exam.status === "Upcoming" ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {exam.status}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="text-blue-600 hover:underline">View</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No exams available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentOnlineExam;
