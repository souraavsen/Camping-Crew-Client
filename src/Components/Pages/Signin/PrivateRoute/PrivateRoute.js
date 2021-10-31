import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Route, Redirect } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    
    const { user, loading } = useAuth();

    if (loading) {
        return (
          <div className='w-screen h-screen flex justify-center items-center -mt-20'>
            <div class='sk-cube-grid'>
              <div class='sk-cube sk-cube1'></div>
              <div class='sk-cube sk-cube2'></div>
              <div class='sk-cube sk-cube3'></div>
              <div class='sk-cube sk-cube4'></div>
              <div class='sk-cube sk-cube5'></div>
              <div class='sk-cube sk-cube6'></div>
              <div class='sk-cube sk-cube7'></div>
              <div class='sk-cube sk-cube8'></div>
              <div class='sk-cube sk-cube9'></div>
            </div>
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
