import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
     const {
          user,
          setUser,
          error,
          setError,
          signInUsingGoogle,
          isLoading,
          setIsLoading,
     } = useAuth();
     const location = useLocation();
     const history = useHistory();
     const redirectURI = location.state?.from || '/'
     const handleGoogleLogin = () => {
          setIsLoading(true)
          signInUsingGoogle()
          .then(result => {
               setUser(result.user);
               history.push(redirectURI);
          })
          .catch(error => {
          setError(error.message)
          })
          .finally(()=> setIsLoading(false))
     }
     return (
          <div>
               <div className="container">
                    <div className="login-form-container">
                         <button className="my-5 btn my-bg-color" onClick={handleGoogleLogin}>Log in with google</button>
                    </div>
               </div>
          </div>
     );
};

export default Login;