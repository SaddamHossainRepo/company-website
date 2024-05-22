// import arrow from "/arrow.svg"
// const Navbar = () => {
//     return (
//         <div className="mx-[125px] mx-[20px]   ">
//             <div className="pt-[20px] pt-[80px] ">
//                 <div className=" flex ">
//                     <div className="flex">
//                         <img className="w-[130px] h-[25px] w-[305.25px] h-[58.51px] 2w-[386px] 2h-[74px]  " src="/logo.png" alt="" />
//                         <p className='border border-l-1 mx-[50px] 2mx[60px] hidden md:block  border-white h-[73.259px] 2h-[82px]'></p>
//                     </div>
//                     <div className="flex  items-center">
//                         <ul className="flex flex-col md:flex-row text-white text-[20px]">
//                             <li className="mr-[40px] 2mr-[60px]">about Us</li>
//                             <li className="mr-[40px] 2mr-[60px]" >service</li>
//                             <li className="mr-[40px] 2mr-[60px]" >our work</li>
//                             <li className="mr-[141px] 2mr-[308px]" >education</li>
//                         </ul>
//                         <div className="flex hidden md:block">
//                             <button>
//                                 <div className="flex border rounded-full text-white text-[17px] px-[34px] pt-[14px] pb-[13.66px] 2text-[25px] 2pl-[49px] 2pr-[48.32px] 2pt-[22.4px] 2pb-[21.52px]">
//                                     <p className="2mr-[10px]">Hire Us</p>
//                                     <img src={arrow} alt="" />
//                                 </div>
//                             </button>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
// import { Link } from "react-scroll";
import "../../../Components/text.css"
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";



const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleMenuOpen = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return (
        <>
            <nav>
                <div className="xl:pt-[80px] pt-[20px]  xl:mx-[125px] mx-[20px] xl:gap-[50px] 2xl:[60px] flex justify-between  items-center ">
                    <div className="flex items-center gap-[50px]">
                        <figure className="flex xl:gap-[50px] 2xl:gap-[60px] items-center">
                            <img className="xl:w-[305.25px] xl:h-[58.51px] w-[130px] h-[24.92px] 2xl:w-[386px] 2xl:h-[74px] " src="/logo.png" alt="" />
                            <span className="hidden md:block h-[73.25px] w-[1px] bg-[#FBFBFB]"></span>
                        </figure>

                        <div className=" md:flex hidden items-center xl:ml-[5px] 2xl:ml-[10px]  mr-[141px]">
                            <ul className="flex text-white xl:gap-[40px] 2xl:gap-[60px] xl:text-[17px] 2xl:text-[25px] font-ethosNovaRegular " onClick={toggleMenuOpen}>
                                <Link to="about-us" smooth={true} duration={1500} >about us</Link>
                                <Link to="services" smooth={true} duration={1500} >services</Link>
                                <Link to="about-us" smooth={true} duration={1500} >our work</Link>
                                <Link to="about-us" smooth={true} duration={1500} >education</Link>
                            </ul>
                        </div>
                    </div>

                    <div className="text-white  md:flex hidden xl:gap-[10px] gap-1 justify-center items-center border border-[#09E5E5]  rounded-full  xl:px-[34px] xl:pt-[13px] xl:pb-[13px] 2xl:pl-[49px] 2xl:pr-[48.32px] 2xl:pt-[21px] 2xl:pb-[21px] px-[24px] py-[12.5px]">
                        <p className="xl:text-[17px] 2xl:text-[25px] font-ethosNovaRegular text-[12px] ">hire us</p>
                        <img className="xl:h-[15px] xl:w-[15px] h-[6.77px] w-[7.45px]" src="/arrow.svg" alt="" />
                    </div>
                    <button
                        className="lg:hidden focus:outline-none "
                        onClick={toggleMenuOpen}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="fff"
                            stroke="#fff"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isMobileMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* mobile menu */}
                <div className={`lg:hidden  z-20 absolute top-14 w-full min-h-screen ${isMobileMenuOpen
                    ? "right-0  ransition-all ease-in-out duration-500"
                    : "right-[100%] transition-all ease-in-out duration-500"
                    }`}>

                    <div className=" bg-[#072B2B]  text-white w-[50%] mr-auto h-[95vh] px-6 font-ethosNovaMedium rounded-r-md py-2">
                        <ul className="space-y-1 ">
                            <Fade cascade >
                                <li> <Link to="about-us" smooth={true} duration={1500} >about us</Link></li>
                                <li><Link to="services" smooth={true} duration={1500} >services</Link></li>
                                <li><Link to="our-work" smooth={true} duration={1500} >our work</Link></li>
                                <li><Link to="#" smooth={true} duration={1500} >education</Link></li>
                            </Fade>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Navbar;