/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import { workType, workCardData, settings } from './data';
import './OurWorkSection.css'
import arrow from '../../../../images/ourwork/arrow.png';
import img1 from '../../../../images/ourwork/bg1.png'
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { Box } from "@mui/material";
import { Tabs } from "antd";
import { Tab } from "react-tabs";
import BasicTabs from "./CustomTabPanel";
import ButtonComponent from "./ButtonComponent";



const OurWorkSection = () => {
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
        <div id="our-work" className="our-work bg-black text-white pt-[260px]  pl-[125px] pr-[125px]">

            <h1 className="our-work-title rota-bold text-7xl mb-20">Our Work</h1>

            {isSmallDevice ? (

                <BasicTabs></BasicTabs>
                // <SwiperComponent></SwiperComponent>
                // <div role="tablist" className="work-mobile  tabs tabs-bordered border border-rose-400 w-[349px] h-[350.358px]">
                //     <input type="radio" name="my_tabs_1" role="tab" className="tab-title-1  border border-green-400 tab text-white text-[12px] w-[500px]" aria-label={workType[0].name} />
                //     <div role="tabpanel" 
                //     className="work-1   text-[20px]  tab-content p-10">Tab content 1</div>

                //     <input type="radio" name="my_tabs_1" role="tab" className="tab-title-2 tab text-white text-[12px]" aria-label={workType[1].name} checked />
                //     <div role="tabpanel" 
                //     className="work-2  text-[20px] tab-content p-10">Tab content 2</div>

                //     <input type="radio" name="my_tabs_1" role="tab" className="tab-title-3 tab text-white text-[12px]" aria-label={workType[2].name} />
                //     <div role="tabpanel" 
                //     className="work-3 text-[20px] tab-content p-10">Tab content 3</div>
                // </div>
            ) : (
                <div className="rota-light text-3xl ">
                    <div className="mb-[87px] flex gap-[80px]  w-auto">
                        {
                            workType.map(work => <div
                            key={work.id}
                            >
                                <Link className="work-list ">{work.name}</Link>
                            </div>)
                        }
                    </div>

                    <div className="mt-20">
                        <div className="work-card  grid grid-cols-4 gap-[75px] pr-[123px]">
                            {
                                workCardData.map(singleCard =>
                                    <motion.div
                                        whileHover={{ scale: 1.3 }}
                                        whileTap={{ scale: 2 }}
                                        transition={{ duration: 1.5 }}

                                        key={Math.random()}
                                        className="single-card w-[360.664px] h-[362.067px]  pr-24">
                                        <div className="pl-6 pt-6">
                                            <h1 className="card-name rota-bold text-5xl ">{singleCard.name}</h1>
                                            <p className="work-type ethos-nova-regular text-base">{singleCard.typeOfWork}</p>
                                        </div>
                                    </motion.div>)
                            }
                        </div>
                    </div>

                    <button
                        className="button ethos-nova-regular border border-green-300 text-2xl mt-[102px] rounded-full bg-black-300 pl-10 pr-14 pt-4 pb-3"
                    >See All Our Work <img className="work-arrow h-[14.824px] w-[15.72px] " src={arrow} alt="" />
                    </button>

                    
                </div>
            )}



        </div>
    );
};

export default OurWorkSection;