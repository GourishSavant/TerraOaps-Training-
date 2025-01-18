import React, { useState } from "react";
import { FaFilePdf, FaCopy, FaFileCsv, FaColumns, FaPrint, FaFileExcel } from "react-icons/fa";

const Bookpage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  // Sample data for books (you can replace this with actual data)
  const books = [
    {
      title: "Book One",
      publisher: "Publisher One",
      author: "Author One",
      subject: "Math",
      rackNumber: "R1",
      qty: 10,
      price: "$15",
      postDate: "2024-01-10",
    },
    {
      title: "Book Two",
      publisher: "Publisher Two",
      author: "Author Two",
      subject: "Science",
      rackNumber: "R2",
      qty: 5,
      price: "$20",
      postDate: "2024-01-12",
    },
    {
      title: "Book Three",
      publisher: "Publisher Three",
      author: "Author Three",
      subject: "History",
      rackNumber: "R3",
      qty: 7,
      price: "$18",
      postDate: "2024-01-15",
    },
    // Add more books as needed
  ];

  // Filter books based on search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Book List</h2>

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
          {/* <button className="p-2 bg-gray-200 text-gray-500 rounded-r">
            <FaSearch size={18} />
          </button> */}
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

      {/* Table displaying book details */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Book Title</th>
              <th className="border px-4 py-2">Publisher</th>
              <th className="border px-4 py-2">Author</th>
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">Rack Number</th>
              <th className="border px-4 py-2">Qty</th>
              <th className="border px-4 py-2">Book Price</th>
              <th className="border px-4 py-2">Post Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{book.title}</td>
                  <td className="border px-4 py-2">{book.publisher}</td>
                  <td className="border px-4 py-2">{book.author}</td>
                  <td className="border px-4 py-2">{book.subject}</td>
                  <td className="border px-4 py-2">{book.rackNumber}</td>
                  <td className="border px-4 py-2">{book.qty}</td>
                  <td className="border px-4 py-2">{book.price}</td>
                  <td className="border px-4 py-2">{book.postDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="border px-4 py-2 text-center">
                  No books found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookpage;
