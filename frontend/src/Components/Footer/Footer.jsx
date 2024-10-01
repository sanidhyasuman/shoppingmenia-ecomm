import React from 'react';
import './Footer.css'; // Import CSS file
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className='footer-social-icons'>
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
      <hr />
        <p>&copy; 2024 Your Ecommerce Store. All rights reserved.</p>
      </div>

      {/* <div className="footer__inner">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>Learn more about our company and our team.</p>
        </div>
        <div className="footer__section">
          <h3>Customer Service</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping Information</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Your Ecommerce Store. All rights reserved.</p>
      </div> */}
    </div>
  );
};

export default Footer;
