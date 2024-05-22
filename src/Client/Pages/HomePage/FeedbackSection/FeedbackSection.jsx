import '../CollaborationsSection/CollaborationsSection.css';
import './FeedbackSection.css';
import { feedBack, settings } from './data';
import koma from '../../../../images/feedBack/koma.png';
// import test from '../../../../images/feedBack/feedback-bg.png'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import FeedbackTitle from './FeedbackTitle';
import FeedbackLarge from './FeedbackLarge';
import FeedbackSmall from './FeedbackSmall';

const FeedbackSection = () => {
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

    console.log('Window Width:', window.innerWidth);
    console.log('isSmallDevice:', isSmallDevice);

    if (isSmallDevice) {
        console.log('in small')
        return <FeedbackSmall feedBacks={feedBack} />
    }

    console.log('in large')
    return (
        <FeedbackLarge feedBacks={feedBack} />
    );
};

export default FeedbackSection;