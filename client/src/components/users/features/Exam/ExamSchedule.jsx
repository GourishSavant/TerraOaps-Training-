import React, { useState } from "react";
import { FaFilePdf, FaFileCsv, FaCopy, FaPrint, FaFileExcel, FaColumns } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

const ExamSchedule = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const examData = [
    { id: 1, exam: "Mid-Term Exam", description: "Covers chapters 1-5 of all subjects." },
    { id: 2, exam: "Final Exam", description: "Comprehensive exam for all subjects." },
    { id: 3, exam: "Quarterly Exam", description: "Assessment for the first quarter." },
  ];

  const filteredExams = examData.filter(
    (exam) =>
      exam.exam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle PDF download
  const handlePdfDownload = () => {
    const doc = new jsPDF();
    doc.text("Exam Schedule", 10, 10);
    doc.autoTable({
      head: [["S.No.", "Exam", "Description"]],
      body: filteredExams.map((exam, index) => [index + 1, exam.exam, exam.description]),
    });
    doc.save("exam-schedule.pdf");
  };

  // Handle CSV download
  const handleCsvDownload = () => {
    const csvContent = filteredExams
      .map((exam, index) => `${index + 1},${exam.exam},${exam.description}`)
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "exam-schedule.csv";
    link.click();
  };

  // Handle copy to clipboard
  const handleCopy = () => {
    const textToCopy = filteredExams
      .map((exam, index) => `${index + 1}\t${exam.exam}\t${exam.description}`)
      .join("\n");
    navigator.clipboard.writeText(textToCopy);
    alert("Exam schedule copied to clipboard!");
  };

  // Handle print
  const handlePrint = () => {
    const printWindow = window.open("", "", "width=800,height=600");
    const content = `
      <h1>Exam Schedule</h1>
      <table border="1" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Exam</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          ${filteredExams
            .map(
              (exam, index) => `
              <tr>
                <td>${index + 1}</td>
                <td>${exam.exam}</td>
                <td>${exam.description}</td>
              </tr>`
            )
            .join("")}
        </tbody>
      </table>
    `;
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Exam Schedule</h1>
        <div className="flex justify-between items-center mb-4">
          {/* Search Bar and Action Icons */}
          <div className="flex items-center w-full">
            {/* Search Bar - Reduced Width */}
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-3/4 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Icons - Positioned on the Right Side of the Search Bar */}
            <div className="flex gap-4 ml-4">
              <button onClick={handlePdfDownload} className="text-gray-500 text-xl hover:text-gray-700" title="Download PDF">
                <FaFilePdf />
              </button>
              <button onClick={handleCsvDownload} className="text-gray-500 text-xl hover:text-gray-700" title="Download CSV">
                <FaFileCsv />
              </button>
              <button onClick={handleCopy} className="text-gray-500 text-xl hover:text-gray-700" title="Copy">
                <FaCopy />
              </button>
              <button onClick={handlePrint} className="text-gray-500 text-xl hover:text-gray-700" title="Print">
                <FaPrint />
              </button>
              <button className="text-gray-500 text-xl hover:text-gray-700" title="Column Options">
                <FaColumns />
              </button>
            </div>
          </div>
        </div>

        {/* Exam Schedule Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">S.No.</th>
              <th className="border p-2">Exam</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredExams.length > 0 ? (
              filteredExams.map((exam, index) => (
                <tr key={exam.id}>
                  <td className="border p-2 text-center">{index + 1}</td>
                  <td className="border p-2">{exam.exam}</td>
                  <td className="border p-2">{exam.description}</td>
                  <td className="border p-2 text-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border p-2 text-center text-gray-500">
                  No exams found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamSchedule;
