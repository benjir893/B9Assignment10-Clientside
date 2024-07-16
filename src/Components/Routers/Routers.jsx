import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Woodencruft from "../Pages/Woodencruft";
import Jutecruft from "../Pages/Jutecruft";
import About from "../Pages/About";
import Allarts from "../Pages/Allarts";
import Addcruft from "../Pages/Addcruft";
import Mylist from "../Pages/Mylist";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allarts',
                element:<Allarts></Allarts>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addcruft',
                element:<Addcruft></Addcruft>
            },
            {
                path:'/mylist',
                element:<Mylist></Mylist>
            },
            
        ]
    }
])