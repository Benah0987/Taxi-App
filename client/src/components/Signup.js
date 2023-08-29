import React, { useState } from 'react';
import './Signup.css';
import Swal from 'sweetalert2';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [carDetails, setCarDetails] = useState('');
  const [profilePicture, setProfilePicture] = useState(''); // Add this line
  const [carImage, setCarImage] = useState(''); // Add this line


  const location = useLocation();
  const navigate = useNavigate();

  const userType = new URLSearchParams(location.search).get('type');

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (userType === 'driver' && (!carDetails || !profilePicture || !carImage)) {
    // Show an error if any of the driver fields are missing
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Please fill in all driver information fields',
    });
    return;
  }

  const newUser = {
    name: fullName,
    email: email,
    password: password,
    phone_number: phone,
    car_details: carDetails,
    profile_picture: profilePicture,
    car_image: carImage,
  };

  const endpoint = userType === 'driver' ? 'http://127.0.0.1:3000/drivers' : 'http://127.0.0.1:3000/users'

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        // User created successfully
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'User created successfully',
        });

        // Redirect to login pages
        navigate(`/login?type=${userType}`);
      } else {
        // Error creating user
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Error creating user',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      // Show error using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred',
      });
    }
  };

  const renderDriverFields = () => {
    if (userType === 'driver') {
      return (
        <>
          <div className="form-group input-group input-group-spacing">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-car"></i> </span>
            </div>
            <input className="form-control" placeholder="Car Details" type="text" onChange={(e) => setCarDetails(e.target.value)} />
          </div>
          <div className="form-group input-group input-group-spacing">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-image"></i> </span>
            </div>
            <input className="form-control" placeholder="Profile Picture URL" type="text" onChange={(e) => setProfilePicture(e.target.value)} />
          </div>
          <div className="form-group input-group input-group-spacing">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-image"></i> </span>
            </div>
            <input className="form-control" placeholder="Car Image URL" type="text" onChange={(e) => setCarImage(e.target.value)} />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark " style={{ minHeight: '100vh',  backgroundSize: 'cover', backgroundImage: 'url(https://images.unsplash.com/photo-1556122071-e404eaedb77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGF4aXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)' }}>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center d-flex-row text-center h-100">
          <div className="col-12 col-md-4 col-lg-3 h-50">
            <div className="card shadow">
              <div className="card-body mx-auto">
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p className="text-center">Get moving with Movit</p>

                <form onSubmit={handleSubmit} className='w-80'>
                  <div className="form-group input-group input-group-spacing">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                    </div>
                    <input className="form-control" placeholder="Full name" type="text" onChange={(e) => setFullName(e.target.value)} />
                  </div>
                  <div className="form-group input-group input-group-spacing">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                    </div>
                    <input className="form-control" placeholder="Email address" type="email" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group input-group input-group-spacing">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input className="form-control" placeholder="Create password" type="password" onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="form-group input-group input-group-spacing">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-phone" style={{ color: 'black' }}></i> </span>
                    </div>
                    <input className="form-control" placeholder="Phone no." type="text" onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  {renderDriverFields()}
                  <div className="form-group">
                    <button type="submit" className="btn btn-warning btn-block"> Create Account </button>
                  </div>
                  <p className="text-center">
                    Have an account? <Link to={`/login?type=${userType}`}>Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
