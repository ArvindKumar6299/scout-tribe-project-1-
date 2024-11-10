// AdminDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

export const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-sections">
        {/* Manage Sales Managers Section */}
        <div className="card">
          <h2>Manage Sales Managers</h2>
          <p>Add, update, or delete Sales Managers.</p>
          <button onClick={() => navigate("/sales-manager-dashboard")}>
            Go to Sales Managers
          </button>
        </div>

        {/* Manage Labours Section */}
        <div className="card">
          <h2>Manage Labours</h2>
          <p>Add, update, or delete Labours.</p>
          <button onClick={() => navigate("/labours")}>Go to Labours</button>
        </div>

        {/* View Locations Section */}
        <div className="card">
          <h2>View Locations</h2>
          <p>View the current locations of Sales Managers and Labours.</p>
          <button onClick={() => navigate("/hrDashboard")}>View Locations</button>
        </div>
      </div>
    </div>
  );
};

// export default AdminDashboard;






// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./AdminDashboard.css"

// export const AdminDashboard = ()=>{

//     const navigate = useNavigate();


//   return (
//     <div class="dashboard">
//     <h1>Admin Dashboard</h1>
//     <div class="dashboard-sections">
//         {/* <!-- Manage Sales Managers Section --> */}
//         <div class="card">
//             <h2>Manage Sales Managers</h2>
//             <p>Add, update, or delete Sales Managers.</p>
//             <button onclick={()=> navigate("/sales-manager-dashboard")}>Go to Sales Managers</button>
//         </div>

//         {/* <!-- Manage Labours Section --> */}
//         <div class="card">
//             <h2>Manage Labours</h2>
//             <p>Add, update, or delete Labours.</p>
//             <button onclick="manageLabours()">Go to Labours</button>
//         </div>

//         {/* <!-- View Locations Section --> */}
//         <div class="card">
//             <h2>View Locations</h2>
//             <p>View the current locations of Sales Managers and Labours.</p>
//             <button onclick="viewLocations()">View Locations</button>
//         </div>
//     </div>
// </div>
//   )
// }





// // import React from 'react';
// // import "./AdminDashboard.css"

// // export const AdminDashboard = () => {
// //   return (
// //     <div className="admin-dashboard">
// //       <h2>Admin Dashboard</h2>
// //       <div className="dashboard-section">
// //         <h3>Manage Sales Managers</h3>
// //         <button>Add New Manager</button>
// //         <button>View All Managers</button>
// //       </div>
// //       <div className="dashboard-section">
// //         <h3>Manage Labours</h3>
// //         <button>Add New Labour</button>
// //         <button>View All Labours</button>
// //       </div>
// //       <div className="dashboard-section">
// //         <h3>View Locations</h3>
// //         <button>Track Sales Manager Locations</button>
// //         <button>Track Labour Locations</button>
// //       </div>
// //     </div>
// //   );
// // };