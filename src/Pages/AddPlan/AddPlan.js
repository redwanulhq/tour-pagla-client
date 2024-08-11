import React from 'react';
import './AddPlan.css'
import { useForm } from 'react-hook-form';

const AddBooking = () => {
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const onSubmit = data => {
          data.status = false;
          data.new_added = "yes";
          fetch('https://mighty-beyond-61990.herokuapp.com/tours', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)
          })
               .then(res => res.json())
               .then(result => {
                    if(result.insertedId) {
                         alert('Tour Package added')
                    }
                    reset();
               });
     };
     const handleDeleteAllNewTours = () => {
          const confirmMessage = "Are you sure, you want to delete all the new tour packages?"
          if (window.confirm(confirmMessage)) {
               //eslint-disable-line
               fetch('https://mighty-beyond-61990.herokuapp.com/tours', {
                    method: 'DELETE'
               })
                    .then(res => res.json())
                    .then(data => {
                         console.log(data)
                    })
          }
     }
     console.log(errors);
     return (
          <main className="my-5">
               <div className="container">
                    <div className="add-tour-form-container">
                         <form onSubmit={handleSubmit(onSubmit)}>
                              <input type="text" placeholder="Tour Name e.g. 'Super Maldives Trip'" {...register("tour_name", {required: true, maxLength: 80})} />
                              <input type="number" placeholder="Price '100-100000'" {...register("price", {required: true, min: 100, maxLength: 100000})} />
                              <select {...register("duration", { required: true })}>
                              <option value="duration">Duration</option>
                              <option value="2 Days / 3 Nights">2 Days / 3 Nights</option>
                              <option value="3 Days / 4 Nights">3 Days / 4 Nights</option>
                              <option value="4 Days / 5 Nights">4 Days / 5 Nights</option>
                              <option value="5 Days / 6 Nights">5 Days / 6 Nights</option>
                              <option value="6 Days / 7 Nights">6 Days / 7 Nights</option>
                              </select>
                              <select {...register("rating", { required: true })}>
                              <option value="Rating">Rating</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              </select>
                              <input type="url" placeholder="Image URL" {...register("imgURL", {required: true})} />
                              <input className="booking-submit my-bg-color" type="submit" />
                         </form>
                         <button onClick={handleDeleteAllNewTours} className="btn btn-danger w-100"><i class="far fa-trash-alt"></i> Delete Extra Tour Packages</button>
                    </div>
               </div>
          </main>
     );
};

export default AddBooking;