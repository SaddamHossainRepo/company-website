import mLaptop from "/mLaptop.png"
import { Fade, } from "react-awesome-reveal";

const ProductSecitontwo = () => {
    const gridContainerStyle = {
        gridGap: 0,
    };
    return (
        <div className="xl:mx-[125px] 2xl:mb-[260px] xl:mb-[250px] mt-[120px] mx-[20px] justify-between items-center text-white" style={gridContainerStyle}>
            <div className="xl:grid xl:grid-cols-2 items-center 2xl:my-[260px] xl:my-[250px]" style={gridContainerStyle}>
                <div className="xl:w-[484px] xl:mr-[135px]">
                    <Fade direction="left" duration={1050}>
                        <h3 className="xl:text-[32px] font-lotaBold 2xl:text-[60px] text-[20px] text-white mb-[20px] xl:mb-[30px]  2xl:mb-[35px]">We provide</h3>
                    </Fade>
                    <Fade cascade duration={1000} direction="left">
                        <p className="text-[#FBFBFB] font-ethosNovaRegular 2xl:text-[25px] 2xl:w-[740px] xl:text-[22px]  mb-[25px] text-[12px] ">Knowing the state of your current  cybersecurity posture as well as executing  on continued cybersecurity initiatives is  critical to staying ahead of the constantly  evolving risks that are out there.</p>
                    </Fade>
                </div>
                <Fade direction="up" duration={1000}>
                    <div className="xl:w-[585px] xl:h-[448px] w-[286px] h-[220px] mx-[32px]  2xl:w-[810px] 2xl:h-[661px] grid justify-center items-center" style={{ justifySelf: 'end' }}>
                        <img className="h-full w-full" src={mLaptop} alt="Mobile version" />
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default ProductSecitontwo;