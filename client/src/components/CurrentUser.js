import React, { useEffect, useState } from 'react';

function CurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Make a GET request to fetch the current user
    fetch('/user/current_user')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Set the current user in state
        setCurrentUser(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h2>Current User</h2>
      {currentUser ? (
        <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      ) : (
        <p>No current user found.</p>
      )}
    </div>
  );
}

export default CurrentUser;
