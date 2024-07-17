import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";


const Root = () => {
    return (
        <div className="mx-1">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;