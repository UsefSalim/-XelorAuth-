import React from 'react'
import {Redirect,Route,Switch} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DashboardUser from './pages/DashboardUser'
import DashboardAdmin from './pages/DashboardAdmin'
function Routes(props) {
  const {auth,role} = props
  return (
    <Switch>
        <Route exact path="/" component={Home}/>
        <AuthRoutes exact path="/register" component={Register} role={role} auth={auth}/>
        <AuthRoutes exact path="/login" component={Login} role={role} auth={auth}/>
        <UserRoutes exact  path="/dashboard/user" role={role} auth={auth} component={DashboardUser}/>
        <AdminRoutes exact path="/dashboard/admin" role={role} auth={auth} component={DashboardAdmin}/>
      </Switch>
  )
}


const AuthRoutes = ({path,component:Component,role,auth,...rest})=>{
  return ( 
    (
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

  )
}
const UserRoutes = ({path,component:Component,role,auth,...rest})=> {
  return (
    (
       <Route
        {...rest}
        render={() => ( auth && role === 'User'  ? <Component/> : <Redirect to="/login" />  )}
  />
)
  )
}
const AdminRoutes = ({path,component:Component,role,auth,...rest})=>{
  return (
    (
       <Route
        {...rest}
        render={() => ( auth && role === 'Admin'  ? <Component/> : <Redirect to="/login" />  )}
  />
)
  )
}

export default Routes
