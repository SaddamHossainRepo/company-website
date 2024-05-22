import * as React from 'react';
import koma from '../../../../images/feedBack/koma.png';
import '../CollaborationsSection/CollaborationsSection.css';
import './FeedbackSection.css';
import FeedbackTitle from './FeedbackTitle';
import MobileCarousel from './MobileCarousel';

export default function FeedbackSmall({ feedBacks }) {
    return (
        <>
            <FeedbackTitle />
            <MobileCarousel />
            {/* <div className=''>
                {
                    feedBacks?.map(singleFeedBack =>
                        <>
                            <div
                                className=''>
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
                            </div>


                        </>
                    )
                }
            </div> */}
        </>
    )
}
