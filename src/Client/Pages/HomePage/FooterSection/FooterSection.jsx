import './FooterSection.css'
import arrow from '../../../../images/footer/arrow.png'
import fb from '../../../../images/footer/fb.png'
import whatsapp from '../../../../images/footer/whatsapp.png'
import insta from '../../../../images/footer/insta.png'
import be from '../../../../images/footer/be.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FooterSection = () => {
    return (
        <div className='footer-div bg-black footer-bg text-white pt-[260px]  pl-[125px] pr-[125px]'>
            <h1 className="contact text-6xl rota-light rota-medium">CONTACT</h1>
            <div className='lets-talk pb-14 flex mt-10'>
                <p className="text-[140px] rota-bold">Lets</p>
                <p className="text-[140px] rota-light">Talk</p>

                <motion.div
                    initial={{ x: 0 }}
                    whileHover={{
                        x: 200,
                        transition: { duration: 0.3, ease: 'easeInOut' }

                    }}

                    className='font-extrabold mt-[68px]'>
                    <img className='arrow inline-block mt-[-10px] h-[100.894px] w-[74.468px] ' src={arrow} alt="" />
                </motion.div>
            </div>

            {/* <hr  className='w-full mb-7'/> */}
            <div className='copyright text-start flex justify-between pb-20' >
                <div className='copyright-policy flex gap-20 ethos-nova-regular font-light text-3xl'>
                    <p>Copy Right by Ethicalden</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='copyright-icon flex  gap-10  mr-20'>
                    <Link><img className='w-[44.296px] h-[44.296px]' src={insta} alt="" /></Link>
                    <Link><img className='w-[44.286px] h-[44.286px]' src={fb} alt="" /></Link>
                    <Link><img className='w-[48.091px] h-[48.091px]' src={be} alt="" /></Link>
                    <Link><img className='w-[48.657px] h-[48.657px]' src={whatsapp} alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;