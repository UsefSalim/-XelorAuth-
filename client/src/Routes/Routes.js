import React from "react";
import { Route, Switch } from "react-router-dom";
import {  useSelector } from 'react-redux'
import Home from "../pages/Home";
import { AdminRoutes, AuthRoutes, UserRoutes } from './ProtectedRoutes'
import { authRoutes, adminRoutes, userRoutes} from './dataRoutes'
function Routes() {
  const { isAuthenticated:auth,role } = useSelector(state => state.authentification)
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {authRoutes.map((route,i) =>(
        <AuthRoutes {...route} key={i} role={role} auth={auth}/>
      ))}
      {userRoutes.map((route,i) =>
      (
        <UserRoutes {...route} role={role} auth={auth}/>
      ))}
      {adminRoutes.map((route,i) =>
      (
        <AdminRoutes {...route} role={role} auth={auth}/>
      ))}
    </Switch>
  );
}



export default Routes;
