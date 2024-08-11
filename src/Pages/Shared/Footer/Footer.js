import React from 'react';
import './Footer.css'
import logo from '../../../Images/logo.png'
import paymentImg from '../../../Images/creditcard-logo.png'

const Footer = () => {
     return (
          <footer>
               <div className="container">
                    <div className="footer-body">
                         <div className="row row-cols-1 row-cols-md-4 g-4 py-5">
                              <div className="col">
                                   <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                   <img src={ logo } className="w-100 footer-logo" alt="" />
                              </div>
                              <div className="col">
                                   <h4 className="text-white">Contact Us</h4>
                                   <div>
                                        <a href="/">+01852-1265122</a>
                                        <a href="/">+01852-1265122</a>
                                        <a href="/">info@example.com</a>
                                        <a href="/">support@example.com</a>
                                        <div>2752 Willison Street, Eagan</div>
                                   </div>
                              </div>
                              <div className="col">
                                   <h4 className="text-white">Contact Us</h4>
                                   <div>
                                        <a href="/">Contact Us</a>
                                        <a href="/">About Us</a>
                                        <a href="/">Destinations</a>
                                        <a href="/">Our Blogs</a>
                                        <a href="/">Package</a>
                                   </div>
                              </div>
                              <div className="col">
                                   <h4 className="text-white">Pay Safely</h4>
                                   <img src={ paymentImg } alt="" />
                              </div>
                         </div>
                    </div>
                    <div className="footer-bottom">
                         <p className="m-0">&copy; Copyright 2021 | Redwanul Haque all rights reserved</p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;