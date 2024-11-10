import React, { useEffect, useState } from "react";
import "./HRDashboard.css"

const HRDashboard = () => {
    const [labours, setLabours] = useState([]);
    const [attendance, setAttendance] = useState({
        user: "",
        date: "",
        inTime: "",
        outTime: ""
    });

    useEffect(() => {
        fetch("http://localhost:4000/api/hr/labours")
            .then(response => response.json())
            .then(data => setLabours(data))
            .catch(error => console.log(error));
    }, []);

    const handleAttendanceSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/api/hr/attendance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(attendance)
        })
        .then(response => response.json())
        .then(() => {
            alert("Attendance added successfully");
            setAttendance({ user: "", date: "", inTime: "", outTime: "" });
        })
        .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>HR Dashboard</h1>
            <h2>Labour List</h2>
            <ul>
                {labours.map(labour => (
                    <li key={labour._id}>
                        {labour.name} - Area: {labour.area}
                    </li>
                ))}
            </ul>

            <h2>Record Attendance</h2>
            <form onSubmit={handleAttendanceSubmit}>
                <input
                    type="text"
                    placeholder="User ID"
                    value={attendance.user}
                    onChange={(e) => setAttendance({ ...attendance, user: e.target.value })}
                />
                <input
                    type="date"
                    value={attendance.date}
                    onChange={(e) => setAttendance({ ...attendance, date: e.target.value })}
                />
                <input
                    type="time"
                    placeholder="In Time"
                    value={attendance.inTime}
                    onChange={(e) => setAttendance({ ...attendance, inTime: e.target.value })}
                />
                <input
                    type="time"
                    placeholder="Out Time"
                    value={attendance.outTime}
                    onChange={(e) => setAttendance({ ...attendance, outTime: e.target.value })}
                />
                <button type="submit">Submit Attendance</button>
            </form>
        </div>
    );
};

export default HRDashboard;
