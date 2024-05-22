import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { motion } from 'framer-motion';
import koma from '../../../../images/feedBack/koma.png';
import './feedbackCard.css'



const FeedbackCard = ({ feedback }) => {
    return (
        
        <motion.div
        
        whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: 'easeInOut' }
        }}
        className='feedback w-[450px] h-[676.487px]  pb-20  pl-[36px] pt-[80px] pr-20 text-white'>
        <div className='pb-8 pt-0  w-[45.331px] h-[33.632px]'>
            <img className='koma ' src={koma} alt="" />
        </div>
        <div className='feedback-message-div mt-5'>
            <p className='feedback-message ethos-nova-thin text-3xl w-[383px]'>{feedback.message}</p>
        </div>
        <div className="profile pt-20 flex gap-8 ">
            <div>
                <img className='profile-photo relative right-2 h-[89px] w-[88px] rounded-full' src={feedback.image} alt="" />
            </div>
            <div className='relative right-2'>
                <p className='profile-name rota-bold text-3xl'>{feedback.name}</p>
                <p className='position w-full profile-position ethos-nova-thin text-sm text-[#FBFBFB]'>{feedback.position}</p>
                <img className='mt-2' src={feedback.country} alt="" />
            </div>
        </div>
    </motion.div>
        
    );
};

export default FeedbackCard;