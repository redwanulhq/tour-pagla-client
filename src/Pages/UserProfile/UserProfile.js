import React from 'react';
import useAuth from '../../hooks/useAuth';
import './UserProfile.css'

const UserProfile = () => {
     const { user } = useAuth();
     console.log(user)
     return (
          <main className="my-5">
               <div className="container">
                    <h2 className="text-center">User Profile</h2>
                    <div className="user-container">
                         <img src={user.photoURL} alt="" />
                         <p>{ user.emailVerified? 'Verified User': 'Not Verified User' }</p>
                         <p>Name: <span className="fw-bold">{user.displayName}</span></p>
                         <p>Mail: {user.email}</p>
                         <p>Registered at: <span className="text-muted small">{user.metadata.creationTime}</span></p>
                         <button className="btn w-100 p-2 my-bg-color"><i class="far fa-edit"></i> Update Profile</button>
                    </div>
               </div>
          </main>
     );
};

export default UserProfile;