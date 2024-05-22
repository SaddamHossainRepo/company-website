import { useState, useEffect } from 'react';
// import logo from '/logo.png';
import '../../../Components/text.css';
// import { Link } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import "./animation.css"
import Navbar from './Navbar';

const HeroSection = () => {
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            // Simulating an asynchronous operation (e.g., fetching data)
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Once the data is fetched or the operation is done, set loading to false
            setLoading(false);
        };

        // Call the fetchData function
        fetchData();
    }, []);

    // const toggleMobileMenu = () => {
    //     setIsMobileMenuOpen(!isMobileMenuOpen);
    // };
    // <nav className=" py-2.5  relative">
    //                     <div className="xl:mx-[125px] mx-5 mt-5 flex flex-wrap items-center   justify-between xl:mt-[90px]  text-white">
    //                         <img src="/logo.png" className="h-[24px] w-[130px] xl:w-[305.25px] xl:h-[58.51px] 2xl:w-[386px] 2xl:h-[74px] xl:mr-[40px]" alt="EthicalDen Logo" />
    //                         <p className='border border-l-2  hidden md:block  border-white xl:h-[73.259px] 2xl:h-[80px] xl:mr-[20px]'></p>

    //                         <div className="flex items-center xl:order-2">

    //                             <button className={`text-white border hidden md:block rounded-full xl:px-[34px] xl:pt-[14px] xl:pb-[13.66px] 2xl:pl-[49px] 2xl:pr-[48.32px] 2xl:pt-[22.4px] 2xl:pb-[21.52px]  border-[#56D79C]`}>
    //                                 <div className="flex justify-center items-center gap-1 2xl:gap-[10px]">
    //                                     <p className=" font-e text-[12px] 2xl:text-[25px] font-ethosNovaRegular xl:text-[17px]">Hire Us</p>
    //                                     <img src={arrow} className='2xl:h-[15px] w-[15px]' alt="" />
    //                                 </div>
    //                             </button>
    //                             <button
    //                                 onClick={toggleMobileMenu}
    //                                 type="button"
    //                                 className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg xl:hidden  focus:outline-none"
    //                                 aria-controls="mobile-menu-2"
    //                                 aria-expanded={isMobileMenuOpen}
    //                             >
    //                                 <span className="sr-only">Open main menu</span>
    //                                 <svg
    //                                     className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
    //                                     fill="currentColor"
    //                                     viewBox="0 0 20 20"
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                 >
    //                                     <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
    //                                 </svg>
    //                                 <svg
    //                                     className={`w-6 h-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
    //                                     fill="currentColor"
    //                                     viewBox="0 0 20 20"
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                 >
    //                                     <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
    //                                 </svg>
    //                             </button>
    //                         </div>

    //                         {/* for mobile version */}
    //                         <div
    //                             className={`items-center justify-between  px-1 py-2  w-full xl:flex xl:w-auto xl:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'
    //                                 }`}

    //                         >
    //                             {/* list items */}
    //                             <ul className="flex flex-col [&_li]:cursor-pointer gap-y-2 md:gap-y-0 font-ethosNovaRegular  text-[15px] xl:text-[20px] 2xl:text-[25px] xl:flex-row  xl:mt-0 ">
    //                                 <li><Link to="about-us" smooth={true} duration={1600} className="xl:mr-[40px] 2xl:mr-[60px] ">About Us</Link></li>
    //                                 <li><Link to="services" smooth={true} duration={1600} className="xl:mr-[40px] 2xl:mr-[60px]">Services</Link></li>
    //                                 <li><Link className="xl:mr-[40px] 2xl:mr-[60px]">Our Work</Link></li>
    //                                 <li><Link className="xl:mr-[141px] 2xl:mr-[308px]">Education</Link></li>



    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </nav>

    const heroStyle = {
        backgroundImage: `url('/banner.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div style={heroStyle} className="xl:h-screen 2xl:h-[1140px] ">
            {loading ? (
                // Render the preloader while loading is true
                <div className="h-screen flex justify-center items-center bg-black">
                    <div>
                        <img className="xl:h-[150px] 2xl:h-[220px] " src="/animation.gif" alt="Loading..." />
                        <Fade duration={2000}>
                            <h4 className="text-color text-center font-bold text-[20px] xl:text-[35px] 2xl:text-[60px]">Ethical Den</h4>
                        </Fade>
                    </div>
                </div>
            ) : (
                // Render the actual content once loading is complete
                <>
                    <Navbar></Navbar>

                    <div className="xl:mx-[125px] mx-5 grid grid-cols-1 xl:mt-[220px] 2xl:mt-[260px] mt-[120px]">
                        <div className="w-full">
                        <h1 className="xl:text-[70px] text-[25px] text-white 2xl:text-[90px] p-0 m-0 font-rotaExtraBold">
                                    innovative Cyber Agency
                                </h1>
                            <div className='relative  h-[40px] xl:h-[80px] 2xl:h-[110px] overflow-hidden '>
                                <div className='absolute delay-1000 extraLargeDesktopSlide largeDesktopSlide mobileSlide '>
                                    <h2 className="xl:text-[70px] text-[25px]   mt-0 p-0 m-0 text-color 2xl:text-[90px] font-rotaExtraBold">
                                        Artificial Intelligence
                                    </h2>
                                    <h2 className="xl:text-[70px] text-[25px]   mt-0 p-0 m-0 text-color 2xl:text-[90px] font-rotaExtraBold">
                                        Cyber Security
                                    </h2>
                                    <h2 className="xl:text-[70px] text-[25px]   mt-0 p-0 m-0 text-color 2xl:text-[90px] font-rotaExtraBold">
                                        Digital Marketing
                                    </h2>
                                    <h2 className="xl:text-[70px] text-[25px]   mt-0 p-0 m-0 text-color 2xl:text-[90px] font-rotaExtraBold">
                                        Web Development
                                    </h2>
                                </div>
                            </div>
                            <p className="xl:w-[671px] text-[#FBFBFB] xl:text-[22px] font-ethosNovaMedium 2xl:w-[1024px]  2xl:text-[25px] text-[12px] xl:my-[50px] 2xl:my-[80px] my-[25px]">
                                    We are the best digital marketing agency from West Bengal, curating experiences that users fall in love
                                    with.
                                </p>
                            {/* <button className="text-white flex xl:gap-[10px] gap-1 justify-center items-center border rounded-full xl:px-[35px] xl:pt-[14px] xl:pb-[13.66px] 2xl:pl-[49px] 2xl:pr-[48.32px] 2xl:pt-[22.4px] 2xl:pb-[21.52px] px-[25px] py-[12.5px]"
                                style={{
                                    borderImage: 'linear-gradient(270deg, #A8FF57 -22.16%, #09E5E5 118.56%)',
                                    borderImageSlice: 1,
                                    
                                }}
                            >
                                <p className="xl:text-[17px] 2xl:text-[25px] font-ethosNovaRegular text-[12px]">hire us</p>
                                <img className="xl:h-[15px] xl:w-[15px] h-[6.77px] w-[7.45px]" src="/arrow.svg" alt="" />
                            </button> */}
                            <button className="text-white flex xl:gap-[10px] gap-1 justify-center items-center border border-[#09E5E5] rounded-full xl:px-[35px] xl:pt-[14px] xl:pb-[13.66px] 2xl:pl-[49px] 2xl:pr-[48.32px] 2xl:pt-[22.4px] 2xl:pb-[21.52px] px-[25px] py-[12.5px]"
                            >
                                <p className="xl:text-[17px] 2xl:text-[25px] font-ethosNovaRegular text-[12px]">hire us</p>
                                <img className="xl:h-[15px] xl:w-[15px] h-[6.77px] w-[7.45px]" src="/arrow.svg" alt="" />
                            </button>

                        </div>
                    </div>
                    <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
                </>
            )}
        </div>
    );
};

export default HeroSection;
