import React, { useState } from "react";
import { FaFilePdf, FaFileCsv, FaCopy, FaPrint, FaFileExcel, FaColumns } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";

const StudentHomework = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [showDailyAssignments, setShowDailyAssignments] = useState(false);

  const upcomingHomework = [
    {
      id: 1,
      class: "10",
      section: "A",
      subject: "Mathematics",
      homeworkDate: "10/01/2025",
      submissionDate: "15/01/2025",
      evaluationDate: "20/01/2025",
      maxMarks: 100,
    },
    {
      id: 2,
      class: "9",
      section: "B",
      subject: "Science",
      homeworkDate: "11/01/2025",
      submissionDate: "16/01/2025",
      evaluationDate: "21/01/2025",
      maxMarks: 50,
    },
  ];

  const dailyAssignments = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Algebra Basics",
      description: "Solve 10 equations.",
      remark: "Practice thoroughly.",
      submissionDate: "15/01/2025",
      evaluationDate: "17/01/2025",
    },
    {
      id: 2,
      subject: "Science",
      title: "Physics Chapter 5",
      description: "Read and summarize.",
      remark: "Key points required.",
      submissionDate: "16/01/2025",
      evaluationDate: "18/01/2025",
    },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableData = upcomingHomework.map((hw) => [
      hw.class,
      hw.section,
      hw.subject,
      hw.homeworkDate,
      hw.submissionDate,
      hw.evaluationDate,
      hw.maxMarks,
    ]);
    doc.text("Upcoming Homework", 14, 10);
    doc.autoTable({
      head: [["Class", "Section", "Subject", "Homework Date", "Submission Date", "Evaluation Date", "Max Marks"]],
      body: tableData,
    });
    doc.save("Homework.pdf");
  };

  const downloadCSV = () => {
    const csvData = [
      ["Class", "Section", "Subject", "Homework Date", "Submission Date", "Evaluation Date", "Max Marks"],
      ...upcomingHomework.map((hw) => [
        hw.class,
        hw.section,
        hw.subject,
        hw.homeworkDate,
        hw.submissionDate,
        hw.evaluationDate,
        hw.maxMarks,
      ]),
    ];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((row) => row.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Homework.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyData = () => {
    const textData = upcomingHomework
      .map(
        (hw) =>
          `${hw.class}, ${hw.section}, ${hw.subject}, ${hw.homeworkDate}, ${hw.submissionDate}, ${hw.evaluationDate}, ${hw.maxMarks}`
      )
      .join("\n");
    navigator.clipboard.writeText(textData);
    alert("Data copied to clipboard!");
  };

  const printData = () => {
    window.print();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Homework</h1>
          <button
            onClick={() => setShowDailyAssignments(!showDailyAssignments)}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          >
            Daily Assignment
          </button>
        </div>
        <div className="flex items-center justify-between mb-4 flex-wrap">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-64 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
        {!showDailyAssignments ? (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Class</th>
                <th className="border p-2">Section</th>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Homework Date</th>
                <th className="border p-2">Submission Date</th>
                <th className="border p-2">Evaluation Date</th>
                <th className="border p-2">Max Marks</th>
              </tr>
            </thead>
            <tbody>
              {upcomingHomework.map((hw) => (
                <tr key={hw.id}>
                  <td className="border p-2">{hw.class}</td>
                  <td className="border p-2">{hw.section}</td>
                  <td className="border p-2">{hw.subject}</td>
                  <td className="border p-2">{hw.homeworkDate}</td>
                  <td className="border p-2">{hw.submissionDate}</td>
                  <td className="border p-2">{hw.evaluationDate}</td>
                  <td className="border p-2">{hw.maxMarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Daily Assignments List Goes Here</div>
        )}
      </div>
    </div>
  );
};

export default StudentHomework;
