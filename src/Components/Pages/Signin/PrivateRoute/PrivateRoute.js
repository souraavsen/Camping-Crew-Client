import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Route, Redirect } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    
    const { user, loading } = useAuth();

    if (loading) {
        return (
          <div className='w-screen h-screen flex justify-center items-center -mt-20'>
            <Spinner className='w-16 h-16' animation='grow'/>
          </div>
        );
    }
      return (
        <div>
          <Route
            {...rest}
            render={({ location }) =>
              user.email ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: "/signin",
                    state: { from: location },
                  }}
                ></Redirect>
              )
            }
          ></Route>
        </div>
      );
}

export default PrivateRoute
