import {Redirect,Route,useLocation} from 'react-router-dom'
export const AuthRoutes = ({ path, component: Component, role, auth, ...rest }) =>
{
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={() =>
        !auth ? (
          <Component />
        ) : auth &&  role === "User" ? (
          <Redirect to={ (location.state?.userpath) || "/dashboard/user"}/>
          ) : auth && role === "Admin" &&
           (<Redirect to={(location.state?.adminpath) || "/dashboard/admin"} />
        )
      }
    />
  );
};
export const UserRoutes = ({ path, component: Component, role, auth, ...rest }) =>
{
  return (
    <Route
      {...rest}
      render={() =>
        auth && role === "User" ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { userpath: path },
            }}
          />
        )
      }
    />
  );
};
export const AdminRoutes = ({ path, component: Component, role, auth, ...rest }) =>
{
  return (
    <Route
      {...rest}
      render={() =>
        auth && role === "Admin" ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { userpath: path },
            }}
          />
        )
      }
    />
  );
};