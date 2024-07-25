import PropTypes from 'prop-types';
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Mylistdetails = ({ cruft, crufts, setCrufts }) => {
    
    const {_id, name, catselect, madeof, quantity, photo, price, descripion } = cruft;


    const handleDelete= _id =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure to Delete?",
            text: "This step cannot be reversed",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://b9-assignment10-server-side.vercel.app/addcruft/${_id}`,{
                method:'DELETE'
              })
              .then(res =>res.json())
              .then(data =>{
                console.log(data)
                if(data.deletedCount >0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Item has been deleted.",
                        icon: "success"
                      });
                    const remainItems =  crufts?.filter(remaincruft => remaincruft._id !== _id)
                    setCrufts(remainItems)

                }
              })
            }
          });
    }
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure className='mt-6 p-2'>
                <img className='rounded-lg'
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><strong>Product Description: </strong>{descripion}</p>
                <p><strong>Product Category: </strong>{catselect}</p>
                <p><strong>Product material: </strong>{madeof}</p>
                <p><strong>Stocks in hand: </strong>{quantity}</p>
                <p><strong>Price: $</strong>{price}</p>
                <div className="card-actions justify-end">
                    <div className="join join-vertical lg:join-horizontal border border-solid border-orange-500 items-center">
                        <Link to={'/allarts'}><button className="btn join-item text-orange-600"><IoIosArrowBack /></button></Link>
                        <Link to={`/editcruft/${_id}`}><button className="btn join-item text-orange-600"><FaEdit /></button></Link>
                        <Link><button onClick={()=>handleDelete(_id)} className="btn join-item text-orange-600"><FaDeleteLeft /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Mylistdetails.propTypes = {
    cruft: PropTypes.object,
    crufts: PropTypes.object,
    setCrufts: PropTypes.object

}
export default Mylistdetails;