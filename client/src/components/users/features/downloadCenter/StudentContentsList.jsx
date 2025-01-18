import React, { useState } from "react";
import { FaFilePdf, FaFileExcel, FaCopy, FaPrint, FaFileCsv, FaColumns } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

const StudentContentList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSize, setSelectedSize] = useState("All");

  const contentData = [
    { id: 1, title: "Math Assignment", shareDate: "01/10/2025", validUpto: "01/15/2025", sharedBy: "Teacher A" },
    { id: 2, title: "Science Quiz", shareDate: "01/12/2025", validUpto: "01/20/2025", sharedBy: "Teacher B" },
    { id: 3, title: "History Notes", shareDate: "01/14/2025", validUpto: "01/25/2025", sharedBy: "Teacher C" },
  ];

  const filteredData = contentData.filter(
    (data) =>
      (data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.sharedBy.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedSize === "All" || data.sharedBy === selectedSize) // Filter based on size selection
  );

  const handlePdfDownload = () => {
    const doc = new jsPDF();
    doc.text("Content List", 10, 10);
    doc.autoTable({
      head: [["Title", "Share Date", "Valid Upto", "Shared By"]],
      body: filteredData.map((data) => [data.title, data.shareDate, data.validUpto, data.sharedBy]),
    });
    doc.save("content-list.pdf");
  };

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Content List");
    XLSX.writeFile(workbook, "content-list.xlsx");
  };

  const handleCsvDownload = () => {
    const csvContent = filteredData
      .map((data) => `${data.title},${data.shareDate},${data.validUpto},${data.sharedBy}`)
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "content-list.csv";
    link.click();
  };

  const handleCopy = () => {
    const textToCopy = filteredData
      .map((data) => `${data.title}\t${data.shareDate}\t${data.validUpto}\t${data.sharedBy}`)
      .join("\n");
    navigator.clipboard.writeText(textToCopy);
    alert("Content copied to clipboard!");
  };

  const handlePrint = () => {
    const printWindow = window.open("", "", "width=800,height=600");
    const content = `
      <h1>Content List</h1>
      <table border="1" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th>Title</th>
            <th>Share Date</th>
            <th>Valid Upto</th>
            <th>Shared By</th>
          </tr>
        </thead>
        <tbody>
          ${filteredData
            .map(
              (data) => `
              <tr>
                <td>${data.title}</td>
                <td>${data.shareDate}</td>
                <td>${data.validUpto}</td>
                <td>${data.sharedBy}</td>
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
        <h1 className="text-3xl font-bold mb-4">Content List</h1>
        <div className="flex justify-between items-center mb-4">
          {/* Search Bar and Size Dropdown */}
          <div className="flex items-center space-x-4 w-1/2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-3/4 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="px-2 py-1 border rounded shadow-sm w-14 mr-60" 
            >
              <option value="All">All</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          {/* Action Icons */}
          <div className="flex gap-4">
            <button onClick={handlePdfDownload} className="text-gray-500 text-xl hover:text-gray-700" title="Download PDF">
              <FaFilePdf />
            </button>
            <button onClick={handleExcelDownload} className="text-gray-500 text-xl hover:text-gray-700" title="Download Excel">
              <FaFileExcel />
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

        {/* Table with Content Data */}
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Share Date</th>
              <th className="border p-2">Valid Upto</th>
              <th className="border p-2">Shared By</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data) => (
              <tr key={data.id}>
                <td className="border p-2">{data.title}</td>
                <td className="border p-2">{data.shareDate}</td>
                <td className="border p-2">{data.validUpto}</td>
                <td className="border p-2">{data.sharedBy}</td>
                <td className="border p-2">
                  <button className="text-blue-500">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentContentList;
