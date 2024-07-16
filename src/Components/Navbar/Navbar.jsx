import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-orange-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink className={"font-semibold"} to={'/'}>Home</NavLink></li>
                        <li>
                            {/* <a>Parent</a> */}
                            <NavLink className={"font-semibold"} to={'/allarts'}>All Arts & Crufts</NavLink>
                            <ul className="p-2">
                                <li><NavLink className={"font-semibold"} to={'/woodhome'}>Wooden&Cruft</NavLink></li>
                                <li><NavLink className={"font-semibold"} to={'/jutecruft'}>Jute Crufts</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink className={"font-semibold"} to={'/about'}>About</NavLink></li>
                        <li><NavLink className={"font-semibold"} to={'/addcruft'}>Add Cruft</NavLink></li>
                        <li><NavLink className={"font-semibold"} to={'/mylist'}>My Cruft List</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-orange-800 bg-orange-400"><span className="text-3xl text-green-600">a</span>rtigianato<span className="text-3xl text-green-600">d</span>i<span className="text-3xl text-green-600">l</span>egno</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className={"font-semibold"} to={'/'}>Home</NavLink></li>
                    <li>
                        <details>
                            <summary><NavLink className={"font-semibold"} to={'/allarts'}>All Arts & Crufts</NavLink></summary>
                            {/* <Link to={'/woodhome'}>Wooden&Cruft</Link> */}
                            <ul className="p-2">
                            <li><NavLink className={"font-semibold"} to={'/woodhome'}>Wooden&Cruft</NavLink></li>
                            <li><NavLink className={"font-semibold"} to={'/jutecruft'}>Jute Crufts</NavLink></li>
                            
                            </ul>
                        </details>
                    </li>
                    <li><NavLink className={"font-semibold"} to={'/about'}>About</NavLink></li>
                    <li><NavLink className={"font-semibold"} to={'/addcruft'}>Add Cruft</NavLink></li>
                    <li><NavLink className={"font-semibold"} to={'/mylist'}>My Cruft List</NavLink></li>
                    <li><NavLink className={"font-semibold"} to={'/register'}>Register</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline bg-orange-500 text-white hover:bg-orange-800 hover:text-blue-100"><Link to={'/login'}>SignIn</Link></button>
            </div>
        </div>
    );
};

export default Navbar;