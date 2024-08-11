import React, { useState } from 'react';

const MySingleBooking = ({ booking, setControl, control }) => {
     const { date, price, tourImg, tour_name, ticket_type, adult, child, _id, status } = booking;
     const handleDeleteBooking = (id) => {
          const confirmMessage = "Are you sure, you want to cancel the booking?"
          if (window.confirm(confirmMessage)) {
               //eslint-disable-line
               fetch(`https://mighty-beyond-61990.herokuapp.com/all-booking/${id}`, {
                    method: 'DELETE'
               })
                    .then(res => res.json())
                    .then(data => {
                         if (data.deletedCount) {
                              setControl(!control);
                            } else {
                              setControl(false);
                            }
               })
          }


     }
     return (
          <div className="col">
               <div className="card mb-3" style={{"maxWidth": "540"}}>
               <div className="row g-0">
               <div className="col-md-5">
                    <img src={tourImg} className="img-fluid h-100 rounded-start" alt="..." style={{"objectFit": "cover"}}/>
               </div>
               <div className="col-md-7">
                    <div className="card-body">
                         <h5 className="card-title">{ tour_name}</h5>
                         <div className="card-text">Type: { ticket_type }</div>
                              <div className="card-text">Adult: {adult ? adult: "0"} Child: { child ? child: "0" }</div>
                         <div className="card-text">Cost: ${ price }</div>
                         <span className="card-text"><small className="text-muted">Booked time: {date}</small></span>
                         <div className="d-flex justify-content-between align-items-center">
                                        {status ? <span className="my-color">Aproved</span> :
                                        <span className="text-danger">Pending</span>}
                              <button onClick={ () => handleDeleteBooking(_id) } className="btn btn-danger booking-btn">Cancel</button>
                         </div>
                    </div>
               </div>
               </div>
               </div>
          </div>
     );
};

export default MySingleBooking;