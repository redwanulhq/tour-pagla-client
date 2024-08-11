import React, { useEffect, useState } from 'react';
import Tour from './Tour/Tour';

const Tours = () => {
     const [tours, setTours] = useState([])
     useEffect(() => {
          fetch("https://mighty-beyond-61990.herokuapp.com/tours")
               .then(res => res.json())
               .then(result => setTours(result))
     }, [])
     return (
          <section className="tours" id="tours-section">
               <div className="container my-5">
                    <div className="row text-center pb-3">
                         <p>Hot Packages</p>
                         <h2 className="pb-4 fw-bold">We promise, it won’t get boring.</h2>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                         {
                              tours.map(tour => <Tour key={tour.tour_name} tour={tour}></Tour>)
                         }
                    </div>
               </div>
          </section>
     );
};

export default Tours;