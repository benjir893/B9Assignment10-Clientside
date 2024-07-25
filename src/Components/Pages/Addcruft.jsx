import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Apps/Authprovider";


const Addcruft = () => {
    const { user } = useContext(AuthContext)
    const {email} = user;
    const [catselect, setcatselect] = useState();
    const [madeof, setmadeof] = useState();

    const handleadditem = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const quantity = form.get('quantity');
        const photo = form.get('photo')
        const price = form.get('price')
        const descripion = form.get('description');
        const newItem = { email, name, catselect, madeof, quantity, photo, price, descripion };
        console.log(newItem)
        //fetching data for server side
        fetch('https://b9-assignment10-server-side.vercel.app/addcruft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                   
                }
            })

    }

    return (
        <div>
            <Helmet>
                <title>W&J/Addcrufts</title>
            </Helmet>

            <div className="">
                <div className="hero bg-orange-100 min-h-screen">
                    <div className="hero-content flex-col lg:flex-grow-0">
                        <h1 className="text-2xl text-center font-Almendra font-bold text-orange-500">Add a New Cruft Item</h1>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                            <form onSubmit={handleadditem} className="card-body">
                                <div className=" md: grid grid-cols-2 gap-6">
                                    <div className="form-control ">
                                        {/* <label className="label">
                                        <span className="label-text">Cruft Name</span>
                                    </label> */}
                                        <input type="text" placeholder="name of cruft" name="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <select className="select select-bordered w-full max-w-xs" value={catselect} onChange={e => setcatselect(e.target.value)}>
                                            <option disabled selected>cruft category</option>
                                            <option>House hold</option>
                                            <option>Furniture</option>
                                            <option>Show piece</option>
                                        </select>
                                    </div>
                                    <div className="form-control">
                                        <select className="select select-bordered w-full max-w-xs" value={madeof} onChange={e => setmadeof(e.target.value)}>
                                            <option disabled selected>cruft made of</option>
                                            <option>Wood made</option>
                                            <option>Jute Fiber made</option>
                                        </select>
                                    </div>
                                    <div className="form-control">
                                        {/* <label className="label">
                                        <span className="label-text">Stock Quantity</span>
                                    </label> */}
                                        <input type="text" placeholder="quantity" name="quantity" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    {/* <label className="label">
                                        <span className="label-text">Stock Quantity</span>
                                    </label> */}
                                    <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <div className="md:flex items-center">
                                        <span>$</span>
                                        <input type="text" placeholder="product price" name="price" className="input input-bordered w-full" required />
                                    </div>
                                </div>

                                <div className="form-control mt-6 mb-6">
                                    {/* <label className="label">
                                        <span className="label-text">Stock Description</span>
                                    </label> */}
                                    <textarea className="textarea textarea-bordered" name="description" placeholder="Stock Description" required></textarea>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary font-Almendra text-xl bg-orange-600">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addcruft;