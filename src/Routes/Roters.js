
import { createBrowserRouter } from 'react-router-dom'
import AllUser from '../Dashboard/Dashboard/Alluser/AllUser';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import Adddoctors from '../Dashboard/Dashboard/DoctorsAdd/Adddoctors';
import ManageUser from '../Dashboard/Dashboard/Mannageuser/ManageUser';
import Payment from '../Dashboard/Dashboard/Payment/Payment';
import MyAppointMent from '../Dashboard/Myappointment/MyAppointMent';
import DashBoard from '../Laout/DashBoard';
import Main from '../Laout/Main'
import Appontment from '../Pages/Home/Appounment/Apointment/Appontment';
import Home from '../Pages/Home/Home/Home';
import Displayerror from '../Shared/Displayerror/Displayerror';

import Login from '../Shared/Login/Login'
import SignUp from '../Shared/SignUp/SignUp';
import AdminRoutes from './AdminRoute';
import PrivetRoute from './PrivetRoute/PrivetRoute';

const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Displayerror></Displayerror>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/apointment',
                element: <Appontment></Appontment>
            }, {
                path: '/signup',
                element: <SignUp></SignUp>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute> <DashBoard></DashBoard></PrivetRoute>,
        errorElement: <Displayerror></Displayerror>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointMent></MyAppointMent>
            },
            {
                path: '/dashboard/user',
                element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
            },
            {
                path: '/dashboard/doctors',
                element: <Adddoctors></Adddoctors>
            },
            {
                path: '/dashboard/doctorsuser',
                element: <ManageUser></ManageUser>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            }
        ]
    }


])
export default routes;