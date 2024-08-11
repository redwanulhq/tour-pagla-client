import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
      const { user, isLoading } = useAuth()
      if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center vw-100 vh-100"><Spinner animation="border" variant="info" /></div>
      }
     return (
          <Route
          {...rest}
          render={({ location }) =>
            user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
     );
};

export default PrivateRoute;