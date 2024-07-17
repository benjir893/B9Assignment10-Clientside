import LeftAdd from "../Components/Pages/LeftAdd";
import RightAdd from "../Components/Pages/RightAdd";
import moment from 'moment';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <div>
            <div className="grid md:grid-cols-3">
                <div className="">
                    <LeftAdd></LeftAdd>
                </div>
                <div className="">
                    <h1 className="text-4xl text-orange-800 bg-orange-400 md:text-center font-Almendra"><span className="text-3xl text-green-600">a</span>rtigianato <span className="text-3xl text-green-600">d</span>i <span className="text-3xl text-green-600">l</span>egno</h1>
                    <h1 className="text-orange-600 font-Almendra font-semibold text-2xl md:text-center">The Art of Woodworking Redefined</h1>
                    <h2 className="font-popMocy text-center">{moment().format("dddd, MMMM, Do, YYYY")}</h2>
                    <div className="p-5">
                        <Marquee className="text-green-500 font-bungee text-xl">
                            Beautiful Woodwork, Beautiful Spaces
                        </Marquee>
                    </div>
                </div>
                <div className="">
                    <RightAdd></RightAdd>
                </div>
            </div>
        </div>
    );
};

export default Header;