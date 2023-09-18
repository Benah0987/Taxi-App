import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useRideContext } from './RideContext'; // Import updateRidePrice from context
import { useNavigate } from 'react-router-dom';

function Payment() {
  const { pickupLocation, dropoffLocation, ridePrice, updateRidePrice } = useRideContext(); // Use the context
  const [activeTab, setActiveTab] = useState('credit-card'); // Initialize the active tab state
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize the ride price when the component mounts
    updateRidePrice();
  }, []); // The empty dependency array ensures this effect runs once on component mount

  const handleTabChange = (tabId) => {
    setActiveTab(tabId); // Update the active tab when a navigation link is clicked
  };

  const handleConfirmPayment = () => {
    updateRidePrice();
    const formattedPrice = `Ksh ${ridePrice}`; // Format the price

    // Check if both required fields are filled
    if (!(formData.username && formData.cardNumber)) {
      Swal.fire({
        title: 'Error',
        text: 'Please fill in all required fields.',
        icon: 'error',
        confirmButtonColor: 'orange',
      });
      return; // Do not proceed with payment if fields are not filled
    }

    Swal.fire({
      title: 'Confirm Payment',
      text: `Please confirm the payment of ${formattedPrice}.`, // Include the formatted price
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'orange',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle payment confirmation logic here

        // Display a success message
        Swal.fire({
          title: 'Thank You!',
          text: 'Thank you for using Movit Rides!',
          icon: 'success',
          confirmButtonColor: 'orange',
        });

        // Navigate to the home page
        navigate('/home');
      }
    });
  };

  const kenyanBanks = [
    'Equity Bank',
    'KCB Bank',
    'Co-operative Bank of Kenya',
    'Standard Chartered Bank',
    'Barclays Bank of Kenya (now Absa Bank Kenya)',
    'Citi Bank Kenya',
    'Diamond Trust Bank',
    'NIC Bank',
    'Family Bank',
    'National Bank of Kenya',
    // Add more banks here as needed
  ];
  const [formData, setFormData] = useState({
    username: '',
    cardNumber: '',
  });

  return (
    <div className="container py-5">
      {/* For demo purpose */}
      <div className="row mb-4">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-6" style={{ color: 'black' }}>
            Movit Payment Form
          </h1>
        </div>
      </div>
      {/* End */}
      <div className="tab-content">
        <div className="tab-content show active">
          <form
            role="form"
            onSubmit={(event) => {
              event.preventDefault();
              handleConfirmPayment();
            }}
            className="text-center"
          >
            <div className="form-group">
              <label htmlFor="pickupLocation">
                <h6>Pickup Location</h6>
              </label>
              <p>{pickupLocation}</p>
            </div>
            <div className="form-group">
              <label htmlFor="dropoffLocation">
                <h6>Dropoff Location</h6>
              </label>
              <p>{dropoffLocation}</p>
            </div>
            <div className="form-group">
              <label htmlFor="ridePrice">
                <h6>Ride Price</h6>
              </label>
              <p> Ksh{ridePrice}</p>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card">
            <div className="card-header">
              <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                {/* Credit card form tabs */}
                <ul
                  role="tablist"
                  className="nav bg-light nav-pills rounded nav-fill mb-3"
                >
                  <li className="nav-item">
                    <a
                      href="#credit-card"
                      className={`nav-link ${
                        activeTab === 'credit-card' ? 'active' : ''
                      }`}
                      onClick={() => handleTabChange('credit-card')}
                    >
                      <i className="fas fa-credit-card mr-2"></i> Credit Card
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#paypal"
                      className={`nav-link ${
                        activeTab === 'paypal' ? 'active' : ''
                      }`}
                      onClick={() => handleTabChange('paypal')}
                    >
                      <i className="fab fa-paypal mr-2"></i> Paypal
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#net-banking"
                      className={`nav-link ${
                        activeTab === 'net-banking' ? 'active' : ''
                      }`}
                      onClick={() => handleTabChange('net-banking')}
                    >
                      <i className="fas fa-mobile-alt mr-2"></i> Net Banking
                    </a>
                  </li>
                </ul>
              </div>
              {/* End */}
            </div>

            {/* Credit card form content */}
            <div className="card-body">
              {activeTab === 'credit-card' && (
                <div className="tab-content">
                  {/* credit card info*/}
                  <div className={`tab-pane fade show active`}>
                    <form
                      role="form"
                      onSubmit={(event) => event.preventDefault()}
                    >
                      <div className="form-group">
                        <label htmlFor="username">
                          <h6>Card Owner</h6>
                        </label>
                        <input
                          type="text"
                          name="username"
                          placeholder="Card Owner Name"
                          required
                          className="form-control"
                          value={formData.username}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              username: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cardNumber">
                          <h6>Card number</h6>
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            name="cardNumber"
                            placeholder="Valid card number"
                            className="form-control"
                            required
                            value={formData.cardNumber}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                cardNumber: e.target.value,
                              })
                            }
                          />
                          <div className="input-group-append">
                            <span className="input-group-text text-muted">
                              <i className="fab fa-cc-visa mx-1"></i>
                              <i className="fab fa-cc-mastercard mx-1"></i>
                              <i className="fab fa-cc-amex mx-1"></i>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <button
                          type="submit"
                          className="subscribe btn btn-primary btn-block shadow-sm"
                          onClick={handleConfirmPayment}
                        >
                          Confirm Payment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {activeTab === 'paypal' && (
                <div className={`tab-pane fade show active`}>
                  <h6 className="pb-2">Select your PayPal account type</h6>
                  <div className="form-group">
                    <label className="radio-inline">
                      <input type="radio" name="optradio" checked /> Domestic
                    </label>
                    <label className="radio-inline ml-5">
                      <input
                        type="radio"
                        name="optradio"
                        className="ml-5"
                      />{' '}
                      International
                    </label>
                  </div>
                  <p>
                    <button
                      type="button"
                      onClick={handleConfirmPayment}
                      className="btn btn-primary"
                      style={{ backgroundColor: 'orange' }}
                    >
                      <i className="fab fa-paypal mr-2"></i> Log into my Paypal
                    </button>
                  </p>
                  <p className="text-muted">
                    Note: After clicking on the button, you will be directed to
                    a secure gateway for payment. After completing the payment
                    process, you will be redirected back to the website to view
                    details of your order.
                  </p>
                </div>
              )}
              {activeTab === 'net-banking' && (
                <div className={`tab-pane fade show active`}>
                  <div className="form-group">
                    <label htmlFor="Select Your Bank">
                      <h6>Select your Bank</h6>
                    </label>
                    <select
                      className="form-control"
                      id="selectYourBank"
                      defaultValue=""
                      onChange={() => {}}
                    >
                      <option value="" disabled>
                        -- Please select your Bank --
                      </option>
                      {kenyanBanks.map((bank, index) => (
                        <option key={index}>{bank}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <p>
                      <button
                        type="button"
                        onClick={handleConfirmPayment}
                        className="btn btn-primary"
                        style={{ backgroundColor: 'orange' }}
                      >
                        <i className="fas fa-mobile-alt mr-2"></i> Proceed
                        Payment
                      </button>
                    </p>
                  </div>
                  <p className="text-muted">
                    Note: After clicking on the button, you will be directed to
                    a secure gateway for payment. After completing the payment
                    process, you will be redirected back to the website to view
                    details of your order.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
