import './OurTeanSection.css'
// import { useSpring, animated } from 'react-spring';
import Marquee from "react-fast-marquee";
import { teamMember, settings } from './data.js'
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
// import bgimage from '../../../../images/our-team/bgimage.png'


const OurTeamSection = () => {
    const [isSmallDevice, setIsSmallDevice] = useState(false);

    const handleResize = () => {
        setIsSmallDevice(window.innerWidth <= 768);
    };

    useEffect(() => {

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
        <div className="our-team-main-div bg-black pt-[260px]   text-white pl-[125px] pr-[125px] pb-[260px]">
            <div >
                <h1 className="our-team rota-bold text-[80px]   pb-20">Our Team</h1>
                {isSmallDevice ? (
                    <Slider {...settings}>
                        {teamMember?.map((member) => (
                            <div
                                key={member.id}
                                className="team-card "

                            >
                                <div className="">
                                    <div className='pro-pic team-img '>
                                        <img src={member.image} alt="" />
                                    </div>
                                    <div className='pl-[11px] mt-[25.31px]'>
                                        <h1 className='member-name rota-bold font-bold text-3xl'>{member.name}</h1>
                                        <p className='member-position ethos-nova-thin text-[17px] pb-2'>{member.position}</p>
                                        <div className='country-flag'>
                                            <img className=' w-[28.054px] h-[20.261px]'
                                                src={member.country} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <Marquee

                        pauseOnHover autoFill={false} speed={50}>
                        <div className='our-team-div flex gap-[30px]'>
                            {
                                teamMember.map(member => <div
                                key={member.id}
                                >
                                    <div className="team-card team-bg w-[297.369px] h-[416.477px] rounded-2xl ">
                                        <div className='pro-pic team-img pl-5 pt-5 w-[274.596px] h-[274.596px]   '>
                                            <img src={member.image} alt="" />
                                        </div>
                                        <div className='pl-[11px] mt-[25.31px]'>
                                            <h1 className='member-name rota-bold font-bold text-3xl'>{member.name}</h1>
                                            <p className='member-position ethos-nova-thin text-[17px] pb-2'>{member.position}</p>
                                            <div className='country-flag'>
                                                <img className=' w-[28.054px] h-[20.261px]'
                                                    src={member.country} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </Marquee>
                )}

            </div>
        </div>
    );
};

export default OurTeamSection;