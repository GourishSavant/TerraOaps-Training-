// / userModel.js
import config from '../config.js';

const db = config.db;

// Function to create a new user
export const createUser = async (role, fullName, email, password) => {
    const [result] = await db.execute('INSERT INTO register (role, fullname, email, password) VALUES (?, ?, ?, ?)', [role, fullName, email, password]);
    return result.insertId;
  };

  // Function to get a user by email
  export const getUserByEmail = async (email) => {
    console.log(" this is user model ")
    const [rows] = await db.execute('SELECT * FROM staff WHERE email = ?', [email]);
    console.log("db ")
    return rows[0];
  };
  
  export const resetUserPassword = async (email, newPassword) => {
    const [result] = await db.execute('UPDATE register SET password = ? WHERE email = ?', [newPassword, email]);

    // Return a success status or check rows affected
    return result.affectedRows > 0; // Returns `true` if at least one row is updated
};

// Create a new role in the database
export const createRole = async (name, is_active, is_system, is_admin) => {
  const [result] = await db.execute(
    'INSERT INTO roles (name, is_active, is_system, is_admin) VALUES (?, ?, ?, ?)',
    [name, is_active, is_system, is_admin]
  );
  return result.insertId; // Return the ID of the newly created role
};



export const getRoleById = async (role_id) => {
  try {
    console.log("name")
    const [rows] = await db.execute('SELECT * FROM roles WHERE role_id = ?', [role_id]);
    return rows.length > 0 ? rows[0] : null; // Return the first result or null if not found
  } catch (error) {
    console.error('Database Error (getRoleById):', error.message);
    throw error;
  }
};

// Update Role by id
export const updateRole = async (role_id, name, is_active, is_system, is_admin) => {
  const [result] = await db.execute(
    'UPDATE roles SET name = ?, is_active = ?, is_system = ?, is_admin = ? WHERE role_id = ?',
    [name, is_active, is_system, is_admin, role_id]
  );
  return result.affectedRows > 0;
};

// Delete Role by id
// Delete Role by role_id
export const deleteRoleById = async (role_id) => {
  const [result] = await db.execute('DELETE FROM roles WHERE role_id = ?', [role_id]);
  return result.affectedRows > 0;
};


export const getAllRoles = async () => {
  try {
    const [rows] = await db.execute('SELECT * FROM roles');
    return rows.length > 0 ? rows : null; // Return the first result or null if not found
  } catch (error) {
    console.error('Database Error (getRoleById):', error.message);
    throw error;
  }
};

export const craeteStudent = async () => {
  try {
    const [rows] = await db.execute('SELECT * FROM roles');
    return rows.length > 0 ? rows : null; // Return the first result or null if not found
  } catch (error) {
    console.error('Database Error (getRoleById):', error.message);
    throw error;
  }
};
// permission Usermodel

// export const getPermissionsByRoleModel = async (role_id) => {
//   try {
//     const [rows] = await db.execute('SELECT * FROM roles_permissions WHERE role_id = ?', [role_id]);
//     console.log('Number of rows:', rows.length); // Logs the number of rows returned
//     return rows; // Return the result to the controller
//   } catch (error) {
//     console.error('Error in database query:', error);
//     throw new Error('Database query failed');
//   }
// };

// export const updatePermissionsForRole = async (role_id, permission_category_id, can_view, can_add, can_edit, can_delete) => {
//   const [result] = await db.execute(
//     'UPDATE roles_permissions SET can_view = ?, can_add = ?, can_edit = ?, can_delete = ? WHERE role_id = ? AND permission_category_id = ?',
//     [can_view, can_add, can_edit, can_delete, role_id, permission_category_id]
//   );
//   return result.affectedRows; // Return the number of affected rows
// };

// Fetch permissions by role
// export const getPermissionsByRoleModel = async (role_id) => {
//   try {
//     const [rows] = await db.execute(
//       'SELECT * FROM roles_permissions WHERE role_id = 1', 
//       [role_id]
//     );
//     console.log('Number of rows:', rows.length); 
//     return rows;
//   } catch (error) {
//     console.error('Error in database query:', error);
//     throw new Error('Database query failed');
//   }
// };
export const getAllPermissionsModel = async () => {
  try {
    const [rows] = await db.execute('SELECT * FROM roles_permissions');
    console.log('Number of rows:', rows.length);
    return rows;
  } catch (error) {
    console.error('Error in database query:', error);
    throw new Error('Database query failed');
  }
};


// Bulk Update Permissions for a Role
// export const bulkUpdatePermissionsForRole = async (role_id, permissions) => {
//   try {
//     // const query = `
//     //   INSERT INTO roles_permissions (role_id, permission_category_id, can_view, can_add, can_edit, can_delete)
//     //   VALUES ${permissions.map(() => '(?, ?, ?, ?, ?, ?)').join(',')}
//     //   ON DUPLICATE KEY UPDATE 
//     //     can_view = VALUES(can_view),
//     //     can_add = VALUES(can_add),
//     //     can_edit = VALUES(can_edit),
//     //     can_delete = VALUES(can_delete)
//     // `;
//     const query = `
//       UPDATE roles_permissions
//       SET 
//         can_view = CASE ${permissions.map(() => 'WHEN permission_category_id = ? THEN ?').join(' ')} ELSE can_view END,
//         can_add = CASE ${permissions.map(() => 'WHEN permission_category_id = ? THEN ?').join(' ')} ELSE can_add END,
//         can_edit = CASE ${permissions.map(() => 'WHEN permission_category_id = ? THEN ?').join(' ')} ELSE can_edit END,
//         can_delete = CASE ${permissions.map(() => 'WHEN permission_category_id = ? THEN ?').join(' ')} ELSE can_delete END
//       WHERE role_id = ? AND permission_category_id IN (${permissions.map(() => '?').join(',')})
//     `;

//     const values = permissions.flatMap(permission => [
//       role_id,
//       permission.permission_category_id,
//       permission.can_view,
//       permission.can_add,
//       permission.can_edit,
//       permission.can_delete
//     ]);

//     const [result] = await db.execute(query, values);
//     console.log('Number of affected rows:', result.affectedRows);
//     return result.affectedRows;
//   } catch (error) {
//     console.error('Error in bulk updating permissions:', error.message);
//     throw new Error('Failed to bulk update role permissions');
//   }
// };

// models/userModel.js

// export const bulkUpdatePermissionsForRole = async (role_id, permissions) => {
//   try {
//     if (!permissions || permissions.length === 0) {
//       throw new Error('No permissions provided for update');
//     }

//     // Build dynamic SQL query
//     const updates = ['can_view', 'can_add', 'can_edit', 'can_delete'].map(column => `
//       ${column} = CASE permission_category_id
//         ${permissions.map(() => 'WHEN ? THEN ?').join(' ')}
//         ELSE ${column}
//       END
//     `).join(', ');

//     const query = `
//       UPDATE roles_permissions
//       SET ${updates}
//       WHERE role_id = ? AND permission_category_id IN (${permissions.map(() => '?').join(', ')})
//     `;

//     // Prepare the values array
//     const values = [];
//     ['can_view', 'can_add', 'can_edit', 'can_delete'].forEach(column => {
//       permissions.forEach(permission => {
//         values.push(permission.permission_category_id, permission[column]);
//       });
//     });

//     // Add role_id for WHERE clause
//     values.push(role_id);

//     // Add permission_category_ids for IN clause
//     permissions.forEach(permission => {
//       values.push(permission.permission_category_id);
//     });

//     console.log('SQL Query:', query);
//     console.log('Values:', values);

//     const [result] = await db.execute(query, values);

//     console.log('Number of affected rows:', result.affectedRows);
//     return result.affectedRows;
//   } catch (error) {
//     console.error('Error in bulk updating permissions:', error.message);
//     throw new Error('Failed to bulk update role permissions');
//   }
// };


// models/userModel.js

// export const getRoleByName = async (name) => {
//   try {
//     const [rows] = await db.execute(
//       'SELECT * FROM roles WHERE name = ?',
//       [name]
//     );

//     return rows.length > 0 ? rows[0] : null; // Return the first matching role or null
//   } catch (error) {
//     console.error('Error fetching role by name:', error.message);
//     throw new Error('Failed to fetch role by name');
//   }
// };



  // export const getUserById = async (id) => {
  //   try {
  //     const user = await db.query('SELECT * FROM register WHERE registerId = ?', [id]); // Use parameterized queries to avoid SQL injection
  //     if (user.length === 0) {
  //       throw new Error('User not found');
  //     }
  //     return user[0]; // Assuming you're using an array of users from the query result
  //   } catch (error) {
  //     throw new Error('Error fetching user from database: ' + error.message);
  //   }
  // };

  // Fetch role_id by role name
export const getRoleIdByName = async (name) => {
  try {
    const [rows] = await db.execute('SELECT role_id FROM roles WHERE name = ?', [name]);
    return rows.length > 0 ? rows[0].role_id : null;
  } catch (error) {
    console.error('Error fetching role_id by name:', error.message);
    throw new Error('Failed to fetch role_id by name');
  }
};

// Fetch permission_category_id by category name
export const getPermissionCategoryIdByName = async (name) => {
  try {
    const [rows] = await db.execute('SELECT permission_category_id FROM permission_category WHERE name = ?', [name]);
    return rows.length > 0 ? rows[0].permission_category_id : null;
  } catch (error) {
    console.error('Error fetching permission_category_id by name:', error.message);
    throw new Error('Failed to fetch permission_category_id by name');
  }
};

export const checkRoleExistsById = async (role_id) => {
  try {
    const [rows] = await db.execute('SELECT 1 FROM roles WHERE role_id = ?', [role_id]);
    return rows.length > 0;
  } catch (error) {
    console.error('Error checking role by ID:', error.message);
    throw new Error('Failed to check role by ID');
  }
};


// Bulk update permissions by role_id and permission_category_id
export const bulkUpdatePermissionsForRole = async (role_id, permissions) => {
  try {
    if (!permissions || permissions.length === 0) {
      throw new Error('No permissions provided for update');
    }

    // Build dynamic SQL query
    const updates = ['can_view', 'can_add', 'can_edit', 'can_delete'].map(column => `
      ${column} = CASE permission_category_id
        ${permissions.map(() => 'WHEN ? THEN ?').join(' ')}
        ELSE ${column}
      END
    `).join(', ');

    const query = `
      UPDATE roles_permissions
      SET ${updates}
      WHERE role_id = ? AND permission_category_id IN (${permissions.map(() => '?').join(', ')})
    `;

    // Prepare values array
    const values = [];
    ['can_view', 'can_add', 'can_edit', 'can_delete'].forEach(column => {
      permissions.forEach(permission => {
        values.push(permission.permission_category_id, permission[column]);
      });
    });

    // Add role_id
    values.push(role_id);

    // Add permission_category_ids
    permissions.forEach(permission => {
      values.push(permission.permission_category_id);
    });

    console.log('SQL Query:', query);
    console.log('Values:', values);

    const [result] = await db.execute(query, values);

    console.log('Number of affected rows:', result.affectedRows);
    return result.affectedRows;
  } catch (error) {
    console.error('Error in bulk updating permissions:', error.message);
    throw new Error('Failed to bulk update role permissions');
  }
};


// export class StaffModel {
//   static async getStaffByEmail(email) {
//     try {
//       const [rows] = await db.execute(
//         'SELECT * FROM staff WHERE email = ? AND is_active = 1',
//         [email]
//       );
//       return rows.length > 0 ? rows[0] : null;
//     } catch (error) {
//       console.error('Database Error:', error.message);
//       throw error;
//     }
//   }
// }

export const getPermissions = async () => {
  console.log("entered in SQL ")
  const query = `
  SELECT 
    roles.role_id,
    roles.name AS role_name,
    permission_category.name AS permission_name,
    roles_permissions.permission_category_id,
    roles_permissions.can_view,
    roles_permissions.can_add,
    roles_permissions.can_edit,
    roles_permissions.can_delete
FROM roles_permissions
RIGHT JOIN roles ON roles.role_id = roles_permissions.role_id
LEFT JOIN permission_category ON roles_permissions.permission_category_id = permission_category.permission_category_id;
`;
  //  SELECT 
  //   *
  //   FROM roles r
  //   right JOIN roles_permissions rp ON r.role_id = rp.role_id
  //   right JOIN permission_category pc ON pc.permission_category_id = rp.permission_category_id
  //   ORDER BY r.role_id;
  

  const [results] = await db.execute(query);
  return results;
};
export const getPermissionById = async (role_id) => {
  console.log("entered in SQL ")
  const query = `

  SELECT * FROM roles_permissions where role_id=?`;
  // //   SELECT FROM roles r
  // //   right JOIN roles_permissions rp ON r.role_id = rp.role_id
  
    

  const [results] = await db.execute(query,[role_id]);
  return results;
};

export const getStaffByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM staff WHERE email = ? AND is_active = 1', [email]);

  return rows[0];
};

export const checkCreatePermissionForRole = async (role_id, permission_category_id) => {

    const query = `
      SELECT * FROM roles_permissions 
      WHERE role_id = ? AND permission_category_id = ? AND can_add = 1
    `;
    const [result] = await db.execute(query, [role_id, permission_category_id]);
    return result.length > 0;
  };

  export const checkEditPermissionForRole = async (role_id, permission_category_id) => {

    const query = `
      SELECT * FROM roles_permissions 
      WHERE role_id = ? AND permission_category_id = ? AND can_edit = 1
    `;
    const [result] = await db.execute(query, [role_id, permission_category_id]);
    return result.length > 0;
  };

  export const checkDeletePermissionForRole = async (role_id, permission_category_id) => {

    const query = `
      SELECT * FROM roles_permissions 
      WHERE role_id = ? AND permission_category_id = ? AND can_delete = 1
    `;
    const [result] = await db.execute(query, [role_id, permission_category_id]);
    return result.length > 0;
  };


  export const admission_enquiry = async (
    feature) => {
    const query = `
      INSERT INTO enquiry 
      (name, contact, address, reference, date, description, follow_up_date, note, source, email, assigned, class_id, no_of_child, status, created_by)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    try {
      const [result] = await db.execute(query, [
        feature.name,
                    feature.contact,
                    feature.address,
                    feature.reference,
                    feature.date,
                    feature.description,
                    feature.follow_up_date,
                    feature.note,
                    feature.source,
                    feature.email,
                    feature.assigned,
                    feature.class_id,
                    feature.no_of_child,
                    feature.status,
                    feature.created_by
      ]);
      return result.insertId; // Return the ID of the inserted row
    } catch (error) {
      console.error('Error while inserting into enquiry table:', error.message);
      throw error;
    }
  };
  
  export const updateAdmissionEnquiry = async (enquiry_id, feature) => {
    const query = `
      UPDATE enquiry
      SET
        name = ?,
        contact = ?,
        address = ?,
        reference = ?,
        date = ?,
        description = ?,
        follow_up_date = ?,
        note = ?,
        source = ?,
        email = ?,
        assigned = ?,
        class_id = ?,
        no_of_child = ?,
        status = ?,
        created_by = ?
      WHERE enquiry_id = ?
    `;
  
    try {
      const [result] = await db.execute(query, [
        feature.name,
        feature.contact,
        feature.address,
        feature.reference,
        feature.date,
        feature.description,
        feature.follow_up_date,
        feature.note,
        feature.source,
        feature.email,
        feature.assigned,
        feature.class_id,
        feature.no_of_child,
        feature.status,
        feature.created_by,
        enquiry_id, // Ensure this is the unique identifier for the record
      ]);
  
      if (result.affectedRows === 0) {
        throw new Error('No records updated. Please check the enquiry_id.');
      }
  
      return result.affectedRows; // Return the number of affected rows
    } catch (error) {
      console.error('Error while updating enquiry table:', error.message);
      throw error;
    }
  };
  

  export const checkRoleCreatePermission = async (role_id) => {

    const query = `
      SELECT * FROM roles_permissions
      WHERE role_id = ? AND permission_category_id = 149 AND can_add = 1
    `;
    const [result] = await db.execute(query, [role_id]);
    return result.length > 0;
  };

  export const checkRoleEditPermission = async (role_id) => {

    const query = `
      SELECT * FROM roles_permissions 
      WHERE role_id = ? AND permission_category_id = 149  AND can_edit = 1
    `;
    const [result] = await db.execute(query, [role_id]);
    return result.length > 0;
  };

  export const checkRoleDeletePermission = async (role_id) => {

    const query = `
      SELECT * FROM roles_permissions 
      WHERE role_id = ?  AND permission_category_id = 149  AND can_delete = 1
    `;
    const [result] = await db.execute(query, [role_id]);
    return result.length > 0;
  };

  export const checkRoleViewPermission = async (role_id) => {

    const query = `
      SELECT * FROM roles_permissions 
      WHERE role_id = ?  AND permission_category_id = 149  AND can_view = 1
    `;
    const [result] = await db.execute(query, [role_id]);
    return result.length > 0;
  };


  export const getAllDepartments = async () => {
    try {
      const [rows] = await db.execute('SELECT * FROM department WHERE is_active = 1'); // Assuming you only want active departments
      return rows.length > 0 ? rows : null; // Return the results or null if no departments are found
    } catch (error) {
      console.error('Database Error (getAllDepartments):', error.message);
      throw error;
    }
  };
  
  export const getAllDesignations = async () => {
    try {
      const [rows] = await db.execute('SELECT * FROM staff_designation WHERE is_active = 1'); // Filter for active designations
      return rows.length > 0 ? rows : null; // Return the designations or null if not found
    } catch (error) {
      console.error('Database Error (getAllDesignations):', error.message);
      throw error;
    }
  };
  

  export const getAllCate = async () => {
    console.log("entered in SQL ")
    const query = `
   SELECT 
    pg.name AS module,
    pc.*
FROM 
    permission_category pc
JOIN 
    permission_group pg 
ON 
    pc.permission_group_id = pg.permission_group_id`;
    
  
    const [results] = await db.execute(query);
    return results;
  };