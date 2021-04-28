import React from 'react'
import {Redirect,Route,Switch} from "react-router-dom"
import {useSelector} from 'react-redux'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DashboardUser from './pages/DashboardUser'
import DashboardAdmin from './pages/DashboardAdmin'
function Routes() {
    const {isAuthenticated,role} = useSelector(state => state.authentification)
  return (
    <Switch>
        <Route exact path="/" component={Home}/>
        <AuthRoutes path="/register" component={Register} role={role} auth={isAuthenticated}/>
        <AuthRoutes path="/login" component={Login} role={role} auth={isAuthenticated}/>
        <UserRoutes path="/dashboard/user" role={role} auth={isAuthenticated} component={DashboardUser}/>
        <AdminRoutes path="/dashboard/admin" role={role} auth={isAuthenticated} component={DashboardAdmin}/>
      </Switch>
  )
}


const AuthRoutes = ({path,component:Component,role,auth,...rest})=>(
       <Route
        {...rest}
        render={() => (!auth
          ? (
            <Component />
          ) : ((role === 'User')
            ? (
              <Redirect to="/dashboard/user" />
            ) : (
              <Redirect to="/dashboard/admin" />
            )
          ))}
  />
)

const UserRoutes = ({path,component:Component,role,auth,...rest})=>(
       <Route
        {...rest}
        render={() => ( auth && role === 'User'  ? <Component/> : <Redirect to="/login" />  )}
  />
)
const AdminRoutes = ({path,component:Component,role,auth,...rest})=>(
       <Route
        {...rest}
        render={() => ( auth && role === 'Admin'  ? <Component/> : <Redirect to="/login" />  )}
  />
)

export default Routes
