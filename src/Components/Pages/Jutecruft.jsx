
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Jutecruftdisplay from "./Jutecruftdisplay";


const Jutecruft = () => {
    const madeof = "Jute Fiber made"
    const loadedjutecrufts = useLoaderData();
    // const [jutecrufts, setJutecrufts]=useState(loadedjutecrufts);
    const juteprods = loadedjutecrufts?.filter(jutecruft => jutecruft?.madeof === madeof)

    return (
        <div>
            <Helmet>
                <title>W&J/Jutecruft</title>
            </Helmet>

            <div className="md:grid grid-cols-2 gap-3 mt-10 mb-10 p-5">
                {
                    juteprods.map(juteprod => <Jutecruftdisplay key={juteprod._id} juteprod={juteprod}></Jutecruftdisplay>)
                }
            </div>
        </div>
    );
};

export default Jutecruft;