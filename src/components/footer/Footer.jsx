import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container container__padding">
      <div className="footer">
        <div className="footer__content">
          <div className="footer__content--social">
            <Link to="/" className="social-logo">
              <p>K</p>
              <p>KENOVA</p>
              <p>Technology</p>
            </Link>
            <div className="social-desc">
              Collaborative, secure and transparent offshore software
              development.
            </div>
            <div className="social-links">
              <Link to="/">
                <img
                  src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-social-fb.svg&w=32&q=100"
                  alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-social-fb.svg&w=32&q=100"
                />
              </Link>
              <Link to="/">
                <img
                  src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-social-linkedin.svg&w=32&q=100"
                  alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-social-linkedin.svg&w=32&q=100"
                />
              </Link>
            </div>
          </div>
          <div className="footer__content--menu">
            <div className="menu-title">Company</div>
            <div className="menu-links">
              <Link to="/careers" className="menu-links--item">
                Careers
              </Link>
              <Link to="/services" className="menu-links--item">
                Services
              </Link>
              <Link to="/contact-us" className="menu-links--item">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="footer__content--contact">
            <div className="contact-title">Contact Us</div>
            <div className="contact-address">
              <img
                src="https://fabatechnology.com/_next/image?url=%2Ficons%2Fus.svg&w=32&q=100"
                alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Fus.svg&w=32&q=100"
                className="contact-address--image"
              />
              <div className="contact-address--link">
                11018 Warath Oak CT, Houston, TX 77065
              </div>
            </div>
            <div className="contact-address">
              <img
                src="https://fabatechnology.com/_next/image?url=%2Ficons%2Fvn.svg&w=32&q=100"
                alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Fvn.svg&w=32&q=100"
                className="contact-address--image"
              />
              <div className="contact-address--link">
                186 Dang Van Ngu, Ward 14, Phu Nhuan District, HCMC.
              </div>
            </div>
            <div className="contact-address">
              <img
                src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-mail.svg&w=32&q=100"
                alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-mail.svg&w=32&q=100"
                className="contact-address--image"
              />
              <Link to="/" className="contact-address--link">
                minhphuongk57.dev@gmal.com
              </Link>
            </div>
          </div>
          <div className="footer__content--link">
            <Link to="/">
              <img
                src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-social-fb.svg&w=32&q=100"
                alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-social-fb.svg&w=32&q=100"
              />
            </Link>
            <Link to="/">
              <img
                src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-social-linkedin.svg&w=32&q=100"
                alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-social-linkedin.svg&w=32&q=100"
              />
            </Link>
          </div>
        </div>
        <div className="footer__copyright">
          Copyright © 2022 Faba Technology. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
