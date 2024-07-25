import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Mylistdetails from "./Mylistdetails";
import { AuthContext } from "../../Apps/Authprovider";


const Mylist = () => {
    const { user } = useContext(AuthContext)
    const{email}=user;
    const addedcrufts = useLoaderData();
    const [crufts, setCrufts] = useState(addedcrufts);

    const myitems = crufts.filter(user => user.email === email)
    

    return (
        <div>
            <Helmet>
                <title>W&J/Mylist</title>
            </Helmet>
            
            <div className="md:grid grid-cols-2 gap-1 p-2 mt-10 mb-10">
                {
                    
                    myitems.map(cruft => <Mylistdetails key={cruft._id} cruft={cruft} crufts={crufts} setCrufts={setCrufts} ></Mylistdetails>)
                }
            </div>
        </div>
    );
};

export default Mylist;