
// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faList, faThList } from "@fortawesome/free-solid-svg-icons";

// const AdminStudentDetails = () => {
//   const [studentsData, setStudentsData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [classOption, setClassOption] = useState("");
//   const [sectionOption, setSectionOption] = useState("");
//   const [keyword, setKeyword] = useState("");
//   const [viewType, setViewType] = useState("list");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 2;

//   // Fetch data on component mount
//   useEffect(() => {
//     fetch("../admin/studentsdetails.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setStudentsData(data);
//         setFilteredData(data);
//       })
//       .catch((error) => console.error("Error loading data:", error));
//   }, []);

//   const handleSearch = () => {
//     let filtered = [...studentsData];

//     if (classOption) {
//       filtered = filtered.filter((student) => student.class === classOption);
//     }

//     if (sectionOption) {
//       filtered = filtered.filter((student) => student.section === sectionOption);
//     }

//     if (keyword) {
//       filtered = filtered.filter(
//         (student) =>
//           student.studentName.toLowerCase().includes(keyword.toLowerCase()) ||
//           student.rollNo.includes(keyword)
//       );
//     }

//     setFilteredData(filtered);
//     setCurrentPage(1);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   return (
//     <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
//       <div className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-md">
//         {/* Header */}
//         <h2 className="text-xl font-semibold mb-4 dark:text-white">Select Criteria</h2>

//         {/* Form Section */}
//         <div className="grid grid-cols-3 gap-4 items-start mb-4">
//           {/* Class Select */}
//           <div>
//             <label className="block text-gray-700 dark:text-white mb-1">
//               Class <span className="text-red-500">*</span>
//             </label>
//             <select
//               value={classOption}
//               onChange={(e) => setClassOption(e.target.value)}
//               className="border rounded-md w-full p-2 dark:bg-gray-800 dark:text-white"
//             >
//               <option value="">Select</option>
//               <option value="Class 1">Class 1</option>
//               <option value="Class 2">Class 2</option>
//             </select>
//           </div>

//           {/* Section Select */}
//           <div>
//             <label className="block text-gray-700 dark:text-white mb-1">Section</label>
//             <select
//               value={sectionOption}
//               onChange={(e) => setSectionOption(e.target.value)}
//               className="border rounded-md w-full p-2 dark:bg-gray-800 dark:text-white"
//             >
//               <option value="">Select</option>
//               <option value="A">A</option>
//               <option value="B">B</option>
//             </select>

//             {/* Search Button Below Section Filter */}
//             <div className="flex justify-end mt-2">
//               <button
//                 onClick={handleSearch}
//                 className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700"
//               >
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Search By Keyword */}
//           <div>
//             <label className="block text-gray-700 dark:text-white mb-1">Search By Keyword</label>
//             <input
//               type="text"
//               placeholder="Search By Student Name, Roll Number, ..."
//               value={keyword}
//               onChange={(e) => setKeyword(e.target.value)}
//               className="border rounded-md w-full p-2 dark:bg-gray-800 dark:text-white"
//             />

        //     {/* Search Button Below Search By Keyword */}
        //     <div className="flex justify-end mt-2">
        //       <button
        //         onClick={handleSearch}
        //         className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700"
        //       >
        //         Search
        //       </button>
        //     </div>
        //   </div>
        // </div>

//         {/* Tabs with Font Awesome Icons */}
//         <div className="flex space-x-4 mt-4">
//           <button
//             className={`px-4 py-2 flex items-center ${
//               viewType === "list"
//                 ? "border-b-2 border-orange-500 text-orange-500"
//                 : "text-gray-600 dark:text-white"
//             }`}
//             onClick={() => setViewType("list")}
//           >
//             <FontAwesomeIcon icon={faList} className="mr-2" /> List View
//           </button>
//           <button
//             className={`px-4 py-2 flex items-center ${
//               viewType === "details"
//                 ? "border-b-2 border-orange-500 text-orange-500"
//                 : "text-gray-600 dark:text-white"
//             }`}
//             onClick={() => setViewType("details")}
//           >
//             <FontAwesomeIcon icon={faThList} className="mr-2" /> Details View
//           </button>
//         </div>

//         {/* Conditional Display */}
//         <div className="mt-4">
//           {viewType === "list" ? (
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse border dark:bg-gray-800">
//                 <thead>
//                   <tr className="bg-gray-200 dark:bg-gray-800 dark:text-white">
//                     <th className="border p-2">Admission No</th>
//                     <th className="border p-2">Student Name</th>
//                     <th className="border p-2">Roll No.</th>
//                     <th className="border p-2">Class</th>
//                     <th className="border p-2">Father Name</th>
//                     <th className="border p-2">Date Of Birth</th>
//                     <th className="border p-2">Gender</th>
//                     <th className="border p-2">Category</th>
//                     <th className="border p-2">Mobile Number</th>
//                     <th className="border p-2">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentItems.length > 0 ? (
//                     currentItems.map((student) => (
//                       <tr key={student.admissionNo} className="dark:bg-gray-800 dark:text-white">
//                         <td className="border p-2">{student.admissionNo}</td>
//                         <td className="border p-2">{student.studentName}</td>
//                         <td className="border p-2">{student.rollNo}</td>
//                         <td className="border p-2">{student.class}</td>
//                         <td className="border p-2">{student.fatherName}</td>
//                         <td className="border p-2">{student.dob}</td>
//                         <td className="border p-2">{student.gender}</td>
//                         <td className="border p-2">{student.category}</td>
//                         <td className="border p-2">{student.mobileNumber}</td>
//                         <td className="border p-2">
//                           <div className="flex space-x-2">
//                             <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600">
//                               Edit
//                             </button>
//                             <button className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600">
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="10" className="text-center p-4 text-red-500 dark:text-white">
//                         No data available in table
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {currentItems.length > 0 ? (
//                 currentItems.map((student) => (
//                   <div
//                     key={student.admissionNo}
//                     className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 border"
//                   >
//                     <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
//                       {student.studentName}
//                     </h3>
//                     <div className="text-sm text-gray-600 dark:text-white space-y-2">
//                       {/* Details */}
//                       <p><strong>Admission No:</strong> {student.admissionNo}</p>
//                       <p><strong>Roll No:</strong> {student.rollNo}</p>
//                       <p><strong>Class:</strong> {student.class}</p>
//                       <p><strong>Father Name:</strong> {student.fatherName}</p>
//                       <p><strong>Date Of Birth:</strong> {student.dob}</p>
//                       <p><strong>Gender:</strong> {student.gender}</p>
//                       <p><strong>Mobile Number:</strong> {student.mobileNumber}</p>
//                     </div>
//                     <div className="flex space-x-2 mt-4">
//                       <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
//                         Edit
//                       </button>
//                       <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-center text-red-500">No data available</p>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-between items-center mt-4">
//           <div className="text-gray-600 dark:text-white">
//             {`Records: ${indexOfFirstItem + 1} to ${Math.min(
//               indexOfLastItem,
//               filteredData.length
//             )} of ${filteredData.length}`}
//           </div>
//           <div className="flex items-center">
//             <button
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, ))}
//               disabled={currentPage === 1}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
//             >
//               &lt;
//             </button>
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`px-4 py-2 rounded-md ${
//                   currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button
//               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
//             >
//               &gt;
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminStudentDetails;


import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faThList } from "@fortawesome/free-solid-svg-icons";
import { faEdit, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FaFilePdf, FaFileCsv, FaFileExcel, FaFileWord, FaCopy ,FaColumns } from "react-icons/fa";


const AdminStudentDetails = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [classOption, setClassOption] = useState("");
  const [sectionOption, setSectionOption] = useState("");
  const [keyword, setKeyword] = useState("");
  const [viewType, setViewType] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [additionalKeyword, setAdditionalKeyword] = useState(""); // New state for additional search box
  
  const itemsPerPage = 2;
  const navigate = useNavigate();
  // Fetch data on component mount
  useEffect(() => {
    fetch("/admin/studentdetails.json")
      .then((response) => response.json())
      .then((data) => {
        setStudentsData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);
  // State for Column Visibility
    const [visibleColumns, setVisibleColumns] = useState({
      admissionNo: true,
      studentName: true,
      class: true,
      fatherName: true,
      disableReason: true,
      gender: true,
      category: true,
      mobileNumber: true,
    });

  const handleSearch = () => {
    let filtered = [...studentsData];

    if (classOption) {
      filtered = filtered.filter((student) => student.class === classOption);
    }

    if (sectionOption) {
      filtered = filtered.filter((student) => student.section === sectionOption);
    }

    if (keyword) {
      filtered = filtered.filter(
        (student) =>
          student.studentName.toLowerCase().includes(keyword.toLowerCase()) ||
          student.rollNo.includes(keyword)
      );
    }

    console.log("Filters applied:", { classOption, sectionOption, keyword });
    console.log("Filtered data:", filtered);

    setFilteredData(filtered);
    setCurrentPage(1);
  };
  
  // Modal state to control column visibility form
    const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
    // Handle Column Visibility Toggle
    const handleColumnVisibilityToggle = (column) => {
      setVisibleColumns((prevState) => ({
        ...prevState,
        [column]: !prevState[column],
      }));
    };
  // Function to handle download icons (placeholder functions)
  const downloadPdf = () => {
    console.log("Download PDF");
  };
  const downloadCsv = () => {
    console.log("Download CSV");
  };
  const downloadExcel = () => {
    console.log("Download Excel");
  };
  const downloadWord = () => {
    console.log("Download Word");
  };
  const copyToClipboard = () => {
    console.log("Copied to clipboard");
  };
  const downloadColumns = () => {
    console.log("Download Column");
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
      <div className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Select Criteria</h2>

        <div className="grid grid-cols-3 gap-4 items-start mb-4">
          <div>
            <label className="block text-gray-700 dark:text-white block font-medium  mb-1">
              Class <span className="text-red-500">*</span>
            </label>
            <select
              value={classOption}
              onChange={(e) => setClassOption(e.target.value)}
              className="border rounded-md w-full p-2 dark:bg-gray-800 dark:text-white"
            >
              <option value="">Select</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-white  block font-medium mb-1">Section</label>
            <select
              value={sectionOption}
              onChange={(e) => setSectionOption(e.target.value)}
              className="border rounded-md w-full p-2 dark:bg-gray-800 dark:text-white"
            >
              <option value="">Select</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
            <div className="flex justify-end mt-1">
            <button
              onClick={handleSearch}
              className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700"
            >
              Search
            </button>
          </div>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-white block font-medium mb-1">Search By Keyword</label>
            <input
              type="text"
              placeholder="Search By Student Name, Roll Number, ..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="border rounded-md w-full p-2 dark:bg-gray-800 dark:text-white"
            />
          

          <div className="flex justify-end mt-1">
            <button
              onClick={handleSearch}
              className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700"
            >
              Search
            </button>
          </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-4">
          <button
            className={`px-4 py-2 flex items-center  block font-medium  ${
              viewType === "list"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-600 dark:text-white"
            }`}
            onClick={() => setViewType("list")}
          >
            <FontAwesomeIcon icon={faList} className="mr-2" /> List View
          </button>
          <button
            className={`px-4 py-2 flex items-center block font-medium ${
              viewType === "details"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-600 dark:text-white"
            }`}
            onClick={() => setViewType("details")}
          >
            <FontAwesomeIcon icon={faThList} className="mr-2" /> Details View
          </button>
        </div>
         {viewType === "list" && (
                  <div className="mt-4 block font-medium">
                    <input
                      type="text"
                      placeholder="Search again by Student Name, Roll Number..."
                      value={additionalKeyword}
                      onChange={(e) => setAdditionalKeyword(e.target.value)}
                      className="border rounded-md  p-2 dark:bg-gray-800 dark:text-white"
                    />
        {/* Icons aligned to the right */}
        <div className="flex justify-end space-x-1 block font-medium">
                  <button onClick={downloadPdf} className="text-red-600 hover:text-red-800">
                    <FaFilePdf size={24} />
                  </button>
                  <button onClick={downloadCsv} className="text-green-600 hover:text-green-800">
                    <FaFileCsv size={24} />
                  </button>
                  <button onClick={downloadExcel} className="text-blue-600 hover:text-blue-800">
                    <FaFileExcel size={24} />
                  </button>
                  <button onClick={downloadWord} className="text-purple-600 hover:text-purple-800">
                    <FaFileWord size={24} />
                  </button>
                  <button onClick={copyToClipboard} className="text-gray-600 hover:text-gray-800">
                    <FaCopy size={24} />
                  </button>
                {/* Column Visibility Button */}
                <div className="flex justify-end space-x-1">
                  <button
                    onClick={() => setIsColumnModalOpen(!isColumnModalOpen)}
                    className="text-gray-600 hover:text-gray-800 dark:text-white"
                  >
                    <FaColumns size={24} />
                  </button>
                </div>
        
                {/* Modal for Column Visibility */}
                {isColumnModalOpen && (
                  <div className="absolute top-20 right-10 bg-white dark:bg-gray-800 shadow-md p-4 rounded-md w-64">
                    <h3 className="text-lg font-semibold dark:text-white">Select Columns</h3>
                    <div className="flex flex-col space-y-2 mt-2">
                      {Object.keys(visibleColumns).map((column) => (
                        <div key={column} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={visibleColumns[column]}
                            onChange={() => handleColumnVisibilityToggle(column)}
                            className="mr-2"
                          />
                          <label className="dark:text-white">{column.replace(/([A-Z])/g, ' $1')}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
        
                </div>
                  
                  </div>
                  
                )}

        <div className="mt-4">
          {viewType === "list" ? (
            <div className="overflow-x-auto  dark:bg-gray-800 dark:text-white">
              <table className="w-full border-collapse border dark:bg-gray-800">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-800 dark:text-white">
                    <th className="border p-2">Admission No</th>
                    <th className="border p-2">Student Name</th>
                    <th className="border p-2">Roll No.</th>
                    <th className="border p-2">Class</th>
                    <th className="border p-2">Father Name</th>
                    <th className="border p-2">Date Of Birth</th>
                    <th className="border p-2">Gender</th>
                    <th className="border p-2">Category</th>
                    <th className="border p-2">Mobile Number</th>
                    <th className="border p-2">Actions</th>

                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 ? (
                    currentItems.map((student) => (
                      <tr key={student.admissionNo}>
                        <td className="border p-2">{student.admissionNo}</td>
                        <td className="border p-2">{student.studentName}</td>
                        <td className="border p-2">{student.rollNo}</td>
                        <td className="border p-2">{student.class}</td>
                        <td className="border p-2">{student.fatherName}</td>
                        <td className="border p-2">{student.dob}</td>
                        <td className="border p-2">{student.gender}</td>
                        <td className="border p-2">{student.category}</td>
                        <td className="border p-2">{student.mobileNumber}</td>
                        <td className="border p-2">
                      <div className="flex space-x-2">
                      <button
              className="text-blue-500 hover:text-blue-600"
              onClick={() => navigate(`/admin/profile/${student.id}`)}
            >
              <FontAwesomeIcon icon={faList} />
            </button>
                        {/* Edit Icon */}
                        <button
                          className="text-green-500 hover:text-green-600"
                          onClick={() => navigate(`/admin/student/:id/edit`)}                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        {/* $ Icon */}
                        <button
                          className="text-yellow-500 hover:text-yellow-600"
                          onClick={() => navigate(`/admin/student/fees`)}                        >
                        
                          <FontAwesomeIcon icon={faDollarSign} />
                        </button>
                      </div>
                    </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" className="text-center p-4 text-red-500 dark:text-white">
                        No data available in table
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentItems.length > 0 ? (
                currentItems.map((student) => (
                  <div
                    key={student.admissionNo}
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 border"
                  >
                   <div className="bg-gray-300 rounded-full h-24 w-24 mb-4 flex items-center justify-center">
      <span className="text-4xl text-gray-600">👤</span>
    </div>
                <div className="w-4/5 flex flex-wrap">
                  <div className="w-full md:w-1/2 mb-2">
                    <h3 className="text-lg font-semibold text-blue-500">{student.studentName}</h3>
                    <p className="text-sm">Class: {student.class}({student.section})</p>
                    <p className="text-sm">Admission No: {student.admissionNo}</p>
                    <p className="text-sm">Date Of Birth: {student.dob}</p>
                    <p className="text-sm">Gender: {student.gender}</p>
                  </div>
                  <div className="w-full md:w-1/2 mb-2">
                    <p className="text-sm">
                      <strong>Local Identification Number:</strong> {student.localId || "N/A"}
                    </p>
                    <p className="text-sm">
                      <strong>Guardian Name:</strong> {student.guardianName}
                    </p>
                    <p className="text-sm">
                      <strong>Guardian Phone:</strong> 📞 {student.guardianPhone}
                    </p>
                    <p className="text-sm">
                      <strong>Current Address:</strong> {student.currentAddress || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                      <button
              className="text-blue-500 hover:text-blue-600"
              onClick={() => navigate(`/admin/profile/${student.id}`)}
            >
              <FontAwesomeIcon icon={faList} />
            </button>
                        {/* Edit Icon */}
                        <button
                          className="text-green-500 hover:text-green-600"
                          onClick={() => navigate(`/admin/student/:id/edit`)}                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        {/* $ Icon */}
                        <button
                          className="text-yellow-500 hover:text-yellow-600"
                          onClick={() => navigate(`/admin/student/fees`)}                        >
                        
                          <FontAwesomeIcon icon={faDollarSign} />
                        </button>
                      </div>
              </div>
            ))
                  
              ) : (
                <p className="text-center text-red-500">No data available</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminStudentDetails;
