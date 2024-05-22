import './feedbackSectionThird.css';
import { feedBack } from './data';
import koma from '../../../../images/feedBack/koma.png';
// import test from '../../../../images/feedBack/feedback-bg.png'
import { motion } from 'framer-motion'

const FeedbackSectionThird = () => {

    return (
        <div className="feedback-div bg-black pl-[125px] pr-[125px] text-white pb-[261px]">

            <h1 className="feedback-name rota-bold text-7xl  pb-20">What People are saying about us</h1>


            <div className='feedback-card flex gap-28  '>
                {
                    feedBack.map(singleFeedBack =>
                        <div
                            key={singleFeedBack.id}
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.3, ease: 'easeInOut' }
                                }}
                                className='feedback w-[506px] pb-20 pl-9 pr-20'>
                                <div className='pb-8 pt-9 w-[45.331px] h-[33.632px]'>
                                    <img className='koma' src={koma} alt="" />
                                </div>
                                <div className='feedback-message-div '>
                                    <p className='feedback-message ethos-nova-thin text-3xl w-[383px]'>{singleFeedBack.message}</p>
                                </div>
                                <div className="profile pt-20 flex gap-8">
                                    <div>
                                        <img className='profile-photo h-[89px] w-[88px] rounded-full' src={singleFeedBack.image} alt="" />
                                    </div>
                                    <div>
                                        <p className='profile-name rota-bold text-3xl'>{singleFeedBack.name}</p>
                                        <p className='profile-position ethos-nova-thin text-lg text-[#FBFBFB]'>{singleFeedBack.position}</p>
                                        <img className='mt-2' src={singleFeedBack.country} alt="" />
                                    </div>
                                </div>
                            </motion.div>


                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default FeedbackSectionThird;