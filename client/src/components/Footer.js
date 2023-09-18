import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer_area section_padding_130_0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer-widget section_padding_0_130">
              <div className="footer-logo mb-3">
                {/* Replace this with your Movit Rides logo */}
                <img src="your-logo.png" alt="Movit Rides Logo" />
              </div>
              <p>Discover the joy of riding with Movit Rides.</p>
              <div className="copywrite-text mb-5">
                <p className="mb-0">
                  &copy; {new Date().getFullYear()} Movit Rides. All rights reserved.
                </p>
              </div>
              <div className="footer_social_area">
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Explore</h5>
              <div className="footer_menu">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Support</h5>
              <div className="footer_menu">
                <ul>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Contact</h5>
              <div className="footer_menu">
                <ul>
                  <li><a href="#">Customer Support</a></li>
                  <li><a href="#">Email Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
