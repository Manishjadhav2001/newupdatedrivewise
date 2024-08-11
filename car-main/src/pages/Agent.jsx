import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { FaCheckCircle } from 'react-icons/fa'; // Import Font Awesome checkmark icon
import { Link } from 'react-router-dom';

export default function Agent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><h4><b>Profile</b></h4></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><h3>Listed Cars</h3></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#"><h3>Logout</h3></a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
      <div className="text-center my-4">
        <h4 className="text-success d-flex align-items-center justify-content-center">
          <FaCheckCircle className="me-2" /> {/* Checkmark icon */}
          Logged in successfully
        </h4>
      </div>

      <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <img 
          src='https://zoomcar-assets.zoomcar.com/220445/HostCarImage/host_car_image_2204459d97da06-7b15-44db-ae0a-afec88e4b94b.jpg20230407-48-1gz1f1c' 
          className="rounded" 
          alt="Car 1"
          style={{ width: '300px', height: 'auto' }} // Adjust width and height as needed
        />
        <img 
          src='https://zoomcar-assets.zoomcar.com/220445/HostCarImage/host_car_image_2204459d97da06-7b15-44db-ae0a-afec88e4b94b.jpg20230407-48-1gz1f1c' 
          className="rounded" 
          alt="Car 2"
          style={{ width: '300px', height: 'auto' }} // Adjust width and height as needed
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Link to="/addnew">
          <button type="button" className="btn btn-warning">Add New Car</button>
        </Link>
      </div>
    </div>
  );
}