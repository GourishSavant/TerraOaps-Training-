import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import UniversityName from "../../assets/admin/universityName.png";
import { useModuleContext } from "../../Context/ModuleContext"; // Correct relative path
import { useDispatch, useSelector } from "react-redux";
import {fetchPermissions} from "../common/Sidebar/EnabledFeatures.jsx"
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  
  FaCalendarAlt,
  FaUserTie,
  FaBook,
  FaUser,
  FaDollarSign,
  FaFileAlt,
  FaCalendar,
  FaClipboardList,
  FaChalkboardTeacher,
  FaAngleDoubleRight,
  FaCommentDots,
  FaRegFileAlt,
  FaDesktop,
  FaBullhorn,
  FaUserClock,
  FaCog,
  FaChevronDown,
  FaChevronUp,
  FaCogs,
  FaGraduationCap,
  FaMoneyBillWave,
  FaCertificate,
  FaComments,
  FaCloud,
  FaUsers,
  FaMoneyBill,
  FaPen,
  FaEllipsisH,
  FaLink,
  FaGripVertical,
} from "react-icons/fa";
import axios from '../../api/axiosApi.jsx'


const Sidebar = ({ isOpen, menuItems, visibleGroups, toggleGroupVisibility })  => {
  // const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false); // State to toggle Quick Links visibility
  const [isHovered, setIsHovered] = useState(false);
 
  const [currentSession, setCurrentSession] = useState("2018-19");

  const [isEditingSession, setIsEditingSession] = useState(false); // Toggle edit mode for session

  const sessionOptions = ['2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24']; // Available session years

  const iconClasses = "text-lg";

// .........................................
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // Track clicked category
  const { rolePermissions = [] } = useSelector((state) => state.permissions); // Permissions from Redux
// .....................................
 const navigate = useNavigate();
  const toggleQuickLinks = () => {
    setIsQuickLinksOpen(!isQuickLinksOpen); // Toggle Quick Links visibility
  };

  const handleSaveSession = () => {
    setCurrentSession(editedSession);
    setIsEditingSession(false); // Stop editing after saving
  };
// .............................................

    // Check if a category has a specific permission
    const hasPermission = (categoryId, action) => {
      const permission = rolePermissions.find(
        (perm) => perm.permission_category_id === categoryId
      );
      return permission?.[action] === 1;
    };
  
    // Handle category click
    const handleCategoryClick = (category_name) => {
      console.log(category_name,"cat")
      setSelectedCategoryId(category_name);
      navigate(`/admin/${category_name}`); 
    };
  // ..........................................

  const categoryLinks = {
    Student:"/admin/student-details",
  // "Import Student":"",
  // Student Categories:
  // Student Houses:
  // Disable Student:
  // Student Timeline:
  // Disable Reason:
  // Collect Fees:
  // Fees Carry Forward:
  // Fees Master:
  // Fees Group:
  // Fees Group Assign:
  // Fees Type:
  // Fees Discount:
  // Fees Discount Assign:
  // Search Fees Payment:
  // Search Due Fees:
  // Fees Reminder:
  // Offline Bank Payments:
  // Income:
  // Income Head:
  // Search Income:
  // Expense:
  // Expense Head:
  // Search Expense:
  // Student / Period Attendance:
  // Attendance By Date:
  // Approve Leave:
  // Marks Grade:
  // Exam Group:
  // Design Admit Card:
  // Print Admit Card:
  // Design Marksheet:
  // Print Marksheet:
  // Exam Result:
  // Marks Import:
  // Exam:
  // Exam Publish:
  // Link Exam:
  // Assign / View student:
  // Exam Subject:
  // Exam Marks:
  // Marks Division:
  // Exam Schedule:
  // Generate Rank:
  // Class Timetable:
  // Subject:
  // Class:
  // Section:
  // Promote Student:
  // Assign Class Teacher:
  // Teachers Timetable:
  // Subject Group:
  // Upload Content:
  // Content Type:
  // Content Share List:
  // Video Tutorial:
  // Books List:
  // Issue Return:
  // Add Staff Member:
  // Add Student:
  // Import Book:
  // Notice Board:
  // Email:
  // Email / SMS Log:
  // SMS:
  // Schedule Email SMS Log:
  // Login Credentials Send:
  // Email Template:
  // SMS Template:
  // Student Report:
  // Guardian Report:
  // Student History:
  // Student Login Credential Report:
  // Class Subject Report:
  // Admission Report:
  // Sibling Report:
  // Homework Evaluation Report:
  // Student Profile:
  // Fees Statement:
  // Balance Fees Report:
  // Fees Collection Report:
  // Online Fees Collection Report:
  // Income Report:
  // Expense Report:
  // PayRoll Report:
  // Income Group Report:
  // Expense Group Report:
  // Attendance Report:
  // Staff Attendance Report:
  // Audit Trail Report:
  // User Log:
  // Book Issue Report:
  // Book Due Report:
  // Student Attendance Type Report:
  // Exam Marks Report:
  // Online Exam Wise Report:
  // Online Exams Report:
  // Online Exams Attempt Report:
  // Online Exams Rank Report:
  // Staff Report:
  // Student / Period Attendance Report:
  // Biometric Attendance Log:
  // Book Issue Return Report:
  // Rank Report:
  // Syllabus Status Report:
  // Teacher Syllabus Status Report:
  // Alumni Report:
  // Student Gender Ratio Report:
  // Student Teacher Ratio Report:
  // Daily Attendance Report:
  // Balance Fees Report With Remark:
  // Balance Fees Statement:
  // Daily Collection Report:
  // Languages:
  // General Setting:
  // Session Setting:
  // Notification Setting:
  // SMS Setting:
  // Email Setting:
  // Front CMS Setting:
  // Payment Methods:
  // User Status:
  // Backup:
  // Restore:
  // Language Switcher:
  // Custom Fields:
  // System Fields:
  // Print Header Footer:
  // Student Profile Update:
  // Sidebar Menu:
  // Currency:
  // Currency Switcher:
  // Menus:
  // Media Manager:
  // Banner Images:
  // Pages:
  // Gallery:
  // Event:
  // News:
  // Admission Enquiry:
  // Follow Up Admission Enquiry:
  // Visitor Book:
  // Phone Call Log:
  // Postal Dispatch:
  // Postal Receive:
  // Complain:
  // Setup Font Office:
   Staff:"/admin/staff-directory",
  // Disable Staff:
  // Staff Attendance:
  // Staff Payroll:
  // Approve Leave Request:
  // Apply Leave:
  // Leave Types:
  // Department:
  // Designation:
  // Can See Other Users Profile:
  // Staff Timeline:
  // Teachers Rating:
  // Homework:
  // Homework Evaluation:
  // Daily Assignment:
  // Student Certificate:
  // Generate Certificate:
  // Student ID Card:
  // Generate ID Card:
  // Staff ID Card:
  // Generate Staff ID Card:
  // Calendar To Do List:
  // Quick Session Change:
  // Fees Collection And Expense Monthly Chart:
  // Fees Collection And Expense Yearly Chart:
  // Monthly Fees Collection Widget:
  // Monthly Expense Widget:
  // Student Count Widget:
  // Staff Role Count Widget:
  // Fees Awaiting Payment Widegts:
  // Conveted Leads Widegts:
  // Fees Overview Widegts:
  // Enquiry Overview Widegts:
  // Library Overview Widegts:
  // Student Today Attendance Widegts:
  // Income Donut Graph:
  // Expense Donut Graph:
  // Staff Present Today Widegts:
  // Student Present Today Widegts:
  // Online Examination:
  // Question Bank:
  // Add Questions in Exam:
  // Assign / View Student:
  // Import Question:
  // Chat:
  // Multi Class Student:
  // Online Admission:
  // Manage Alumni:
  // Events:
  // Manage Lesson Plan:
  // Manage Syllabus Status:
  // Lesson:
  // Topic:
  // Comments:
  // Copy Old Lessons:
  };
  
//   useEffect(() => {
//     const getPermissions = async () => {
//         if (!role_id) {
//             setError('Role ID is missing.');
//             return;
//         }

//         try {
//             console.log("Before fetching DB", role_id);
//             const response = await axios.get(`/auth/perm/permission/feature/${role_id}`);
//             console.log("After fetching DB", response);

//             const permissions = response.data.feature; // Extract the 'feature' array
//             if (Array.isArray(permissions)) {
//                 // Group permissions by permission group
//                 const groupedPermissions = permissions.reduce((acc, permission) => {
//                     // Group by permission group short code
//                     const groupKey = permission.group_short_code;
//                     if (!acc[groupKey]) {
//                         acc[groupKey] = {
//                             group_short_code: groupKey,
//                             group_name: permission.group_name,
//                             categories: [],
//                         };
//                     }

//                     // Push category data into the respective group
//                     acc[groupKey].categories.push({
//                         category_short_code: permission.category_short_code,
//                         category_name: permission.category_name,
//                         can_view: permission.can_view,
//                         can_add: permission.can_add,
//                         can_edit: permission.can_edit,
//                         can_delete: permission.can_delete,
//                     });

//                     return acc;
//                 }, {});

//                 // Convert the grouped object into an array
//                 setMenuItems(Object.values(groupedPermissions));
//             } else {
//                 setError('Invalid response format');
//                 console.error('Permissions data is not an array:', permissions);
//             }
//         } catch (err) {
//             setError('Failed to fetch permissions');
//             console.error(err);
//         }
//     };

//     getPermissions();
// }, [role_id]); // Run effect when role_id changes

// // Handle loading state or error
// if (error) {
//     return <p>Error: {error}</p>;
// }

// if (menuItems.length === 0) {
//     return <p>Loading permissions...</p>;
// }
// const toggleGroupVisibility = (groupShortCode) => {
//   setVisibleGroups((prev) => ({
//       ...prev,
//       [groupShortCode]: !prev[groupShortCode], // Toggle visibility of this group
//   }));
// };




function getGroupIcon(shortCode) {
  switch (shortCode) {
      case 'front_office':
          return (
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                  />
              </svg>
          );
      case 'student_information':
          return (
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                  />
              </svg>
          );
      case 'income':
          return (
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01m-6.938 4h13.856C18.54 19.776 20 16.512 20 12c0-4.512-1.46-7.776-4.082-8H7.082C4.46 4.224 3 7.488 3 12c0 4.512 1.46 7.776 4.082 8z"
                  />
              </svg>
          );
      // Add more cases for other groups...
      default:
          return <span>?</span>;
  }
}

function getCategoryIcon(shortCode) {
  switch (shortCode) {
      case 'attendance':
          return (
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h11m4 0h4m-8 10h6m-8-4h8m-8-6h8m-8-4h6"
                  />
              </svg>
          );
      case 'library':
          return (
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 20h9m-9-4h6m-6-4h3M6 16h.01M6 20h.01M6 12h.01M6 8h.01M6 4h.01M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
              </svg>
          );
      // Add more cases for other categories...
      default:
          return <span>?</span>;
  }
}

  return (
    <div
      className={`bg-gray-600 text-white transition-all duration-300 h-screen dark:bg-slate-700 ${isOpen || isHovered ? 'w-60' : 'w-16'
        } fixed top-0 left-0 h-screen z-30 overflow-y-auto`}
    >
      <ul className="space-y-1 p-3">

        {/* University Logo */}
        <li className="mb-4">
          <img
            src={UniversityName}
            alt="UniversityName"
            className={`h-15 w-auto transition-all duration-300 ${isOpen || isHovered ? 'mx-auto' : 'mx-auto'}`}
          />
        </li>
        {/* Current Session and Pen Icon */}
        <li className="flex items-center space-x-4 mb-4">
          {/* Current Session or Dropdown */}
          {isEditingSession ? (
            <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-md">
              <select
                value={currentSession}
                onChange={handleSaveSession}
                className="text-sm text-black-400 border border-gray-500 rounded p-1 bg-gray-600"
              >
                {sessionOptions.map((session) => (
                  <option key={session} value={session}>
                    {session}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <span className="text-sm text-white">
              {isOpen || isHovered ? `Current Session: ${currentSession}` : currentSession}
            </span>
          )}
          {(isOpen || isHovered) && (
            <FaPen
              onClick={() => setIsEditingSession(!isEditingSession)} // Toggle edit mode when clicking pen
              className={`${iconClasses} text-yellow-400 cursor-pointer`}
            />
          )}
        </li>

        <li>
          <Link
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-700"
            onClick={() => document.getElementById('overlay').style.display = 'block'} // Open overlay on click
          >
            <div className="flex items-center space-x-2">
              <li className="flex items-center space-x-24 mb-2">
                <span className="text-sm text-white">{isOpen || isHovered ? 'Quick Links' : 'Links'}</span>
                {(isOpen || isHovered) && <FaGripVertical className={`${iconClasses} text-gray-400`} />}
              </li>
            </div>
          </Link>

          {/* Full-Screen Overlay */}
          <div
            id="overlay"
            className="overlay"
            style={{
              display: 'none',
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
              zIndex: 999,
              overflow: 'auto', // Allow scrolling when content overflows
            }}
            onClick={() => document.getElementById('overlay').style.display = 'none'} // Close on click anywhere
          >
            {/* Overlay Content */}
            <div
              className="overlay-content bg-white p-6"
              style={{
                maxWidth: '90%', // Customize width as needed
                margin: '40px auto', // Adjust margins as needed (top, bottom, left, right)
                borderRadius: '8px',
                overflowY: 'auto', // Enable vertical scrolling if content exceeds height
                maxHeight: '80vh', // Limit height for scrollable content
                display: 'grid', // Use grid layout
                gridTemplateColumns: 'repeat(4, 1fr)', // Create a 4x4 grid layout (4 sections per row)
                gap: '20px', // Space between columns
              }}
              onClick={(e) => e.stopPropagation()} // Prevent click event from propagating to close overlay
            >

              {/* Section: Front Office */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-black mb-3">
                  <FaHome className="inline mr-2 text-black" /> Front Office
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/admission-enquiry" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Admission Enquiry</Link></li>
                  <li><Link to="/admin/visitor-books" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Visitor Book</Link></li>
                  <li><Link to="/admin/phone-call" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Phone Call Log</Link></li>
                  <li><Link to="/admin/postal-dispatch" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Postal Dispatch</Link></li>
                  <li><Link to="/admin/postal-receive" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Postal Receive</Link></li>
                  <li><Link to="/admin/complaint" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Complain</Link></li>
                  <li><Link to="/admin/setup-frontoffice" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Setup Front Office</Link></li>
                </ul>
              </div>

              {/* Section: Student Information */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-black mb-3">
                  <FaUser className="inline mr-2 text-black" /> Student Information
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/student-details" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Student Details</Link></li>
                  <li><Link to="/admin/online-admission" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Online Admission</Link></li>
                  <li><Link to="/admin/online-admission" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Online Admission</Link></li>
                  <li><Link to="/admin/disabled-students" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Disabled Students</Link></li>
                  <li><Link to="/admin/multi-class-student" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Multi Class Student</Link></li>
                  <li><Link to="/admin/bulk-delete" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Bulk Delete</Link></li>
                  <li><Link to="/admin/student-categories" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Student Categories</Link></li>
                  <li><Link to="/admin/student-house" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Student House</Link></li>
                  <li><Link to="/admin/disable-reason" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Disable Reason</Link></li>
                </ul>
              </div>

              {/* Section: Examinations */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-black mb-3">
                  <FaHome className="inline mr-2 text-black" /> Examinations
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/exam-group" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Exam Group</Link></li>
                  <li><Link to="/admin/exam-schedule" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Exam Schedule</Link></li>
                  <li><Link to="/admin/exam-result" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Exam Result</Link></li>
                  <li><Link to="/admin/design-admitcard" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Design Admit Card</Link></li>
                  <li><Link to="/admin/print-admitcard" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Print Admit Card</Link></li>
                  <li><Link to="/admin/design-marksheet" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Design Marksheet</Link></li>
                  <li><Link to="/admin/print-marksheet" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Print Marksheet</Link></li>
                  <li><Link to="/admin/marks-grade" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Marks Grade</Link></li>
                  <li><Link to="/admin/marks-division" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Marks Division</Link></li>
                </ul>
              </div>

              {/* Section: Academics */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-black mb-3">
                  <FaHome className="inline mr-2 text-black" /> Academics
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/class-timetable" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Class Timetable</Link></li>
                  <li><Link to="/admin/assign-class-teacher" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Assign Class Teacher</Link></li>
                  <li><Link to="/admin/teachers-timetable" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Teachers Timetable</Link></li>
                  <li><Link to="/admin/promote-students" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Promote Students</Link></li>
                  <li><Link to="/admin/subject-group" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Subject Group</Link></li>
                  <li><Link to="/admin/subjects" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Subjects</Link></li>
                  <li><Link to="/admin/class" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Class</Link></li>
                  <li><Link to="/admin/sections" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Sections</Link></li>
                </ul>
              </div>

              {/* Section: Expenses */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-sm text-black mb-3">
                  <FaMoneyBillWave className="inline mr-2 text-black" /> Expenses
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/add-expense" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Add Expenses</Link></li>
                  <li><Link to="/admin/search-expense" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Search Expenses</Link></li>
                  <li><Link to="/admin/expense-head" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Expense Head</Link></li>

                </ul>
              </div>

              {/* Section: Fees Collection */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-sm text-black mb-3">
                  <FaMoneyBillWave className="inline mr-2 text-black" /> Fees Collection
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/collect-fees" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Collect Fees</Link></li>
                  <li><Link to="/admin/offline-payment" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Offline Bank Payments</Link></li>
                  <li><Link to="/admin/search-payment" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Search Fees Payment</Link></li>
                  <li><Link to="/admin/due-fees" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Search Due Fees</Link></li>
                  <li><Link to="/admin/fees-master" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Fees Master</Link></li>
                  <li><Link to="/admin/fees-group" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Fees Group</Link></li>
                  <li><Link to="/admin/fees-type" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Fees Type</Link></li>
                  <li><Link to="/admin/fees-discount" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Fees Discount</Link></li>
                  <li><Link to="/admin/fees-carry-forward" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Fees Carry Forward</Link></li>
                  <li><Link to="/admin/fees-reminder" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Fees Reminder</Link></li>
                </ul>
              </div>

              {/* Section: Library */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-sm text-black mb-3">
                  <FaBook className="inline mr-2 text-black" /> Library
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/book-list" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Book List</Link></li>
                  <li><Link to="/admin/issue-return" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Issue - Return</Link></li>
                  <li><Link to="/admin/add-student" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Add Student</Link></li>
                  <li><Link to="/admin/add-staffmember" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Add Staff Member</Link></li>
                </ul>
              </div>

              {/* Section: Communicate */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-sm text-black mb-3">
                  <FaCommentDots className="inline mr-2 text-black" /> Communicate
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/notice-board" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Notice Board</Link></li>
                  <li><Link to="/admin/send-email" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Send Email</Link></li>
                  <li><Link to="/admin/send-sms" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Send SMS</Link></li>
                  <li><Link to="/admin/email-sms-log" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Email / SMS Log</Link></li>
                  <li><Link to="/admin/schedule-email-sms-log" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Schedule Email SMS Log</Link></li>
                  <li><Link to="/admin/login-credentials-send" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Login Credentials Send</Link></li>
                  <li><Link to="/admin/email-template" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Email Template</Link></li>
                  <li><Link to="/admin/sms-template" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> SMS Template</Link></li>
                </ul>
              </div>

              {/* Section: Income */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-sm text-black mb-3">
                  <FaDollarSign className="inline mr-2 text-black" /> Income
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/add-income" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Add Income</Link></li>
                  <li><Link to="/admin/search-income" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Search Income</Link></li>
                  <li><Link to="/admin/income-head" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Income Head</Link></li>
                </ul>
              </div>

              {/* Section: Human Resource */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-sm text-black mb-3">
                  <FaUserTie className="inline mr-2 text-black" /> Human Resource
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/staff-directory" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Staff Directory</Link></li>
                  <li><Link to="/admin/staff-attendance" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Staff Attendance</Link></li>
                  <li><Link to="/admin/payroll" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Payroll</Link></li>
                  <li><Link to="/admin/approve-leave-request" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Approve Leave Request</Link></li>
                  <li><Link to="/admin/apply-leave" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Apply Leave</Link></li>
                  <li><Link to="/admin/leave-type" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Leave Type</Link></li>
                  <li><Link to="/admin/teachers-rating" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Teachers Rating</Link></li>
                  <li><Link to="/admin/department" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Department</Link></li>
                  <li><Link to="/admin/designation" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Designation</Link></li>
                  <li><Link to="/admin/disabled-staff" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Disabled Staff</Link></li>
                </ul>
              </div>

              {/* Section: Attendance */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-black mb-3">
                  <FaUserClock className="inline mr-2 text-black" /> Attendance
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/student-attendance" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Student Attendance</Link></li>
                  <li><Link to="/admin/approve-leave" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Approve Leave</Link></li>
                  <li><Link to="/admin/attendance-by-date" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Attendance By Date</Link></li>
                </ul>
              </div>

              {/* Section: Certificate */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-black mb-3">
                  <FaCertificate className="inline mr-2 text-black" /> Certificate
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/student-certificate" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Student Certificate</Link></li>
                  <li><Link to="/admin/generate-certificate" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Generate Certificate</Link></li>
                  <li><Link to="/admin/student-id-card" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Student ID Card</Link></li>
                  <li><Link to="/admin/generate-id-card" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Generate ID Card</Link></li>
                  <li><Link to="/admin/staff-id-card" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Staff ID Card</Link></li>
                  <li><Link to="/admin/generate-staff-id-card" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Generate Staff ID Card</Link></li>
                </ul>
              </div>

              {/* Section: Front CMS */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-black mb-3">
                  <FaDesktop className="inline mr-2 text-black" /> Front CMS
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/event" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Event</Link></li>
                  <li><Link to="/admin/gallery" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Gallery</Link></li>
                  <li><Link to="/admin/news" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> News</Link></li>
                  <li><Link to="/admin/media-manager" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Media Manager</Link></li>
                  <li><Link to="/admin/pages" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Pages</Link></li>
                  <li><Link to="/admin/menus" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Menus</Link></li>
                  <li><Link to="/admin/banner-images" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Banner Images</Link></li>
                </ul>
              </div>

              {/* Section: Online Examinations */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-black mb-3">
                  <FaRegFileAlt className="inline mr-2 text-black" /> Online Examinations
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/online-exam" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Online Exam</Link></li>
                  <li><Link to="/admin/question-bank" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Question Bank</Link></li>
                </ul>
              </div>

              {/* Section: Lesson Plan */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-black mb-3">
                  <FaBook className="inline mr-2 text-black" /> Lesson Plan
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/copy-old-lessons" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Copy Old Lessons</Link></li>
                  <li><Link to="/admin/manage-lesson-plan" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Manage Lesson Plan</Link></li>
                  <li><Link to="/admin/manage-syllabus-status" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Manage Syllabus Status</Link></li>
                  <li><Link to="/admin/lesson" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Lesson</Link></li>
                  <li><Link to="/admin/topic" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Topic</Link></li>
                </ul>
              </div>

              {/* Section: Reports */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-black mb-3">
                  <FaFileAlt className="inline mr-2 text-black" /> Reports
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/student-information-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Student Information</Link></li>
                  <li><Link to="/admin/finance-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Finance</Link></li>
                  <li><Link to="/admin/attendance-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Attendance</Link></li>
                  <li><Link to="/admin/examinations-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Examinations</Link></li>
                  <li><Link to="/admin/online-examinations-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Online Examinations</Link></li>
                  <li><Link to="/admin/lesson-plan-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Lesson Plan</Link></li>
                  <li><Link to="/admin/human-resource-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Human Resource</Link></li>
                  <li><Link to="/admin/homework-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Homework</Link></li>
                  <li><Link to="/admin/library-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Library</Link></li>
                  <li><Link to="/admin/inventory-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Inventory</Link></li>
                  <li><Link to="/admin/transport-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Transport</Link></li>
                  <li><Link to="/admin/hostel-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Hostel</Link></li>
                  <li><Link to="/admin/alumni-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Alumni</Link></li>
                  <li><Link to="/admin/user-log-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> User Log</Link></li>
                  <li><Link to="/admin/audit-trail-report" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Audit Trail Report</Link></li>
                </ul>
              </div>

              {/* Section: System Setting */}
              <div className="flex-shrink-0 min-w-[200px]">
                <h4 className="font-semibold text-black mb-3">
                  <FaCog className="inline mr-2 text-black" /> System Setting
                </h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admin/session-setting" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Session Setting</Link></li>
                  <li><Link to="/admin/notification-setting" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Notification Setting</Link></li>
                  <li><Link to="/admin/sms-setting" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> SMS Setting</Link></li>
                  <li><Link to="/admin/email-setting" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Email Setting</Link></li>
                  <li><Link to="/admin/payment-methods" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Payment Methods</Link></li>
                  <li><Link to="/admin/general-setting" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> General Setting</Link></li>
                  <li><Link to="/admin/print-header-footer" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Print Header Footer</Link></li>
                  <li><Link to="/admin/front-cms-setting" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Front CMS Setting</Link></li>
                  <li><Link to="/admin/roles-permissions" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Roles Permissions</Link></li>
                  <li><Link to="/admin/backup-restore" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Backup Restore</Link></li>
                  <li><Link to="/admin/languages" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Languages</Link></li>
                  <li><Link to="/admin/currency" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Currency</Link></li>
                  <li><Link to="/admin/users" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Users</Link></li>
                  <li><Link to="/admin/modules" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Modules</Link></li>
                  <li><Link to="/admin/custom-fields" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Custom Fields</Link></li>
                  <li><Link to="/admin/captcha-setting" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Captcha Setting</Link></li>
                  <li><Link to="/admin/system-fields" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> System Fields</Link></li>
                  <li><Link to="/admin/student-profile-update" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Student Profile Update</Link></li>
                  <li><Link to="/admin/online-admission" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Online Admission</Link></li>
                  <li><Link to="/admin/file-types" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> File Types</Link></li>
                  <li><Link to="/admin/sidebar-menu" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> Sidebar Menu</Link></li>
                  <li><Link to="/admin/system-update" className="text-black" onClick={() => document.getElementById('overlay').style.display = 'none'}><FaAngleDoubleRight className="inline mr-2 text-black" /> System Update</Link></li>
                </ul>
              </div>



            </div>
          </div>
        </li>

       

    {/* return ( */}
        {/* <aside className="sidebar">
            <ul>
                {menuItems.map((item) => (
                    item.can_view && (
                        <li key={item.category_short_code}>
                            <a href={`/${item.category_short_code}`}>
                                {item.category_name}
                            </a>
                        </li>
                    )
                ))}
            </ul>
        </aside> */}
<aside className="sidebar p-4 bg-gray-800 w-64 h-screen text-white">
    {menuItems.map((group) => (
        <div key={group.group_short_code} className="mb-4">
            {/* Group Name with Unique Icon and Dropdown */}
            <h3
                className="text-md font-semibold cursor-pointer p-2 bg-gray-700 rounded-md hover:bg-gray-600 flex items-center"
                onClick={() => toggleGroupVisibility(group.group_short_code)}
            >
                {/* Group Icon */}
                <span className="mr-3">
                    {getGroupIcon(group.group_short_code)}
                </span>

                {/* Group Name */}
                <span className="flex-grow">{group.group_name}</span>

                {/* Dropdown Toggle: `^` */}
                <span
                    className={`transform transition-transform ${
                        visibleGroups[group.group_short_code] ? 'rotate-180' : ''
                    }`}
                >
                    ^
                </span>
            </h3>

            {/* Dropdown Menu for Subcategories */}
            {visibleGroups[group.group_short_code] && (
                <ul className="ml-4 mt-2 space-y-1">
                    {group.categories.map(
                        (category) =>
                            category.can_view && (
                                // <li
                                //     key={category.category_short_code}
                                //     className="p-2 hover:bg-gray-600 rounded-md"
                                // >
                                //     {/* Subcategory Link */}
                                //     <a
                                //         href={
                                //             categoryLinks[category.category_short_code] ||
                                //             "#"
                                //         }
                                //         className="flex items-center text-sm text-gray-300 hover:text-white"
                                //     >
                                //         {/* Subcategory Icon */}
                                //         <span className="mr-3">
                                //             {getCategoryIcon(
                                //                 category.category_short_code
                                //             )}
                                //         </span>

                                //         {/* Subcategory Name */}
                                //         {category.category_name}
                                //     </a>
                                // </li>
                                <li
                                key={category.category_short_code}
                                className="p-2 hover:bg-gray-600 rounded-md"
                              >
                                <button
                                  onClick={() => handleCategoryClick(category.category_short_code)}
                                  className="flex items-center text-sm text-gray-300 hover:text-white w-full text-left"
                                >
                                  <span className="mr-3">📄</span>
                                  {category.category_name}
                                </button>
                              </li>
                            )
                    )}
                </ul>
            )}
        </div>
    ))}
</aside>



      </ul>
    </div>
  );
};

export default Sidebar;

