import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/home/Home";
import Login from './../pages/login/Login';
import Register from './../pages/register/Register';
import Rooms from "../pages/rooms/Rooms";
import RoomDetails from "../pages/rooms/RoomDetails";
import MyBookings from "../pages/myBookings/MyBookings";


const Router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element: <Home></Home>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element:<Register></Register>
            },
            {
                path: 'rooms',
                element:<Rooms></Rooms>
            },
            {
                path: 'room/:id',
                element:<RoomDetails></RoomDetails>
            },
            {
                path: 'myBookings',
                element:<MyBookings></MyBookings>,

            },
        ]
    }
])

export default Router;