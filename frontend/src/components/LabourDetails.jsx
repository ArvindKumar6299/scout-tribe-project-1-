import React from "react";
import "./LabourDetails.css"; // Import the CSS file

const LabourDetails = () => {
    // Static data for the labour (no fetch required)
    const labour = {
        name: "John Doe",
        area: "Construction Site A",
        assignedManager: { username: "Manager123" },
        tasks: ["Digging", "Concrete Pouring", "Brick Laying"]
    };

    return (
        <div className="labour-details-container">
            <div className="labour-details">
                <h1 className="labour-name">{labour.name}</h1>
                <div className="labour-info">
                    <p><strong>Area:</strong> {labour.area}</p>
                    <p><strong>Assigned Manager:</strong> {labour.assignedManager.username}</p>
                    <p><strong>Tasks:</strong> {labour.tasks.join(", ")}</p>
                </div>
            </div>
        </div>
    );
};

export default LabourDetails;









// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./LabourDetails.css"; // Import the CSS file

// const LabourDetails = () => {
//     const { id } = useParams();
//     const [labour, setLabour] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);

//     useEffect(() => {
//         fetch(`http://localhost:4000/api/labour/${id}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch labour data");
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setLabour(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error(error);
//                 setError(true);
//                 setLoading(false);
//             });
//     }, [id]);

//     return (
//         <div className="labour-details-container">
//             {loading ? (
//                 <div className="loading-container">
//                     <p>Loading...</p>
//                 </div>
//             ) : error ? (
//                 <div className="error-container">
//                     <p>Unable to fetch labour details. Please try again later.</p>
//                 </div>
//             ) : (
//                 <div className="labour-details">
//                     <h1 className="labour-name">{labour.name}</h1>
//                     <div className="labour-info">
//                         <p><strong>Area:</strong> {labour.area}</p>
//                         <p><strong>Assigned Manager:</strong> {labour.assignedManager.username}</p>
//                         <p><strong>Tasks:</strong> {labour.tasks.join(", ")}</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default LabourDetails;




// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";

// // const LabourDetails = () => {
// //     const { id } = useParams();
// //     const [labour, setLabour] = useState(null);

// //     useEffect(() => {
// //         fetch(`http://localhost:4000/api/labour/${id}`)
// //             .then(response => response.json())
// //             .then(data => setLabour(data))
// //             .catch(error => console.log(error));
// //     }, [id]);

// //     return (
// //         <div>
// //             {labour ? (
// //                 <div>
// //                     <h1>{labour.name}</h1>
// //                     <p>Area: {labour.area}</p>
// //                     <p>Assigned Manager: {labour.assignedManager.username}</p>
// //                     <p>Tasks: {labour.tasks.join(", ")}</p>
// //                 </div>
// //             ) : (
// //                 <p>Loading...</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default LabourDetails;
