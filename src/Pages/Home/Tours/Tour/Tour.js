import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tour = ({ tour }) => {
     useEffect(() => {
          AOS.init({duration: 2000})
     }, [])
     const { tour_name, rating, price, imgURL, duration, _id } = tour;
     return (
          <>
               <div className="col">
                    <div data-aos="fade-up" className="card h-100 card-hover">
                         <img src={imgURL} className="card-img-top w-100" alt="..."/>
                         <div className="card-body">
                              <h5 className="card-title">{tour_name}</h5>
                              <div className="d-flex justify-content-between align-items-center">
                                   <span><i className="fas fa-calendar-alt"></i> {duration}</span>
                                   <span className="fw-bolder fs-5">${price}</span></div>
                              <div className="d-flex justify-content-between align-items-center mt-2">
                                   <Link to={`/booking/${_id}`}>
                                   <button className="btn my-bg-color"><i className="fas fa-location-arrow"></i> Book Now</button>
                                   </Link>
                                   <Rating
                                        className="rating"
                                        initialRating={rating}
                                        readonly
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Tour;