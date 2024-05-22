import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import allServicesImage from "/allServices.png";
// import { Fade, Zoom, Roll , Bounce , Rotate , Slide } from "react-awesome-reveal";

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            icon: "/UxIcon.png",
            title: 'UI/UX design',
            desc: 'Knowing the state of your current cybersecurity posture as well as executing on continued cybersecurity .'
        },
        {
            id: 2,
            icon: '/webIcon.png',
            title: 'Web Design',
            desc: 'Knowing the state of your current cybersecurity posture as well as executing on continued cybersecurity .'
        },
        {
            id: 3,
            icon: '/graphicsIcon.png',
            title: 'Graphics Design',
            desc: 'Knowing the state of your current cybersecurity posture as well as executing on continued cybersecurity .'
        },

        {
            id: 4,
            icon: '/graphicsIcon.png',
            title: 'Graphics Design',
            desc: 'Knowing the state of your current cybersecurity posture as well as executing on continued cybersecurity .'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    // State to store whether the device is small or not
    const [isSmallDevice, setIsSmallDevice] = useState(false);

    // UseEffect to update isSmallDevice state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsSmallDevice(window.innerWidth <= 768);
        };

        // Initial check on mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id='services'  className="xl:mx-[125px] text-white mx-[20px] mt-[120px] xl:mt-0">
            <h2 className="xl:text-[60px] xl:mb-[50px] 2xl:text-[80px] 2xl:mb-[80px] text-[30px] mb-[25px] font-lotaBold ">All Services</h2>
            {isSmallDevice ? (
                <Slider {...settings}>
                    {services?.map((service) => (
                        <div
                            key={service.id}
                            className="service-card xl:w-[270px] p-[16px] rounded-[10px] hover:bg-[url('/allServices.png')] bg-center bg-no-repeat "

                        >
                            <div className=" ">
                            <img className='' src={service.icon} alt={service.title} />
                                <h3 className="xl:mt-[32px] xl:text-[25px]  mt-[27px] text-[20px] font-lotaBold  text-white">{service.title}</h3>
                                <p className="xl:mt-[19px] xl:text-[12px]  md:w-full w-[210px]  mt-[15px] text-[#FBFBFB] text-[12px] ">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <div  className="xl:grid xl:grid-cols-4 xl:items-center xl:gap-[50px] ">
                    {/* for mobile devices */}

                    {services?.map((service) => (
                        <div
                            key={service.id}
                            className="service-card 2xl:w-[372px] xl:w-[270px] xl:p-[16px] xl:rounded-[10px] transition duration-500 ease-in-out transform hover:scale-110  hover:bg-[url('/allServices.png')] bg-center bg-no-repeat "

                        >
                            <div className="2xl:pt-[35px] 2xl:pl-[35px] 2xl:pr-[30px] 2xl:pb-[66px]">
                                <img className='2xl:h-[78px] 2xl:w-[78px]' src={service.icon} alt={service.title} />
                                <h3 className="xl:mt-[32px] 2xl:text-[35px] 2xl:mt-[35px] mt-[27px] text-[20px] xl:text-[25px]  text-white">{service.title}</h3>
                                <p className="xl:mt-[19px] mt-[15px] 2xl:mt-[25px] 2xl:w-[266px] 2xl:text-[15px] text-[#FBFBFB] xl:text-[12px]">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ServicesSection;
