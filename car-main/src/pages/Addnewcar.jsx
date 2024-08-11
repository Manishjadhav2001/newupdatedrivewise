import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function AddNewCar() {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* Main Content */}
      <div className="d-flex justify-content-center align-items-center flex-grow-1 my-4">
        <div className="border p-4 rounded shadow" style={{ width: '100%', maxWidth: '600px' }}>
          <h2 className="text-center mb-4">Add New Car Details</h2>
          <form id="register" method="post">
            <div className="mb-3">
              <label htmlFor="carName" className="form-label">Car Name:</label>
              <input type="text" name="carName" id="carName" className="form-control" placeholder="Enter Car Name" />
            </div>

            <div className="mb-3">
              <label htmlFor="carBrand" className="form-label">Car Brand:</label>
              <input type="text" name="carBrand" id="carBrand" className="form-control" placeholder="Enter Car Brand" />
            </div>

            <div className="mb-3">
              <label htmlFor="features" className="form-label">Features:</label>
              <input type="text" name="features" id="features" className="form-control" placeholder="Enter Features" />
            </div>

            <div className="mb-3">
              <label htmlFor="registrationNumber" className="form-label">Registration Number:</label>
              <input type="text" id="registrationNumber" name="registrationNumber" className="form-control" pattern="[0-9]{10}" placeholder="1234567890" required />
            </div>

            <div className="mb-3">
              <label htmlFor="licenseImage" className="form-label">Add License Image:</label>
              <input type="file" name="licenseImage" id="licenseImage" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="carImage" className="form-label">Add Car Image:</label>
              <input type="file" name="carImage" id="carImage" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>

      
    </div>
  );
}