import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import axios from 'axios';


  const AddNewCar = () => {

    const [fname, setFirstName] = useState("")
    const [lname, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [mobilenumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("Medium")
  
    const onOptionChange = e => {
      setRole(e.target.value)
    }
  
  
    async function SignUp(e) {
      e.preventDefault();
      let item = { fname, lname, address, mobilenumber, email, username, password, role }
     console.warn(item)
  
      // let result = await fetch("http://localhost:7350/user/add", {
      //   method: "POST",
      //   body: JSON.stringify(item),
      //   headers: {
      //     "content-type": "application/json",
      //     "Accept": "application/json"
      //   }
      // })
  
      axios.post("http://localhost:7350/user/add",{
        firstName: fname, 
        lastName: lname,
        phoneNo:mobilenumber,
        email:email,
        address:address,
        userName:username,
        password:password,
        role:role,
      }).then((res)=>{
        console.log(res.data);
        
      }).catch((err)=>{
        console.log(err);
        
      })
      //  result = await result.json()
      //  console.warn("result", result)
    }
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* Main Content */}
      <div className="d-flex justify-content-center align-items-center flex-grow-1 my-4">
        <div className="border p-4 rounded shadow" style={{ width: '100%', maxWidth: '600px' }}>
          <h2 className="text-center mb-4">Add New Car Details</h2>
          <form id="register" method="post">
            <div className="mb-3">
              <label htmlFor="carName" className="form-label">Car Brand:</label>
              <input type="text" name="carName" id="carName" className="form-control" placeholder="Enter Car Name" />
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
              <label htmlFor="licenseImage" className="form-label">Add Rc-book Image:</label>
              <input type="file" name="licenseImage" id="licenseImage" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="carImage" className="form-label">Add Car Image:</label>
              <input type="file" name="carImage" id="carImage" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="features" className="form-label">Car Type</label>
              <input type="text" name="features" id="features" className="form-control" placeholder="Enter Features" />
            </div>

            <div className="mb-3">
              <label htmlFor="features" className="form-label">Price</label>
              <input type="text" name="features" id="features" className="form-control" placeholder="Enter Features" />
            </div>

            <div className="mb-3">
              <label htmlFor="features" className="form-label">Model</label>
              <input type="text" name="features" id="features" className="form-control" placeholder="Enter Features" />
            </div>

            <div className="mb-3">
              <label htmlFor="features" className="form-label">Color</label>
              <input type="text" name="features" id="features" className="form-control" placeholder="Enter Features" />
            </div>

            <input
        type="radio"
        name="role"
        value="Customer"
        id="customer"
        checked={role === "Customer"}
        onChange={onOptionChange}
      />
      <label htmlFor="regular"><h5>Normal Car</h5></label>

      <input
        type="radio"
        name="role"
        value="Agent"
        id="agent"
        checked={role === "Agent"}
        onChange={onOptionChange}
      />
      <label htmlFor="medium"><h5>Vintage car</h5></label>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>

      
    </div>
  );
}
export default AddNewCar;