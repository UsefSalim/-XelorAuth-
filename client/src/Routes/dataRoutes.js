
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardUser from "../pages/DashboardUser";
import DashboardAdmin from "../pages/DashboardAdmin";

export const authRoutes = [
  {
  path: "/register",
  component: Register
  },
  {
    path:"/login",
    component: Login 
  }
]

export const adminRoutes = [
  {
    path:"/dashboard/admin",
    component: DashboardAdmin
  }
]

export const userRoutes = [
  {
    path:"/dashboard/user",
    component: DashboardUser
  }
]

