import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useAuth } from './AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  console.log('currentUser:', currentUser); // Add this line to check the currentUser value

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userCredentials = {
      email: email,
      password: password,
    };

    const userType = new URLSearchParams(location.search).get('type');
    const loginEndpoint = userType === 'driver' ? '/driver/login' : '/user/login';

    try {
      const response = await fetch(`http://127.0.0.1:3000${loginEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      if (response.ok) {
        // Fetch and display the current user information
        const userResponse = await fetch(`http://127.0.0.1:3000/${userType}/current_${userType}`);
        console.log('Response Status:', userResponse.status);
        const userData = await userResponse.json();
        console.log('Current User Data:', userData);
        

        // Login successful
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Logged in successfully',
        });

        navigate('/home');
      } else {
        // Error logging in
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Invalid email or password',
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
  const signUpLink = `/SignUp?type=${location.search.split('=')[1]}`;

  return (
    <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark" style={{ minHeight: '100vh', backgroundSize: 'cover', backgroundImage: 'url(https://images.unsplash.com/photo-1556122071-e404eaedb77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGF4aXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)' }}>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center d-flex-row text-center h-100">
          <div className="col-12 col-md-4 col-lg-3 h-50">
            <div className="card shadow">
              <div className="card-body mx-auto">
                <h4 className="card-title mt-3 text-center">Log In</h4>
                <p className="text-center">Get moving with Movit</p>
                
                <form onSubmit={handleSubmit}>
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
                    <input className="form-control" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-warning btn-block"> Log In </button>
                  </div>
                  {currentUser && (
                    <p className="text-center">Logged in as: {currentUser.name}</p>
                  )}
                  <p className="text-center">
                    Don't have an account? <Link to={signUpLink}>Create Account</Link>
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

export default Login;
