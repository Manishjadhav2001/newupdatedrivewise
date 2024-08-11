import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/userDashboard.css";
import userData from '../assets/data/userData';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserDashboard() {
  const [user, setUser] = useState(userData || { name: 'Guest' });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };


  return (
    <div className="dashboard">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* Optionally add some other content or leave it empty */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link  className="nav-link" to="/userProfile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cars">
                  View Cars
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1 className="welcome-message">Welcome, {user.name}!</h1>
        <p className="description">
          You are now logged in. You can view cars or book a car now.
        </p>
        <button
          className="btn btn-primary view-cars-btn"
          onClick={() => navigate('/cars')}
        >
          View Booked Cars
        </button>
       
      </div>
    </div>
  );
}

export default UserDashboard;
