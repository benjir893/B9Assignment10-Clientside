import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Editcruft = () => {
    const cruft = useLoaderData();
    const navigate = useNavigate();
    const { _id, name, catselect, madeof, quantity, photo, price, descripion } = cruft;

    const handleEditem = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const catselect = form.get('catselect');
        const madeof = form.get('madeof');
        const quantity = form.get('quantity');
        const photo = form.get('photo');
        const price = form.get('price');
        const description = form.get('description');
        const updatedCruft = { name, catselect, madeof, quantity, photo, price, description };

        Swal.fire({
            title: "Are you sure to update?",
            text: "press cancel if you don't want",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://serverside-khaki.vercel.app/addcruft/${_id}`, {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(updatedCruft),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {

                            Swal.fire({
                                title: "UPDATED!",
                                text: "Item has benn Updated",
                                icon: "success"
                            });
                            navigate('/mylist')
                        }
                    })

            }
        });



    }
    return (
        <div>
            <Helmet>
                <title>W&J/editcrufts</title>
            </Helmet>

            <div className="">
                <div className="hero bg-orange-100 min-h-screen">
                    <div className="hero-content flex-col lg:flex-grow-0">
                        <h1 className="text-2xl text-center font-Almendra font-bold text-orange-500">Edit the Product: {name}</h1>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                            <form onSubmit={handleEditem} className="card-body">
                                <div className=" md: grid grid-cols-2 gap-6">
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Cruft Name</span>
                                        </label>
                                        <input type="text" defaultValue={name} placeholder="name of cruft" name="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Cruft Category</span>
                                        </label>
                                        <input type="text" defaultValue={catselect} placeholder="category" name="catselect" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Materials</span>
                                        </label>
                                        <input type="text" defaultValue={madeof} placeholder="product material" name="madeof" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Stock Quantity</span>
                                        </label>
                                        <input type="text" defaultValue={quantity} placeholder="quantity" name="quantity" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" defaultValue={photo} placeholder="photo url" name="photo" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <div className="md:flex items-center">
                                        <span>$</span>
                                        <input type="text" defaultValue={price} placeholder="product price" name="price" className="input input-bordered w-full" required />
                                    </div>
                                </div>

                                <div className="form-control mt-6 mb-6">
                                    {/* <label className="label">
                                        <span className="label-text">Stock Description</span>
                                    </label> */}
                                    <textarea className="textarea textarea-bordered" defaultValue={descripion} name="description" placeholder="Stock Description" required></textarea>
                                </div>

                                <div className="form-control mt-6">
                                     <button className="btn btn-primary font-Almendra text-xl bg-orange-600">UPDATE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editcruft;