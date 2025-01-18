import React from "react";

const StudentFees = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Student Fees</h1>
            <p className="text-gray-600">Date: 01/10/2025</p>
          </div>
        </div>

        {/* Student Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="font-bold text-gray-700">Name:</p>
            <p className="text-gray-800">Rahul1</p>
          </div>
          <div>
            <p className="font-bold text-gray-700">Class (Section):</p>
            <p className="text-gray-800">Class 8 (Section A)</p>
          </div>
          <div>
            <p className="font-bold text-gray-700">Father Name:</p>
            <p className="text-gray-800">Not Provided</p>
          </div>
          <div>
            <p className="font-bold text-gray-700">Admission No:</p>
            <p className="text-gray-800">3434344443</p>
          </div>
          <div>
            <p className="font-bold text-gray-700">Mobile Number:</p>
            <p className="text-gray-800">Not Provided</p>
          </div>
          <div>
            <p className="font-bold text-gray-700">RTE:</p>
            <p className="text-gray-800">No</p>
          </div>
        </div>

        {/* Fees Status */}
        <div className="mt-6">
          <div className="bg-red-100 text-red-800 text-center py-4 rounded-lg font-semibold">
            No fees found.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFees;
