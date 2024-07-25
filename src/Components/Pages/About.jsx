import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div>
            <Helmet>
                <title>W&J/About</title>
            </Helmet>
            <div className="">
                <h1 className="font-Almendra text-orange-600 text-2xl font-semibold ml-10 mt-10 mb-4">About Us</h1>
            </div>
            <div
                className="hero min-h-screen rounded-lg"
                style={{
                    backgroundImage: "url(https://i.ibb.co/6DRHSnj/coverphoto3.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl font-bold font-bungee">Crafting Nature’s Beauty: Our Story</h1>
                        <p className="mb-5 text-orange-800 font-popMocy">
                        <strong>Crafting Nature’s Beauty: Our Journey. Meet the artisans behind our creations, inspired by nature and crafted with care. From our hands to your home, discover the heart of our eco-friendly crafts.</strong>
                        </p>
                       <Link to={'/allarts'}><button className="btn bg-orange-100 text-orange-900 font-popMocy">Let's Get Started</button></Link>
                    </div>
                </div>
            </div>
            <div className="md:flex mt-10 mb-10">
                <div className="col-span-2 row-span-2 p-10">
                    <h1 className="font-bungee text-4xl">Who we are.. </h1>
                    <p className="text-orange-800 font-poppins font-semibold">We are a group of young people are working together to create some oppurtunities for the skilled people who left behind due to their roral life. We travel a lot and collect crufts from those roral designers. </p>
                </div>
                <div className="p-4">
                    <div className="p-4">
                        <h1 className="font-bungee text-4xl">Our Mission</h1>
                        <p><strong>Our mission is to discover most exellent cruft work and worker and bring them into the world of Oppurtunity</strong></p>
                    </div>
                    <div className="p-4">
                        <h1 className="font-bungee text-4xl">Our Goal</h1>
                        <p><strong>Create an environment where every one gets his chance to show one's talent</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;