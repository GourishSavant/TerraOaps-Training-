import React from "react";
import { FiEdit2 } from "react-icons/fi"; // Edit icon from React Icons

const StudentProfile = () => {
  const handleEdit = () => {
    alert("Edit Profile clicked!");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Sidebar */}
      <div className="col-span-1 flex flex-col items-start border-r border-gray-300 p-4">
        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 self-center"></div>
        <h2 className="text-xl font-semibold mb-4">Tejashvini</h2>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Admission No:</span> 3434344443
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Class:</span> Class 8 (2023-24)
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Section:</span> Section A
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">RTE:</span> No
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Gender:</span> Male
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Barcode:</span> Not Available
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">QR Code:</span> Not Available
        </p>
      </div>

      {/* Main Content */}
      <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Section */}
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg relative">
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
            <h3 className="text-lg font-semibold">Profile</h3>
            <button
              className="text-blue-600 hover:text-blue-800"
              onClick={handleEdit}
            >
              <FiEdit2 className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Admission Date:</span> 01/07/2025
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Date Of Birth:</span> 01/01/2025
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Mobile Number:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Caste:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Religion:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Email:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Note:</span> Not Provided
            </p>
          </div>
        </div>

        {/* Address Details */}
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
            Address Details
          </h3>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Current Address:</span> Not Provided
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-medium">Permanent Address:</span> Not Provided
          </p>
        </div>

        {/* Parent Guardian Details */}
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
            Parent Guardian Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Father Name:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Father Phone:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Father Occupation:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Mother Name:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Mother Phone:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Mother Occupation:</span> Not Provided
            </p>
          </div>
        </div>

        {/* Miscellaneous Details */}
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-4">
            Miscellaneous Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Blood Group:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">House:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Height:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Weight:</span> Not Provided
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Measurement Date:</span> 01/07/2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
