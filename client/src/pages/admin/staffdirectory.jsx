// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaPen } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faList, faThList } from '@fortawesome/free-solid-svg-icons';
// import axiosApi from "../../api/axiosApi.jsx";

// const StaffManagement = () => {
//   const [role, setRole] = useState('');
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [viewMode, setViewMode] = useState('card');
//   const [staffData, setStaffData] = useState([]);
//   const [loading, setLoading] = useState(true); // For loading state
//   const navigate = useNavigate();

//  useEffect(() => {
//   const fetchStaffData = async () => {
//     setLoading(true);
//     try {
//       const response = await axiosApi.get('/auth/getAllStaff'); // API endpoint
//       setStaffData(response.data); // Set fetched data to state
//       console.log('Fetched Staff Data:', response.data); // Debugging
//     } catch (error) {
//       console.error('Error fetching staff data:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };


//   fetchStaffData();
// }, []);
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStaff } from '../../redux/slices/stafffSlice.jsx'; // Import the async thunk
import { FaEye, FaPen } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faThList } from '@fortawesome/free-solid-svg-icons';

const StaffManagement = () => {
  const [role, setRole] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [viewMode, setViewMode] = useState('card');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: staffData, loading } = useSelector((state) => state.staff);

  useEffect(() => {
    dispatch(fetchStaff());
  }, [dispatch]);

  const filteredStaff = staffData.filter(
    (staff) =>
      (!role || staff.role === role) &&
      (!searchKeyword ||
        staff.staff_id.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        staff.first_name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        staff.last_name.toLowerCase().includes(searchKeyword.toLowerCase()))
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-md">
        <h1 className="text-2xl font-bold mb-6">Staff Management</h1>

        <div className="flex justify-between items-center mb-4">
          {/* Filters */}
          <div className="flex gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Role *</label>
              <select
                className="w-40 border rounded px-3 py-2"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Super Admin">Super Admin</option>
                <option value="Teacher">Teacher</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Search By Keyword</label>
              <input
                type="text"
                className="w-40 border rounded px-3 py-2"
                placeholder="Search by Staff ID, Name, Role"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4 mt-5">
            <button
              type="button"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 transition"
            >
              Search
            </button>
            
          </div>
          </div>

          {/* Search and Add Staff */}
          <div className="flex items-center gap-4">
           
            <button 
              type="button"
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 transition"
              onClick={() => navigate('/admin/staff/create')} // Navigate to create staff page
            >
              + Add Staff
            </button>
          </div>
{/*           
                    <div className="flex items-center gap-4">
            {can_add === 1 && ( // Check if can_add permission is 1
              <button
                type="button"
                className="px-6 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 transition"
                onClick={() => navigate('/admin/staff/create')} // Navigate to create staff page
              >
                + Add Staff
              </button>
            )}
          </div> */}

        </div>

      {/* Tabs with Font Awesome Icons */}
<div className="flex space-x-4 mb-6">
  <button
    className={`px-4 py-2 flex items-center ${viewMode === 'card' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-600 dark:text-white'}`}
    onClick={() => setViewMode('card')}
  >
    <FontAwesomeIcon icon={faThList} className="mr-2" /> Card View
  </button>
  <button
    className={`px-4 py-2 flex items-center ${viewMode === 'list' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-600 dark:text-white'}`}
    onClick={() => setViewMode('list')}
  >
    <FontAwesomeIcon icon={faList} className="mr-2" /> List View
  </button>
</div>

{/* Display Staff */}
<div>
  {viewMode === 'card' ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {staffData.map((staff) => (
        <div key={staff.id} className="bg-white border rounded shadow p-4 relative group hover:shadow-lg transition-all">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-4 text-white text-2xl font-semibold mx-auto">
            {staff.first_name.split(' ').map((word) => word[0]).join('')}
          </div>
          <h3 className="text-xl font-semibold text-center">{staff.first_name} {staff.last_name}</h3>
          <p className="text-sm text-center">Role: {staff.role}</p>
          <p className="text-sm text-center">Staff ID: {staff.staff_id}</p>
          <p className="text-sm text-center">Phone: {staff.phone_no}</p>

          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full mx-2 hover:bg-blue-600"
              onClick={() => navigate(`/admin/staff/${staff.staff_emp_id}`)} // Navigate to profile
            >
              <FaEye />
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full mx-2 hover:bg-green-600"
              onClick={() => navigate(`/admin/staff/${staff.id}/edit`)} // Navigate to edit
            >
              <FaPen />
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b">Staff ID</th>
                      <th className="px-4 py-2 border-b">Name</th>
                      <th className="px-4 py-2 border-b">Role</th>
                      <th className="px-4 py-2 border-b">Department</th>
                      <th className="px-4 py-2 border-b">Designation</th>
                      <th className="px-4 py-2 border-b">Mobile Number</th>
                      <th className="px-4 py-2 border-b">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffData.map((staff) => (
                      <tr key={staff.id}>
                        <td className="px-4 py-2 border-b">{staff.staff_id}</td> {/* Ensure correct field */}
                        <td className="px-4 py-2 border-b">{staff.first_name} {staff.last_name}</td> {/* Full name */}
                        <td className="px-4 py-2 border-b">{staff.role}</td>
                        <td className="px-4 py-2 border-b">{staff.department}</td>
                        <td className="px-4 py-2 border-b">{staff.designation}</td>
                        <td className="px-4 py-2 border-b">{staff.phone_no}</td> {/* Ensure correct field */}
                        <td className="px-4 py-2 border-b flex gap-2">
                          <button
                            className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                            onClick={() => navigate(`/admin/staff/${staff.staff_emp_id}`)} // Navigate to profile
                          >
                            <FaEye />
                          </button>
                          <button
                            className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full hover:bg-green-600"
                            onClick={() => navigate(`/admin/staff/${staff.id}/edit`)} // Navigate to edit
                          >
                            <FaPen />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>


        
      </div>
    </div>
    
  );
};

export default StaffManagement;
