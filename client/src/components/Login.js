import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null); // State to hold the current user data

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/user/current_user`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setCurrentUser(userData); // Set the current user in state
        } else {
          console.error('Failed to fetch current user data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Fetch current user data if there is a session
    fetchCurrentUser();
  }, []); // Empty dependency array means this effect runs once

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
        // Login successful
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Logged in successfully',
        });
  
        // Fetch the current user data after successful login
        const userResponse = await fetch(`http://127.0.0.1:3000/user/current_user`);
        console.log('Response Status:', userResponse.status);
  
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setCurrentUser(userData); // Set the current user in state
          console.log('Current User Data:', userData);
        } else {
          // Handle the case where fetching current user data fails
          console.error('Failed to fetch current user data');
        }
  
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
