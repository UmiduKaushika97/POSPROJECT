import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
// import NotFound from '../pages/NotFound'
import AdminDashboard from '../pages/admin/AdminDashboard'
// import AddUser from '../pages/admin/AddUser'
// import AddProduct from '../pages/admin/AddProduct'
import UserDashboard from '../pages/user/UserDashboard'
import AdminRoute from '../components/AdminRoute'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <AdminRoute><AdminDashboard /></AdminRoute>,
  },
//   {
//     path: '/admin/add-user',
//     element: <AdminRoute><AddUser /></AdminRoute>,
//   },
//   {
//     path: '/admin/add-product',
//     element: <AdminRoute><AddProduct /></AdminRoute>,
//   },
  {
    path: '/user',
    element: <UserDashboard />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
