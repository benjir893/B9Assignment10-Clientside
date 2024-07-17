import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Apps/Authprovider";
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const user = { email, password };
        console.log(user)

        loginUser()
            .then(userCredential => {
                console.log(userCredential.user);
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                Swal.fire("User doesn't exits/wrong password");
            })
    }

    return (
        <div className="hero bg-base-200">
            <Helmet>
                <title>W&J/Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-grow-0">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link className="label-text-alt link link-hover text-orange-500" to={'/register'}>yet to Register?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;