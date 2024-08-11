import React, { useEffect } from 'react';
import whyUs1 from '../../../Images/tour-guide.png'
import whyUs2 from '../../../Images/trust.png'
import whyUs3 from '../../../Images/experience.png'
import whyUs4 from '../../../Images/traveller.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {
     useEffect(() => {
          AOS.init({duration: 1000})
     }, [])
     return (
          <div>
               <section id="why-us" className="py-5 my-3">
                    <div className="container bg-silver text-center my-5">
                         <div className="row pb-3">
                              <p>Why TourPagla</p>
                              <h2 className="pb-4 fw-bold">Why You Are Travel With TourPagla</h2>
                         </div>
                         <div className="row row-cols-1 row-cols-md-4 g-4 text-white">
                              <div className="col">
                                   <div data-aos-duration="2000" data-aos="fade-right" className="card h-100 my-bg-color">
                                        <img src={ whyUs1 } className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                             <h5 className="card-title">2000+ Our worldwide guide</h5>
                                        </div>
                                   </div>
                              </div>
                              <div className="col">
                                   <div data-aos="fade-right" className="card h-100 my-bg-color">
                                        <img src={ whyUs2 } className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                             <h5 className="card-title">100% trusted travel agency</h5>
                                        </div>
                                   </div>
                              </div>
                              <div className="col">
                                   <div data-aos="fade-left" className="card h-100 my-bg-color">
                                        <img src={ whyUs3 } className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                             <h5 className="card-title">10+ year of travel experience</h5>
                                        </div>
                                   </div>
                              </div>
                              <div className="col">
                                   <div data-aos-duration="2000" data-aos="fade-left" className="card h-100 my-bg-color">
                                        <img src={ whyUs4 } className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                             <h5 className="card-title">90% of our traveller happy</h5>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default WhyUs;