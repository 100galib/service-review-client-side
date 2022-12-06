import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../Section/AddServices/AddServices";
import AllServices from "../../Section/AllServices/AllServices";
import Blog from "../../Section/Blog/Blog";
import Home from "../../Section/Home/Home";
import Login from "../../Section/Login/Login";
import Main from "../../Section/Main/Main";
import Myreviews from "../../Section/Myreviews/Myreviews";
import PrivateRoute from "../../Section/PrivateRoute/PrivateRoute";
import Registration from "../../Section/Registration/Registration";
import ServiceDetails from "../../Section/ServiceDetails/ServiceDetails";
import UpdateUser from "../../Section/UpdateUser/UpdateUser";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('https://b6a11-service-review-server-side-100galib.vercel.app/serviceShort')
            },
            {
                path:'/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('https://b6a11-service-review-server-side-100galib.vercel.app/service')
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://b6a11-service-review-server-side-100galib.vercel.app/service/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/myreview',
                element: <PrivateRoute><Myreviews></Myreviews></PrivateRoute>
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/updateUser',
                element: <UpdateUser></UpdateUser>,
            }
        ]
    }
])

export default routes;