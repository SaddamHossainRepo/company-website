import { Fade } from "react-awesome-reveal";
import mMobile from "/mMobile.png";
import mTablet from "/mTablet.png"

const ProductsSection = () => {
    const gridContainerStyle = {
        gridGap: 0,
    };

    return (
        <div className="xl:mx-[125px] mt-[120px] mx-[20px] text-white">
            {/* mobile section */}

            <div className="xl:grid xl:grid-cols-2 items-center 2xl:my-[260px] xl:my-[250px]" style={gridContainerStyle}>
                <div className="xl:w-[484px] xl:mr-[135px]">
                    <Fade direction="left" duration={1000}>
                        <h3 className="xl:text-[32px] font-lotaBold 2xl:text-[60px] text-[20px] text-white mb-[20px] xl:mb-[30px]  2xl:mb-[35px]">We provide</h3>
                    </Fade>
                    <Fade cascade duration={1000} direction="left">
                        <p className="text-[#FBFBFB] font-ethosNovaRegular 2xl:text-[25px] 2xl:w-[740px] xl:text-[22px]  mb-[25px] text-[12px] ">Knowing the state of your current  cybersecurity posture as well as executing  on continued cybersecurity initiatives is  critical to staying ahead of the constantly  evolving risks that are out there.</p>
                    </Fade>
                </div>
                <Fade direction="left" duration={1500}>
                    <div className="xl:w-[573px] xl:h-[695px] w-[286px] h-[344px] mx-[32px]  2xl:w-[793px] 2xl:h-[962px] grid justify-center items-center" style={{ justifySelf: 'end' }}>
                        <img className="h-full w-full" src={mMobile} alt="Mobile version" />
                    </div>
                </Fade>
            </div>

            <div className="xl:grid xl:grid-cols-2 items-center 2xl:my-[260px] mt-[120px] xl:my-[250px]" style={gridContainerStyle}>
                <div className="xl:w-[484px] xl:mr-[135px]">
                    
                        <h3 className="xl:text-[32px] font-lotaBold 2xl:text-[60px] text-[20px] text-white mb-[20px] xl:mb-[30px]  2xl:mb-[35px]">We provide</h3>
                    <Fade cascade duration={1000} direction="left">
                        <p className="text-[#FBFBFB] font-ethosNovaRegular 2xl:text-[25px] 2xl:w-[740px] xl:text-[22px]  mb-[25px] text-[12px] ">Knowing the state of your current  cybersecurity posture as well as executing  on continued cybersecurity initiatives is  critical to staying ahead of the constantly  evolving risks that are out there.</p>
                    </Fade>
                </div>
                <Fade  duration={4000}>
                    <div className="xl:w-[568.388px] xl:h-[692.911px] w-[286px] h-[344px] mx-[32px]  2xl:w-[793px] 2xl:h-[962px] grid justify-center items-center" style={{ justifySelf: 'end' }}>
                        <img className="h-full w-full" src={mTablet} alt="Mobile version" />
                    </div>
                </Fade>
            </div>

            {/* Tablet section */}
            {/* <div className="xl:grid xl:grid-cols-2 items-center 2xl:my-[260px] xl:my-[250px] mt-[120px]" style={gridContainerStyle}>
                <div className="xl:w-[484px] xl:mr-[135px]">
                    <h3 className="xl:text-[32px] font-lotaBold 2xl:text-[60px] text-[20px] text-white mb-[20px] xl:mb-[30px] 2xl:mb-[35px]">We provide</h3>
                    <Fade cascade direction="left">
                        <p className="text-[#FBFBFB] 2xl:text-[25px] 2xl:w-[740px] xl:text-[22px] font-ethosNovaRegular mb-[25px] text-[12px] ">Knowing the state of your current  cybersecurity posture as well as executing  on continued cybersecurity initiatives is  critical to staying ahead of the constantly  evolving risks that are out there.</p>      
                    </Fade>
                </div >

                <div className="xl:w-[488px] xl:h-[592px] w-[286px] h-[344px] mx-[32px]  2xl:w-[793px] 2xl:h-[962px] grid justify-center items-center" style={{ justifySelf: 'end' }}>
                    <Fade direction="up"> <img className="h-full w-full" src={mTablet} alt="tablet section " /> </Fade>
                </div>
            </div> */}
        </div>
    );
};

export default ProductsSection;
