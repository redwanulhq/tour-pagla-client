import React from 'react';
import review1 from '../../../Images/reviews-1.png'
import review2 from '../../../Images/reviews-2.png'

const Review = () => {
     return (
          <section id="review" className="py-5 my-3">
               <div className="container">
               <div className="row text-center pb-5">
                         <p>Our Traveller Say</p>
                         <h2 className="pb-4 fw-bold">What Our Traveller Say About Us</h2>
                    </div>
               </div>
               <div className="container">
               <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div className="carousel-inner text-center">
    <div className="carousel-item active" data-bs-interval="10000">
                                   <div className="single-review d-flex align-items-center justify-content-center">
                                        <div>
                                        <div className="reviewer-img">
                         <img src={review1} alt="" />
                    </div>
                    <div className="review-text py-3 mb-5">
                         <h2 className="fw-bold">Joseph steve</h2>
                         <p>This place has always been amazing, but the room renovation that is going on currently, is outstanding! Great job on the decor. It flows very nicely with the lobby. We were told that it should be completed by early May. We'll be back in June! Thank you Portola!</p>
                    </div>
                                        </div>
               </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
                                   <div className="single-review d-flex justify-content-center align-items-center">
                                        <div>
                                        <div className="reviewer-img">
                         <img src={review2} alt="" />
                    </div>
                    <div className="review-text py-3 mb-5">
                         <h2 className="fw-bold">Dina Jems</h2>
                         <p>Location is near tourist trap wharf with little interesting views from our room. Room was clean and several nice staff. Would probably try to stay somewhere different next time… not worth the money IMO.</p>
                    </div>
                                        </div>
               </div>
    </div>
                              
  </div>

</div>

               </div>
          </section>
     );
};

export default Review;