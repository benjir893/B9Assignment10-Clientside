import Marquee from 'react-fast-marquee';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <div>
            <Helmet>
                <title>W&J/Home</title>
            </Helmet>
            <div className="mt-10 mb-10 mx-auto">
                <h1 className='font-bungee text-2xl text-center'>Handcrafted Elegance: Wood and Jute Masterpieces</h1>
            </div>
            <div className="ml-5 mr-5 mb-11">
                <div className="carousel w-full h-80 mt-10 rounded-lg ">
                    <div id="item1" className="carousel-item w-full">
                        <img
                            src="https://i.ibb.co/PmFNmhH/jutesholderbag.jpg"
                            className="w-full " />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                            src="https://i.ibb.co/YND7F45/woodf6.jpg"
                            className="w-full " />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                            src="https://i.ibb.co/LCY3ZGW/wooljute.jpg"
                            className="w-full " />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                            src="https://i.ibb.co/7gTqtCp/woodsc3.jpg"
                            className="w-full " />
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    <Link to={'/allarts'}>more...</Link>
                </div>
            </div>
            <div className="mt-10 mb-10 mx-auto">
                <h1 className='font-bungee text-lg text-center'>Some of our Wood and Jute Masterpieces</h1>
            </div>
            <div className=" mt-3 mb-10 mx-10">
                <Marquee className=''>
                    <div className="carousel carousel-center rounded-box">
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/7gTqtCp/woodsc3.jpg" alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://i.ibb.co/myZ1Nyb/woodf9.jpg"
                                alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://i.ibb.co/LCY3ZGW/wooljute.jpg"
                                alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://i.ibb.co/8Xqpc4b/jutedeco.jpg"
                                alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/YND7F45/woodf6.jpg" alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/Sw1jFwM/woodsc2.jpg" alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://i.ibb.co/RgXTjQH/woodf3.jpg"
                                alt="Pizza" />
                        </div>
                    </div>
                </Marquee>
                <div className='text-center items-center w-full text-orange-500'>
                    <Link to={'/allarts'}><strong >See more...</strong></Link>
                </div>
            </div>
            {/* all wooden crufts */}
            <div className="mt-10 mb-10 mx-auto">
                <h1 className='font-bungee text-lg text-center'>Check out our some wood masterpieces collections</h1>
            </div>
            <div className="carousel w-full mt-10 mb-10 border border-solid border-orange-500 p-5 md:grid grid-cols-3 gap-4">
                <div className="carousel-item">
                    <img className='border-2 border-solid border-orange-400 border-spacing-4 rounded-lg ml-10'
                        src="https://i.ibb.co/P1qP2rT/doghouse.jpg"
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img className='border-2 border-solid border-orange-400 border-spacing-4 rounded-lg ml-10'
                        src="https://i.ibb.co/CQg2vcF/woodenframe.webp"
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img className='border-2 border-solid border-orange-400 border-spacing-4 rounded-lg ml-20'
                        src="https://i.ibb.co/bKVfQqn/woodenset.jpg"
                        alt="Burger" />
                </div>
                <div className=" text-orange-500 text-center w-full">
                    <Link to={'/woodhome'} ><strong className=''>See More wooden crufts...</strong></Link></div>
            </div>
            {/* all jute crafts */}
            <div className="mt-10 mb-10 mx-auto">
                <h1 className='font-bungee text-lg text-center'>Our beautiful jute masterpieces collections</h1>
            </div>
            <div className="carousel w-full mt-10 mb-10 border border-solid border-orange-500 p-5 md:grid grid-cols-3 gap-4">
                <div className="carousel-item">
                    <img className='border-2 border-solid border-orange-400 border-spacing-4 rounded-lg ml-10'
                        src="https://i.ibb.co/ftLpSX0/jutedrawingroomset.jpg"
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img className='border-2 border-solid border-orange-400 border-spacing-4 rounded-lg ml-10'
                        src="https://i.ibb.co/GdfyLq4/juteseat.jpg"
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img className='border-2 border-solid border-orange-400 border-spacing-4 rounded-lg ml-20'
                        src="https://i.ibb.co/LCY3ZGW/wooljute.jpg"
                        alt="Burger" />
                </div>

                <div className=" text-orange-500 text-center w-full">
                    <Link to={'/jutecruft'} ><strong className=''>See More Jute crufts...</strong></Link>
                </div>
            </div>
            {/* customer section */}
            <div className="mt-10  mx-auto">
                <h1 className='font-bungee text-lg text-center'>what our customers say...</h1>
            </div>
            <div className="lg:grid grid-cols-3 gap-2">
                {/* 1st */}
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src="https://i.ibb.co/9Tqtst9/profile2.jpg"
                            className="max-w-16 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-blue-700 font-bold font-poppins">Sima Robertson</h1>
                            <p className="py-6">
                            I recently purchased a beautifully handcrafted wood craft, and I'm absolutely thrilled with it! The quality and attention to detail are outstanding. It adds a perfect rustic charm to my home decor. I’ve received so many compliments already. I highly recommend these unique and exquisite pieces. Simply stunning!
                            </p>
                            
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src="https://i.ibb.co/1bRr51R/profile3.jpg"
                            className="max-w-16 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-blue-700 font-bold font-poppins">Shakib khan</h1>
                            <p className="py-6">
                            I recently bought a beautiful jute craft, and I couldn't be happier! The craftsmanship is exceptional, and it adds a lovely natural touch to my home. I've received numerous compliments. Highly recommend for anyone seeking unique, eco-friendly decor!
                            </p>
                            
                        </div>
                    </div>
                </div>
                {/* 3rd */}
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src="https://i.ibb.co/N9Q4pYZ/profile1.jpg"
                            className="max-w-16 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-blue-700 font-bold font-poppins">Mira Bai</h1>
                            <p className="py-6">
                            I recently bought a beautiful wood comforter, and I'm extremely impressed! The craftsmanship and quality are outstanding. It adds a warm, rustic touch to my bedroom, making it feel cozy and inviting. I've received many compliments on it. Highly recommend for anyone seeking unique, stylish decor!
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;