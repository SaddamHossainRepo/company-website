
import arrow from '/arrow.svg';
import { Fade, } from "react-awesome-reveal";
const AboutUsSection = () => {
    return (
        <div id='about-us' className="text-white xl:mx-[125px] mt-[120px] mx-[20px] 2xl:mt-[260px] xl:mt-[250px]">
            <Fade direction='down'>
                <h2 className="xl:text-[60px] text-[30px] 2xl:text-[80px] 2xl:mb-[80px] font-lotaBold">About Us</h2>
            </Fade>
            <Fade cascade duration={500} direction='up'>
                <p className="xl:my-[50px] 2xl:text-[25px] font-ethosNovaRegular my-[25px] text-[12px] text-[#FBFBFB] lg:text-[22px] 2xl:mb-[35px]">Welcome to Ethical Den - The Strategic Digital Company. We are a brand and digital consultancy based in India, partnering globally with leaders across industries to build future products, services, and brands. Working for the unknown since 2021. Our services span a wide variety of audiences and capabilities, but all of them are rooted in inspiring ideas, human connection, and writing your brands future. The world is changing fast. We help you keep up</p>
                <p className="xl:mb-[50px] mb-[25px] text-[12px] text-[#FBFBFB] font-ethosNovaRegular lg:text-[22px] 2xl:text-[25px] 2xl:mb-[80px]">Welcome to Ethical Den - The Strategic Digital Company. We are a brand and digital consultancy based in India, partnering globally with leaders across industries to build future products, services, and brands. Working for the unknown since 2021. Our services span a wide variety of audiences and capabilities, but all of them are rooted in inspiring ideas, human connection, and writing your brands future. The world is changing fast. We help you keep up</p>
            </Fade>
            <button className={`text-white border border-[#09E5E5]  rounded-3xl 2xl:rounded-full py-3 px-[24px] 2xl:px-[50px] 2xl:py-[22px] mb-[40px] xl:mb-0 `}>
                <div className="flex justify-center items-center gap-1 2xl:gap-[10px]">
                    <p className="text-[12px] 2xl:text-[25px] font-ethosNovaRegular">See all Our Works</p>
                    <img src={arrow} className='2xl:h-[15px] w-[15px]' alt="" />
                </div>
            </button>
        </div>
    );
};

export default AboutUsSection;