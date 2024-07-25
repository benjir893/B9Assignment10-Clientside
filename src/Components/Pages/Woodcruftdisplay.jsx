import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Woodcruftdisplay = ({ woodprod }) => {

    const { name, catselect, madeof, quantity, photo, price, descripion } = woodprod;
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure className='mt-5'>
                <img className='rounded-lg p-4'
                    src={photo}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><strong>Product Description: </strong>{descripion}</p>
                <p><strong>Product Ctegory: </strong>{catselect}</p>
                <p><strong>Product Meterials: </strong>{madeof}</p>
                <p><strong>Stock in hand: </strong>{quantity}</p>
                <p><strong>Price: </strong>{price}</p>
                <div className="card-actions justify-end">
                    <Link><button className="btn bg-orange-600 text-white">Buy Now</button></Link>
                    <Link to={'/allarts'}><button className="btn bg-orange-600 text-white">Back</button></Link>
                </div>
            </div>
        </div>
    );
};
Woodcruftdisplay.propTypes = {
    woodprod: PropTypes.object
}
export default Woodcruftdisplay;