import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-grow-0">
                <div className="text-center mb-4">
                    <h1 className="text-5xl font-bold">Registration</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="md:grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="email" className="input input-bordered" required />
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
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover text-orange-500" to={'/login'}>Back to log in?</Link>
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <Link >log in with <button className="label-text-alt link link-hover text-orange-500">Google</button> ? or <button className="label-text-alt link link-hover text-orange-500">GitHub</button> ?</Link>
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