// import React, { useEffect, useState } from "react";

// const SalesManagerDashboard = ({ salesManagerId }) => {
//     const [salesData, setSalesData] = useState([]);
//     const [newSale, setNewSale] = useState({ amount: "" });

//     useEffect(() => {
//         fetch(`http://localhost:4000/api/salesManager/${salesManagerId}/sales`)
//             .then(response => response.json())
//             .then(data => 
                
//                 setSalesData(data))
//             .catch(error => console.log(error));
//     }, [salesManagerId]);

//     const handleAddSale = (e) => {
//         e.preventDefault();
//         fetch("http://localhost:4000/api/salesManager/sales", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ salesManagerId, amount: newSale.amount })
//         })
//         .then(response => response.json())
//         .then(data => {
//             alert("Sales record added successfully!");
//             setSalesData([...salesData, data.newSalesRecord]);
//             setNewSale({ amount: "" });
//         })
//         .catch(error => console.log(error));
//     };

//     return (
//         <div>
//             <h1>Sales Manager Dashboard</h1>
//             <h2>Sales Data</h2>
//             <ul id="ulList">
//                 {salesData.map(sale => (
//                     <li key={sale._id} className="list">
//                         Date: {new Date(sale.date).toLocaleDateString()}, Amount: ${sale.amount}
//                     </li>
//                 ))}
//             </ul>

//             <h2>Add New Sales Record</h2>
//             <form onSubmit={handleAddSale}>
//                 <input
//                     type="number"
//                     placeholder="Sale Amount"
//                     value={newSale.amount}
//                     onChange={(e) => setNewSale({ amount: e.target.value })}
//                 />
//                 <button type="submit">Add Sale</button>
//             </form>
//         </div>
//     );
// };

// export default SalesManagerDashboard;




// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./SalesManagerDashboard.css"; // Make sure to create this CSS file

// // export const SalesManagerDashboard = () => {
// //   const [salesData, setSalesData] = useState([]);
  
// //   useEffect(() => {
// //     // Fetch sales data when the component mounts
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get("/api/sales/data"); // Adjust API endpoint
// //         setSalesData(response.data);
// //       } catch (error) {
// //         console.error("Error fetching sales data:", error);
// //       }
// //     };
// //     fetchData();
// //   }, []);
  
// //   return (
// //     <div className="dashboard-container">
// //       <h1>Sales Manager Dashboard</h1>
// //       <div className="sales-cards">
// //         {salesData.map((sale, index) => (
// //           <div className="sale-card" key={index}>
// //             <h3>{sale.productName}</h3>
// //             <p><strong>Quantity Sold:</strong> {sale.quantity}</p>
// //             <p><strong>Revenue:</strong> ${sale.revenue}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SalesManagerDashboard;

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./SalesManagerDashboard.css";

// // export const SalesManagerDashboard = () => {
// //   const [salesData, setSalesData] = useState([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get("/api/sales/data");
// //         // Ensure data is an array before setting it to state
// //         setSalesData(Array.isArray(response.data) ? response.data : []);
// //       } catch (error) {
// //         console.error("Error fetching sales data:", error);
// //         setError("Failed to fetch sales data. Please try again.");
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   if (error) {
// //     return <div className="error-message">{error}</div>;
// //   }

// //   return (
// //     <div className="dashboard-container">
// //       <h1>Sales Manager Dashboard</h1>
// //       <div className="sales-cards">
// //         {salesData.length > 0 ? (
// //           salesData.map((sale, index) => (
// //             <div className="sale-card" key={index}>
// //               <h3>{sale.productName}</h3>
// //               <p><strong>Quantity Sold:</strong> {sale.quantity}</p>
// //               <p><strong>Revenue:</strong> ${sale.revenue}</p>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No sales data available.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SalesManagerDashboard;




// // // // components/SalesManagerDashboard.js
// // // import React, { useContext, useEffect, useState } from 'react';
// // // import { AuthContext } from '../context/Authcontext';
// // // import axios from 'axios';

// // // export const SalesManagerDashboard = () => {
// // //   const { user } = useContext(AuthContext);
// // //   const [data, setData] = useState(null);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const res = await axios.get('/api/salesManager/dashboard', {
// // //           headers: { Authorization: `Bearer ${user.token}` },
// // //         });
// // //         setData(res.data.message);
// // //       } catch (error) {
// // //         console.error('Error fetching dashboard data:', error);
// // //       }
// // //     };
// // //     fetchData();
// // //   }, [user.token]);

// // //   return <div>{data ? <h1>{data}</h1> : <p>Loading...</p>}</div>;
// // // };



import React, { useState } from "react";
import "./SalesManagerDashboard.css"; // Import CSS file

const SalesManagerDashboard = () => {
    // Static sales data for demonstration
    const [salesData] = useState([
        { id: 1, date: "2024-11-01", amount: 1500 },
        { id: 2, date: "2024-11-02", amount: 1200 },
        { id: 3, date: "2024-11-03", amount: 1800 },
        { id: 4, date: "2024-11-04", amount: 2000 },
        { id: 5, date: "2024-11-05", amount: 1600 }
    ]);

    const [newSale, setNewSale] = useState({ amount: "" });

    const handleAddSale = (e) => {
        e.preventDefault();
        // Here we would add new sale logic, currently it's just a mock.
        alert("Sales record added successfully!");
        setNewSale({ amount: "" });
    };

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Sales Manager Dashboard</h1>

            <div className="sales-data-section">
                <h2 className="section-title">Sales Data</h2>
                <div className="sales-cards">
                    {salesData.map((sale) => (
                        <div className="sale-card" key={sale.id}>
                            <h3>Sale Date: {new Date(sale.date).toLocaleDateString()}</h3>
                            <p><strong>Amount:</strong> ${sale.amount}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="add-sale-section">
                <h2 className="section-title">Add New Sale Record</h2>
                <form onSubmit={handleAddSale}>
                    <input
                        type="number"
                        className="input-field"
                        placeholder="Enter Sale Amount"
                        value={newSale.amount}
                        onChange={(e) => setNewSale({ amount: e.target.value })}
                    />
                    <button type="submit" className="submit-btn">Add Sale</button>
                </form>
            </div>
        </div>
    );
};

export default SalesManagerDashboard;
