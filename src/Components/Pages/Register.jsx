import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Apps/Authprovider";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const { createUser, loginwithGoogle, loginwithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showpass, setShowpass] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const newuser = { name, photo, email, password, };
        console.log(newuser)

        if (password.length < 6) {
            Swal.fire("password must be minimum 6 digits with upper and lower case latter");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire("Upper case latter is missing!");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            Swal.fire("Lower case latter is missing!");
            return;
        }
        else if (!/\d/.test(password)) {
            Swal.fire("Number is missing !");
            return;
        }


        createUser(email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                const createdat = userCredential.user?.metadata?.creationTime;
                const user = {name, photo, email, createdat}
                fetch('https://b9-assignment10-server-side.vercel.app/users',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user),
                })
                .then(res=> res.json())
                .then(data=>{
                    console.log(data)
                    if(data.insertedId){
                        Swal.fire("A new User added Successfully!");
                        e.target.reset()
                        navigate('/')
                    }
                })
            })
            .catch(error => {
                console.error(error)
            })


    }
    const handleGoogleLogin = e => {
        e.preventDefault();
        loginwithGoogle()
            .then(userCredential => {
                console.log(userCredential.user)
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleloginwithGithub = e => {
        e.preventDefault();
        loginwithGithub()
            .then(userCredential => {
                console.log(userCredential.user)
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero bg-base-200">
            <Helmet>
                <title>W&J/Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-grow-0">
                <div className="text-center mb-4">
                    <h1 className="text-5xl font-bold">Registration</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder=" photo url only" className="input input-bordered" />
                            </div>
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
                                <div className="md:flex items-center">
                                    <input type={showpass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required /><span className=" ml-30" onClick={() => setShowpass(!showpass)}>
                                        {
                                            showpass ? <FaRegEye /> : <FaRegEyeSlash />
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <Link className="label-text-alt link link-hover text-orange-500" to={'/login'}>Back to log in?</Link>
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <Link >Instead log in with <button className="label-text-alt link link-hover text-orange-500" onClick={handleGoogleLogin}>Google</button> ? or <button onClick={handleloginwithGithub} className="label-text-alt link link-hover text-orange-500">GitHub</button> ?</Link>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;