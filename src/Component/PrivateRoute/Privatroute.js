import React from "react"
import {  Route, Redirect } from "react-router-dom";
import { mapDispatchToProps, mapStateToProps } from "./maping"
import { connect } from 'react-redux'
import { MyContext } from '../../ContextProvider'

function PrivateRoute(props) {
  const { isAuth, children } = props
  debugger
  return (
    /////////////////////////////////////////////
    //UN Comment this for Using context API
    // <MyContext.Consumer>
    //   {

    //     (context)=>( 
    //       <Route
    //       render={({ location }) =>
    //       //
    //       context.state.isAuth ? (
    //         children
    //         ) : (
    //           <Redirect
    //           to={{
    //             pathname: "/login",
    //             state: { from: location }
    //           }}
    //           />
    //           )
    //         }
    //         />
    //         )
    //       }
    //       </MyContext.Consumer>
    ///////////////////////////////////////////////


//////////////////////////////////////////////////
// Comment this section for using context
    <Route
      render={({ location }) =>
        isAuth ? (
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
///////////////////////////////////////////////////


  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute) 
