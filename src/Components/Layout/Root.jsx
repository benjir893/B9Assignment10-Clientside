import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../../Header/Header";


const Root = () => {
    return (
        <div className="mx-1">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;