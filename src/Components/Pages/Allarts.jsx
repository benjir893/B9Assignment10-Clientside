import { Helmet } from "react-helmet-async";
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cruftdetails from './Cruftdetails';


const Allarts = () => {
    const addedcrufts = useLoaderData();
    const [crufts, setCrufts] = useState(addedcrufts);
    return (
        <div>
            <Helmet>
                <title>W&J/Allarts</title>
            </Helmet>
            <h1 className="text-center font-popMocy text-orange-600 font-semibold text-2xl m-4">Our Collections</h1>
            <div className="grid md:grid-cols-2 gap-3">
                {
                    Array.isArray(crufts)&&crufts?.map(cruft =><Cruftdetails key={cruft._id} cruft={cruft} setCrufts={setCrufts}></Cruftdetails>)
                }
            </div>
        </div>
    );
};

export default Allarts;