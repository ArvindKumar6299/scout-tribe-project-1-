import React from 'react';
import {BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./pages/home"
import {Admin} from "./pages/admin"
import {Login} from "./pages/login"
import {Register} from "./pages/register"
import {AdminDashboard} from "./components/AdminDashboard"
import SalesManagerDashboard from "./components/SalesManagerDashboard"
import Labour from "./components/LabourDetails"
import HRDashboard from "./components/HRDashboard"
import  SalesManagerLogin  from '../custom_login/SalesManagerLogin';
import {AdminLogin} from "../custom_login/AdminLogin"
import {HrLogin} from "../custom_login/HrLogin"
import {LabourLogin} from "../custom_login/LabourLogin"
// import  SalesManagerDashboard  from './components/SalesManagerDashboard';
// import { Navbar } from "./components/Navbar";

// const PrivateRoute = ({ children, role }) => {
//   const userRole = localStorage.getItem("role"); // replace with context or global state for better security
//   return userRole === role ? children : <Navigate to="/" />;
// };

const App = ()=>{
  return (
     <>
    
    <BrowserRouter  future={{v7_relativeSplatPath: true, v7_startTransition: true }}>
     {/* <Navbar/>   to visible in every page */}
    <Routes>
       <Route path="/" element={<Home/>}  />
       <Route path="/admin" element={<Admin/>}  />
       <Route path="/r" element={<Register/>}  />
       <Route path="/login" element={<Login/>}  />
       <Route path="/adminDashboard"  element={<AdminDashboard/>} />
       <Route  path="/sales-manager-dashboard"  element={<SalesManagerDashboard/>} />
       <Route path="/labour" element={<Labour/>} />
       <Route path="/hrDashboard" element={<HRDashboard/>} />
       <Route path="/salesmanagerlogin" element={<SalesManagerLogin/>} />
       <Route path="/labourlogin" element={<LabourLogin />} />
       <Route path="/hrlogin" element={<HrLogin />} />
       <Route path="adminlogin" element={<AdminLogin />} />
       {/* <Route path="/adminDashboard" element={<PrivateRoute role="Admin"><AdminDashboard /></PrivateRoute>} /> */}
       {/* <Route path="/salesManager" element={<SalesManager/>} />
       <Route path="/hr" element={<Hr/>} />
       <Route path="/labours" element={<Labours/>} /> */}

    </Routes>
    </BrowserRouter>

    </>
  )
}


export default App;