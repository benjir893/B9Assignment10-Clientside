import { useLoaderData } from "react-router-dom";


const Userdetails = () => {
    const user = useLoaderData()
    const {photo}= user;
    console.log(name)
    return (
        <div>
            {/* <p>{name}</p> */}
            <img className="w-10 rounded-full mr-1" src={photo} alt="" />
        </div>
    );
};

export default Userdetails;