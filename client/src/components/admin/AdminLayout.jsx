import React, { useState, useEffect } from "react";
import Navbar from "./AdminNavbar";
import Sidebar from "./AdminSidebar.jsx";
import { Outlet } from "react-router-dom";
import axios from "../../api/axiosApi.jsx";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [visibleGroups, setVisibleGroups] = useState({});
  // const [roleId, setRoleId] = useState(null); // Extracted role ID from token
  
  const [error, setError] = useState(null);
  const reduxRoleId = useSelector((state) => state.auth.staff?.role_id);
  const role_id = reduxRoleId || localStorage.getItem("role_id");
  // console.log("Getting from Redux", role, role_id);
  

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
      // Replace with the actual role_id from your auth context or props
    

        if (!role_id) {
          throw new Error("Role ID is missing in the token");
        }

        const response = await axios.get(`/auth/perm/permission/feature/${role_id}`);
        console.log(response)
        const permissions = response.data.feature;

        if (Array.isArray(permissions)) {
          const groupedPermissions = permissions.reduce((acc, permission) => {
            const groupKey = permission.group_short_code;
            if (!acc[groupKey]) {
              acc[groupKey] = {
                group_short_code: groupKey,
                group_name: permission.group_name,
                categories: [],
              };
            }
            acc[groupKey].categories.push({
              category_short_code: permission.category_short_code,
              category_name: permission.category_name,
              can_view: permission.can_view,
            });
            return acc;
          }, {});

          setMenuItems(Object.values(groupedPermissions));
        } else {
          setError("Invalid response format");
        }
      } catch (err) {
        setError("Failed to fetch menu items");
        console.error(err);
      }
    };

    fetchMenuItems();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleGroupVisibility = (groupShortCode) => {
    setVisibleGroups((prev) => ({
      ...prev,
      [groupShortCode]: !prev[groupShortCode],
    }));
  };

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        menuItems={menuItems}
        visibleGroups={visibleGroups}
        toggleGroupVisibility={toggleGroupVisibility}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "ml-60" : "ml-16"
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
