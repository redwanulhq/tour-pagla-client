import React, { useEffect, useState } from 'react';
import './ControlAllBooking.css'
import SingleBooking from './SingleBooking/SingleBooking';
const ControlAllBooking = () => {
     const [allBooking, setAllBooking] = useState([])
     const [control, setControl] = useState(false);
     useEffect(() => {
          fetch('https://mighty-beyond-61990.herokuapp.com/all-booking')
               .then(res => res.json())
          .then(result=> setAllBooking(result))
     }, [control])
     return (
          <main id="all-booking" className="my-5">
               <div className="container">
                    {
                         allBooking.length ?
                         <div className="row row-cols-1 row-cols-md-2 g-4">
                              {
                                   allBooking.slice(0).reverse().map(booking => <SingleBooking
                                        key={booking._id}
                                        booking={booking}
                                        setControl={setControl}
                                        control={control}
                                   ></SingleBooking>)
                              }
                         </div>
                         :
                         <div className="display-2 text-center no-booking">There is no booking yet</div>
                    }
              </div>
          </main>
     );
};

export default ControlAllBooking;