import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Cruftdetails = ({ cruft}) => {
    const { _id, name, catselect, madeof, quantity, photo, price, descripion } = cruft;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Category: {catselect}</p>
                    <p>Materials: {madeof}</p>
                    <p>Available Stocks: {quantity}</p>
                    <p>Price:<b>$</b> {price}</p>
                    <p>{descripion}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/viewdetails/${_id}`}><button className="btn btn-primary bg-orange-500">view details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cruftdetails.propTypes = {
    cruft:PropTypes.object
}
export default Cruftdetails;