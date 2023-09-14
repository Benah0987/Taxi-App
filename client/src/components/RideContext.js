import React, { createContext, useContext, useState } from 'react';

const RideContext = createContext();

export const useRideContext = () => {
  return useContext(RideContext);
};

export function RideProvider({ children }) {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [ridePrice, setRidePrice] = useState(0);

  const updateRidePrice = () => {
    // Calculate a random ride price between $1500 and $300
    const randomPrice = Math.floor(Math.random() * (1500 - 300 + 1)) + 300;
    setRidePrice(randomPrice);
  };

  return (
    <RideContext.Provider
      value={{
        pickupLocation,            // Provide pickupLocation
        setPickupLocation,        // Provide setPickupLocation
        dropoffLocation,          // Provide dropoffLocation
        setDropoffLocation,      // Provide setDropoffLocation
        ridePrice,
        updateRidePrice,
      }}
    >
      {children}
    </RideContext.Provider>
  );
}

export default RideContext; // Export RideContext for Home.js
