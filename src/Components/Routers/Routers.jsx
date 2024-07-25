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
import PrivateRouters from "../../Apps/PrivateRouters";
import Editcruft from "../Pages/Editcruft";
import Viewdetails from "../Pages/Viewdetails";
import Users from "../Pages/Users";
import Navbar from "../Navbar/Navbar";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
                
            },
            {
                path:'/allarts',
                element:<Allarts></Allarts>,
                loader:()=>fetch('http://localhost:5000/addcruft')
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
                element:<PrivateRouters><Addcruft></Addcruft></PrivateRouters>
            },
            {
                path:'/editcruft/:id',
                element:<Editcruft></Editcruft>,
                loader:({params})=>fetch(`http://localhost:5000/addcruft/${params.id}`)
            },
            {
                path:'/viewdetails/:id',
                element:<Viewdetails></Viewdetails>,
                loader:({params})=>fetch(`http://localhost:5000/addcruft/${params.id}`)
            },
            {
                path:'/mylist',
                loader:()=>fetch('http://localhost:5000/addcruft'),
                element:<PrivateRouters><Mylist></Mylist></PrivateRouters>,
            },
            {
                path:'/woodhome',
                loader:()=>fetch('http://localhost:5000/addcruft'),
                element:<Woodencruft></Woodencruft>,
            },
            {
                path:'/jutecruft',
                element:<Jutecruft></Jutecruft>,
                loader:()=>fetch('http://localhost:5000/addcruft')
            },
            {
                path:'/users',
                element:<Users></Users>,
                loader:()=>fetch('http://localhost:5000/users'),
            },
            {
                path:'/users/:id',
                element:<Navbar></Navbar>,
                loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
            }
            
        ]
    }
])