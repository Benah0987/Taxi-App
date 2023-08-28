import React, { useState, useEffect } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';



function Landing() {
  const [counters, setCounters] = useState({
    count1: 0,
    count2: 100,
    count3: 0,
    count4: 0
  });

  useEffect(() => {
    function counter(id, start, end, duration) {
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const step = Math.abs(Math.floor(duration / range));
      const timer = setInterval(() => {
        current += increment;
        setCounters(prevCounters => ({
          ...prevCounters,
          [id]: current
        }));
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
    }

    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
  }, []);

  return (
    <div>
       <section id="home" className="top-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
            <h1>Great Rides, Great Moments</h1>
              <p>Explore the city with our reliable and comfortable taxi service. Your journey begins with us.</p>
              <div className="mt-4">
                  <Link to="/SignUp?type=driver" className="main-btn">SignUp as a Driver <i className="fas fa-shopping-basket ps-3"></i></Link>
                  <Link to="/SignUp?type=user" className="white-btn ms-lg-4 mt-lg-0 mt-4">Request a Ride<i className="fas fa-angle-right ps-3"></i></Link>

              </div>
            </div>
            <div className="col-lg-7 col-md-6 text-md-end mt-md-0 mt-4"> {/* Add text-md-end and mt-md-0 classes */}
              <img src="https://images.unsplash.com/photo-1556122071-e404eaedb77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGF4aXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Food" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      
      <section id="counter">
        <section class="counter-section">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count1">{counters.count1}</span>+
                </h2>
                <p>SAVINGS</p>
              </div>
              <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count2">{counters.count2}</span>+
                </h2>
                <p>PHOTOS</p>
              </div>
              <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count3">{counters.count3}</span>+
                </h2>
                <p>ROCKETS</p>
              </div>
              <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count4">{counters.count4}</span>+
                </h2>
                <p>GLOBES</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="story">
  <div className="story-section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="image-column">
            <img src="https://plus.unsplash.com/premium_photo-1661418448559-c9551964736c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRheGklMjBkcml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Taxi" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-column">
            <h2>Enjoy Every Ride With Us</h2>
            <p>Travel hassle-free and indulge in the joy of exploring the city. We're here to make every ride memorable.</p>
            <button className="main-btn mt-3">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


   
   
    </div>
  );
}

export default Landing;
