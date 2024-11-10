import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (role) => {
    switch (role) {
      case 'HR':
        navigate('/hrlogin');
        break;
      case 'Admin':
        navigate('/adminlogin');
        break;
      case 'Manager':
        navigate('/salesmanagerlogin');
        break;
      case 'Labour':
        navigate('/labourlogin');
        break;
      default:
        break;
    }
  };

  return (
    <div>
        <h1 >Scout Tribe</h1>
    <div className="role-selection">
      <div className="box" onClick={() => handleNavigation('HR')}>
        You are HR
      </div>
      <div className="box" onClick={() => handleNavigation('Admin')}>
        You are Admin
      </div>
      <div className="box" onClick={() => handleNavigation('Manager')}>
        You are Manager
      </div>
      <div className="box" onClick={() => handleNavigation('Labour')}>
        You are Labour
      </div>
    </div>
    </div>
  );
};

export default Home;
