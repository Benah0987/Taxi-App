import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Home() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:3000/ride_requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        //  user : 6,
          pickup_location: pickupLocation,
          dropoff_location: dropoffLocation,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your ride request has been submitted.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while submitting your ride request.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while submitting your ride request.',
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" >
          <div className="featured-image mb-3">
            <img src="https://images.unsplash.com/photo-1593465678160-f99a8371fcf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRheGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid" alt="Featured" />
          </div>
          <p className="text-white fs-2" style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 600 }}>Be Verified</p>
          <small className="text-white text-wrap text-center" style={{ width: '17rem',color:'black', fontFamily: 'Courier New, Courier, monospace' }}>Join experienced Designers on this platform.</small>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Book a Ride</h2>
              <p>We are happy to have you back.</p>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Pickup Location"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Dropoff Location"
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <button type="submit" className="btn btn-lg btn-warning w-60 fs-6 d-flex justify-content-center align-items-center">
                  Request Ride
                </button>
              </div>
            </form>
            {/* ... Other buttons and content */}
          </div>
        </div>
      </div>
  )</div>
  );
}

export default Home;
