import './ClientSection.css';
import clients from '../../../../images/our-clients/our-clients.png'
import { useEffect, useState } from 'react';

const ClientSection = () => {
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
        <div>

            {isSmallDevice ? (
                <div className='our-client text-white  pl-5 pr-5 pt-[120px] pb-[120px]'>
                    <h1 className='title rota-bold  text-sm pb-[25.55px]'>Our Valuable Clients</h1>
                    <img className='w-[350px]' src={clients} alt="" />

                </div>
            ) : (


                <div className='clientSection-div  bg-black  text-white flex justify-around 
         pr-[125px]  pt-[273px] pb-[260px]'>
                    <div className='w-[462px] flex justify-center items-center'>
                        <h1 className='client-section-title  rota-bold text-[80px]'>Our Valuable Clients</h1>
                    </div>
                    <div className='clients-logo'>
                        <img className='w-[842px] ' src={clients} alt="" />
                    </div>
                </div>
            )}
        </div>

    );
};

export default ClientSection;