import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const Viewdetails = () => {
    const cruft = useLoaderData();
    const { name, catselect, madeof, quantity, photo, price, descripion } = cruft;
    return (
        <div>
            <Helmet><title>W&J/viewdetails</title></Helmet>
            <div className="card bg-base-100 w-full shadow-xl md:grid grid-cols-2 gap-1">
                <figure>
                    <img
                        src={photo}
                        alt="cruft" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Cruft Category: {catselect}</p>
                    <p>Cruft Materials: {madeof}</p>
                    <p>Stocks in hand: {quantity}</p>
                    <p>Price:<b>$</b> {price}</p>
                    <p><strong>About This Product:</strong> {descripion}</p>
                    <div className="card-actions justify-end">
                        <Link><button className="btn btn-primary bg-orange-500">buy now</button></Link>
                        <Link to={-1}><button className="btn btn-primary bg-orange-500">back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Viewdetails;