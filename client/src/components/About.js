import React from 'react'
import './About.css'
import benah4 from '../images/benah4.png'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <div>
	    <div className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" id="carouselExampleIndicators">
        <div className="carousel-indicators">
          <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button>
          <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button>
          <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img alt="Movit Rides" className="d-block w-100" src="https://plus.unsplash.com/premium_photo-1682092280716-d1bc7ccb1947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRyaXZlciUyMHRheGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            <div className="carousel-caption">
              <h5>Welcome to Movit Rides</h5>
              <p>Experience safe, reliable, and affordable rides with Movit. Your journey, our commitment.</p>
              <p><a className="btn btn-warning mt-3" href="#">Book a Ride</a></p>
            </div>
          </div>
          <div class="carousel-item">
            <img alt="Movit Rides" class="d-block w-100" src="https://images.unsplash.com/photo-1518430272387-254558840136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRyaXZlciUyMHRheGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            <div class="carousel-caption">
              <h5>Travel in Style</h5>
              <p>Choose from a variety of comfortable and stylish vehicles for your next Movit ride.</p>
              <p><a class="btn btn-warning mt-3" href="#">Explore Fleet</a></p>
            </div>
          </div>
          <div class="carousel-item">
            <img alt="Movit Rides" class="d-block w-100" src="https://images.unsplash.com/photo-1518430272387-254558840136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRyaXZlciUyMHRheGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            <div class="carousel-caption">
              <h5>24/7 Service</h5>
              <p>Our dedicated drivers are available around the clock to get you where you need to be.</p>
              <p><a class="btn btn-warning mt-3" href="#">Book Now</a></p>
            </div>
          </div>
        </div>
        </div>
        <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button">
          <span aria-hidden="true" className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button">
          <span aria-hidden="true" className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    
    <section class="about section-padding" id="about">
          <div class="container">
            <div class="row">

              <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                <div class="about-text">
                  <h2>About Movit</h2>
                  <p>Welcome to Movit, your trusted ride-sharing service.</p>
                  <p>At Movit, we are dedicated to providing you with safe and convenient rides to your destination. Our mission is to make your daily commute as hassle-free as possible.</p>
                  <p>With our easy-to-use app, you can book a ride in seconds and reach your destination comfortably. We offer competitive prices and a wide range of vehicles to choose from.</p>
                  <Link className="btn btn-warning mt-3" to="/signup?type=user">
                        Book a Ride
                      </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ceo section-padding" id="ceo">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="ceo-image">
                <img
                  src={benah4}
                  alt="CEO Name"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="ceo-content">
                <h2>Meet Our CEO</h2>
                <p>
                Introducing the Visionary Leader: Benayah Wanyoike, our CEO
                </p>
                <p>"Benayah Wanyoike, the CEO, leads with a strategic vision, data-driven decision-making, and a collaborative leadership style that empowers teams to excel. His commitment to high standards drives the company's ongoing success."

              </p>
                <p>
                  <em>"Our commitment to excellence drives us forward."</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


        <section class="services section-padding" id="services">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="section-header text-center pb-5">
          <h2>Our Services</h2>
          <p>Experience the Convenience of Movit Rides</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-12 col-lg-4 mb-4">
        <div class="card text-white text-center bg-dark pb-2">
          <div class="card-body">
            <i class="bi bi-car"></i>
            <h3 class="card-title">Wide Range of Vehicles</h3>
            <p class="lead">Choose from a variety of vehicles to match your ride preferences. Whether you're a passenger looking for a ride or a driver wanting to join our network, we have options for you.</p>
            <Link className="btn btn-warning mt-3" to="/signup?type=user">
              Explore options
            </Link>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-4 mb-4">
        <div class="card text-white text-center bg-dark pb-2">
          <div class="card-body">
            <i class="bi bi-clock"></i>
            <h3 class="card-title">24/7 Service</h3>
            <p class="lead">Enjoy the convenience of 24/7 service with Movit. Whether you need a ride or want to provide rides as a driver, we're here to assist you at any time of the day or night.</p>
            <Link className="btn btn-warning mt-3" to="/signup?type=user">
              Book a Ride
            </Link>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-4 mb-4">
        <div class="card text-white text-center bg-dark pb-2">
          <div class="card-body">
            <i class="bi bi-map"></i>
            <h3 class="card-title">Easy Booking</h3>
            <p class="lead">Book your ride with ease using the Movit app. Our user-friendly platform allows passengers to quickly request a ride, and drivers can easily accept ride requests.</p>
            <button className="btn bg-warning text-dark">
              <Link to="/signup?type=user">Get Started</Link>
            </button>

          </div>
        </div>
      </div>
    
      <div class="col-12 col-md-12 col-lg-4 mb-4">
        <div class="card text-white text-center bg-dark pb-2">
          <div class="card-body">
            <i class="bi bi-wallet"></i>
            <h3 class="card-title">Earn with Movit</h3>
            <p class="lead">Join our network of drivers and start earning money with Movit. We offer competitive fares and a flexible schedule, making it a great opportunity for drivers.</p>
            <button className="btn bg-warning text-dark">
              <Link to="/signup?type=driver">Become a Driver</Link>
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-4 mb-4">
        <div class="card text-white text-center bg-dark pb-2">
          <div class="card-body">
            <i class="bi bi-shield-lock"></i>
            <h3 class="card-title">Safety First</h3>
            <p class="lead">Your safety is our priority. We have stringent safety measures in place for both passengers and drivers. Ride with confidence knowing we've got your back.</p>
            <button class="btn bg-warning text-dark">Learn More</button>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>



<section class="testimonials section-padding" id="testimonials">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="section-header text-center pb-5">
          <h2>Testimonials</h2>
          <p>What Our Drivers and Users Say About Movit Rides</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card text-center">
          <div class="card-body">
            <i class="bi bi-chat-quote-fill text-dark"></i>
            <p class="testimonial-text">
              "Becoming a Movit driver was one of the best decisions I've made. The flexibility and earning potential are outstanding. I love being part of the Movit community."
            </p>
            <h3 class="testimonial-author py-2">Njoroge (Movit Driver)</h3>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4">
        <div class="card text-center">
          <div class="card-body">
            <i class="bi bi-chat-quote-fill text-dark"></i>
            <p class="testimonial-text">
              "As a frequent user of Movit rides, I appreciate the reliability and safety they provide. Whether it's a quick trip or a longer journey, Movit always delivers."
            </p>
            <h3 class="testimonial-author py-2">Alice Wanjiku (Movit User)</h3>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4">
        <div class="card text-center">
          <div class="card-body">
            <i class="bi bi-chat-quote-fill text-dark"></i>
            <p class="testimonial-text">
              "Movit's 24/7 customer service has been a lifesaver for me. Whenever I had a question or needed assistance, they were there to help. Fantastic service!"
            </p>
            <h3 class="testimonial-author py-2">Sarah Mueni (Movit User)</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





	
<section class="contact section-padding" id="contact">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-header text-center pb-5">
                    <h2>Contact Us</h2>
                    <p>Get in Touch with Us</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="contact-form">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Your Name" required />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Your Email" required />
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-warning">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

	
	</div>
  )
}

export default About