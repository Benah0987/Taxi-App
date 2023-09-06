import React, { createContext, useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const nav = useNavigate();
  const location = useLocation();

  // Define state variables for user information
  const [currentUser, setCurrentUser] = useState(null);
  const [onChange, setOnChange] = useState(false); // Add the onChange state

  // Function to log in
  const login = async (email, password) => {
    const userType = new URLSearchParams(location.search).get('type');
    const loginEndpoint = userType === 'driver' ? '/driver/login' : '/user/login';

    try {
      const response = await fetch(`http://127.0.0.1:3000${loginEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Logged in successfully',
        });

        nav('/home');
        setOnChange(!onChange); // Trigger onChange to fetch the current user
        return true; // Return true to indicate a successful login
      } else {
        // Error logging in
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Invalid email or password',
        });
        return false; // Return false to indicate a failed login
      }
    } catch (error) {
      console.error('Error:', error);
      // Show error using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred',
      });
      return false; // Return false in case of an error
    }
  };

  // Function to sign up
  const signup = async (fullName, email, password, phone, carDetails, profilePicture, carImage) => {
    const userType = new URLSearchParams(location.search).get('type');
    const endpoint = userType === 'driver' ? '/drivers' : '/users';

    try {
      const newUser = {
        name: fullName,
        email: email,
        password: password,
        phone_number: phone,
        car_details: carDetails,
        profile_picture: profilePicture,
        car_image: carImage,
      };

      const response = await fetch(`http://127.0.0.1:3000${endpoint}`, {
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
        nav(`/login?type=${userType}`);
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

  // Function to log out
  const logout = async () => {
    // Implement logout logic similar to your Logout component
    // ...

    // Example:
    // const endpoint = '/api/auth/logout'; // Adjust the endpoint

    // try {
    //   const response = await fetch(endpoint, {
    //     method: 'DELETE',
    //   });

    //   if (response.ok) {
    //     setCurrentUser(null); // Clear the current user
    //     nav('/');
    //   } else {
    //     // Handle logout error
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Error!',
    //       text: 'Error logging out',
    //     });
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   // Show error using SweetAlert
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error!',
    //     text: 'An error occurred',
    //   });
    // }
  };

  // Function to check if the logged-in user is the current user
const isCurrentUser = (userId) => {
  if (currentUser && currentUser.id === userId) {
    return true;
  }
  return false;
};

// Fetch current user on component mount
useEffect(() => {
  const userType = new URLSearchParams(location.search).get('type');
  const endpoint = userType === 'driver' ? '/driver/current_driver' : '/user/current_user';

  fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      if (data) {
        setCurrentUser(data);
        console.log('Current User:', data); // Add this log
      } else {
        console.log('No user data available'); // Add this log
      }
    });
}, [onChange, location]); // Include onChange in the dependencies

const contextData = {
  login,
  signup,
  logout,
  currentUser,
  isCurrentUser, // Include the isCurrentUser function in the context
};

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const contextData = useContext(AuthContext);
  if (!contextData) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return contextData;
};
