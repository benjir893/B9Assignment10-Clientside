import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Woodcruftdisplay from "./Woodcruftdisplay";


const Woodencruft = () => {
    const madeof = "Wood made";
    const woodcrufts = useLoaderData();
    const woodprods = woodcrufts.filter(woodcruft => woodcruft.madeof === madeof);

    return (
        <div>
            <Helmet>
                <title>W&J/Woodencruft</title>
            </Helmet>
            <h1 className="font-Almendra font-semibold text-orange-600 text-2xl text-center mt-10">WOODEN CRUFTS </h1>
            <div className="md:grid grid-cols-2 gap-3 mt-10 mb-10 p-5">
                {
                    Array.isArray(woodprods)&& woodprods?.map(woodprod => <Woodcruftdisplay key={woodprod._id} woodprod={woodprod}></Woodcruftdisplay>)
                }
            </div>
        </div>
    );
};

export default Woodencruft;