import React, { useState } from 'react';

function Payment() {
  const [activeTab, setActiveTab] = useState('credit-card'); // Initialize the active tab state

  const handleTabChange = (tabId) => {
    setActiveTab(tabId); // Update the active tab when a navigation link is clicked
  };

  const handleConfirmPayment = () => {
    // Handle the payment confirmation logic here
    alert('Payment confirmed!');
  };

  return (
    <div className="container py-5">
      {/* For demo purpose */}
      <div className="row mb-4">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-6">Bootstrap Payment Forms</h1>
        </div>
      </div>
      {/* End */}
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card">
            <div className="card-header">
              <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                {/* Credit card form tabs */}
                <ul role="tablist" className="nav bg-light nav-pills rounded nav-fill mb-3">
                  <li className="nav-item">
                    <a
                      href="#credit-card"
                      className={`nav-link ${activeTab === 'credit-card' ? 'active' : ''}`}
                      onClick={() => handleTabChange('credit-card')}
                    >
                      <i className="fas fa-credit-card mr-2"></i> Credit Card
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#paypal"
                      className={`nav-link ${activeTab === 'paypal' ? 'active' : ''}`}
                      onClick={() => handleTabChange('paypal')}
                    >
                      <i className="fab fa-paypal mr-2"></i> Paypal
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#net-banking"
                      className={`nav-link ${activeTab === 'net-banking' ? 'active' : ''}`}
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
                  {/* credit card info */}
                  <div
                    className={`tab-pane fade show active`}
                  >
                    <form role="form" onSubmit={(event) => event.preventDefault()}>
                      <div className="form-group">
                        <label htmlFor="username">
                          <h6>Card Owner</h6>
                        </label>
                        <input type="text" name="username" placeholder="Card Owner Name" required className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cardNumber">
                          <h6>Card number</h6>
                        </label>
                        <div className="input-group">
                          <input type="text" name="cardNumber" placeholder="Valid card number" className="form-control" required />
                          <div className="input-group-append">
                            <span className="input-group-text text-muted">
                              <i className="fab fa-cc-visa mx-1"></i>
                              <i className="fab fa-cc-mastercard mx-1"></i>
                              <i className="fab fa-cc-amex mx-1"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="form-group">
                            <label>
                              <span className="hidden-xs">
                                <h6>Expiration Date</h6>
                              </span>
                            </label>
                            <div className="input-group">
                              <input type="number" placeholder="MM" name="" className="form-control" required />
                              <input type="number" placeholder="YY" name="" className="form-control" required />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group mb-4">
                            <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                              <h6>CVV <i className="fa fa-question-circle d-inline"></i></h6>
                            </label>
                            <input type="text" required className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <button
                          type="button"
                          onClick={handleConfirmPayment}
                          className="subscribe btn btn-primary btn-block shadow-sm"
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
                      <input type="radio" name="optradio" className="ml-5" /> International
                    </label>
                  </div>
                  <p>
                    <button type="button" className="btn btn-primary">
                      <i className="fab fa-paypal mr-2"></i> Log into my Paypal
                    </button>
                  </p>
                  <p className="text-muted">
                    Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order.
                  </p>
                </div>
              )}
              {activeTab === 'net-banking' && (
                <div className={`tab-pane fade show active`}>
                  <div className="form-group">
                    <label htmlFor="Select Your Bank">
                      <h6>Select your Bank</h6>
                    </label>
                    <select className="form-control" id="ccmonth">
                      <option value="" selected disabled>--Please select your Bank--</option>
                      <option>Bank 1</option>
                      <option>Bank 2</option>
                      <option>Bank 3</option>
                      <option>Bank 4</option>
                      <option>Bank 5</option>
                      <option>Bank 6</option>
                      <option>Bank 7</option>
                      <option>Bank 8</option>
                      <option>Bank 9</option>
                      <option>Bank 10</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <p>
                      <button type="button" className="btn btn-primary">
                        <i className="fas fa-mobile-alt mr-2"></i> Proceed Payment
                      </button>
                    </p>
                  </div>
                  <p className="text-muted">
                    Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order.
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
