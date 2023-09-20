import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router';
import { useRideContext } from './RideContext'; // Import useRideContext





function Home() {
  const { pickupLocation, setPickupLocation, dropoffLocation, setDropoffLocation } =  useRideContext();
 
  const [driverName, setDriverName] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // if (!currentUser) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'User is not logged in.',
    //   });
    //   return;
    // }

    // if (!isCurrentUser(currentUser.id)) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'You are not the currently logged-in user.',
    //   });
    //   return;
    // }

    try {
      const response = await fetch(`http://127.0.0.1:3000/users/1/ride_requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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
        navigate('/payment');
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

  const rideData = [
    {
      id: 1,
      driverName: 'Omondi Oyolla',
      driverImage: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      imageUrl: 'https://images.unsplash.com/photo-1603982449700-534948b9e408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGltb3VzaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      driverName: 'Bo Burnham',
      driverImage: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      imageUrl: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVlcCUyMHdyYW5nbGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    // Add more ride data as needed
    {
      id: 3,
      driverName: 'Jane Smith',
      driverImage: 'https://images.unsplash.com/photo-1565884280295-98eb83e41c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      imageUrl: 'https://images.unsplash.com/photo-1622551997608-400d763b0f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lcmNlZGVzJTIwYmVuenxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      driverName: 'Jane Delulu',
      driverImage: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      imageUrl: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwbWFuJTIwd2l0aCUyMGElMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 5,
      driverName: 'Ali Mohammed',
      driverImage: 'https://plus.unsplash.com/premium_photo-1664297846665-43cf51ec4597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661421624512-d454a41ce189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
  ];
 
  
  const bookRide = (driverName) => {
    // Show a SweetAlert with the driver's name
    Swal.fire({
      icon: 'success',
      title: 'Ride Requested',
      text: `${driverName} is coming to pick you up.`,
    });

    // Delay the navigation to the payment form by 5 seconds
    setTimeout(() => {
      navigate('/payment'); // Navigate to the payment form
    }, 5000); // 5000 milliseconds (5 seconds)
  };


  return (
  <diV>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
          <div className="featured-image mb-3">
            <img src="https://images.unsplash.com/photo-1593465678160-f99a8371fcf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRheGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid" alt="Featured" />
          </div>
          <p className="text-white fs-2" style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 600 }}>Be Verified</p>
          <small className="text-white text-wrap text-center" style={{ width: '17rem', color: 'black', fontFamily: 'Courier New, Courier, monospace' }}>Join experienced Designers on this platform.</small>
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
                <button
                  type="submit"
                  className="btn btn-lg btn-warning w-60 fs-6 d-flex justify-content-center align-items-center"
                >
                  Request Ride
                </button>
              </div>
            </form>
            {/* ... Other buttons and content */}
          </div>
        </div>

        
      </div>
      
    </div>
    <div className="col-md-12 mt-4 p-5">
  <div className="p-4">
    <h2 style={{ color: '#A82C48' }}>Choose your rides</h2>
  </div>
  <div className="row">
  
      {rideData.map((ride) => (
        <div key={ride.id} className="col-md-4">
          <div className="card mb-3">
            <img
              src={ride.imageUrl}
              className="card-img-top"
              alt={`Ride with ${ride.driverName}`}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
              }}
            />
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <img
                  src={ride.driverImage}
                  alt={`Driver ${ride.driverName}`}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <h5 className="card-title ml-2">{ride.driverName}</h5>
              </div>
              <button
                  className="btn btn-warning"
                  onClick={() => bookRide(ride.driverName)}
                >
                  Book Ride
                </button>
            </div>
          </div>
        </div>
      ))}

      
    

  </div>
</div>



    </diV>
  );
}

export default Home;
