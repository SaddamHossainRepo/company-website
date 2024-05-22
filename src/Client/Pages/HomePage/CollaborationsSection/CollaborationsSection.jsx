import Marquee from "react-fast-marquee";
import img1 from '../../../../images/collaborations/1.png'
import img2 from '../../../../images/collaborations/2.png'
import img3 from '../../../../images/collaborations/3.png'
import img4 from '../../../../images/collaborations/4.png'
import './CollaborationsSection.css'


const CollaborationsSection = () => {
    return (
        <div className="collaborations-div bg-black pl-[125px] pt-[260px] pr-[125px] pb-[297px]">
            <h1 className="collaborations-title rota-bold text-7xl text-white pb-[115px]">Our Collaborations</h1>


            <div className='logo-div-1 flex justify-start items-center gap-[197px]'>
                <div className="">
                    <img className='logo-1 w-[271px] h-[71px]' src={img1} alt="" />
                </div>
                <div>
                    <img className='logo-2 h-[45.58px] w-[241px]' src={img2} alt="" />
                </div>
                <div>
                    <img className='logo-3 w-[214px] h-[126px]' src={img3} alt="" />
                </div>
                <div>
                    <img className='logo-4 w-[282px] h-[128px]' src={img4} alt="" />
                </div>

            </div>

            {/* <Marquee pauseOnHover speed={200}>
                <div className="logo-div flex gap-[187px] ">
                    {
                        partner.map(p =>
                            <>
                                <img className='logo' src={p.logo} alt="" />
                            </>
                        )
                    }

                </div>
            </Marquee> */}
        </div>
    );
};

export default CollaborationsSection;