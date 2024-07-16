import LeftAdd from "../Components/Pages/LeftAdd";
import RightAdd from "../Components/Pages/RightAdd";


const Header = () => {
    return (
        <div>
            <div className="grid md:grid-cols-3">
                <div className="">
                    <LeftAdd></LeftAdd>
                </div>
                <div className="">
                    <h1 className="text-4xl text-orange-800 bg-orange-400 md:text-center"><span className="text-3xl text-green-600">a</span>rtigianato <span className="text-3xl text-green-600">d</span>i <span className="text-3xl text-green-600">l</span>egno</h1>
                </div>
                <div className="">
                    <RightAdd></RightAdd>
                </div>
            </div>
        </div>
    );
};

export default Header;