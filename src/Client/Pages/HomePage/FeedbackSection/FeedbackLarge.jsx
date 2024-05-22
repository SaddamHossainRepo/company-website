/* eslint-disable react/prop-types */
import koma from '../../../../images/feedBack/koma.png';
import '../CollaborationsSection/CollaborationsSection.css';
import './FeedbackSection.css';
import { motion } from 'framer-motion';
import FeedbackTitle from './FeedbackTitle';
import FeedbackCard from './FeedbackCard';


export default function FeedbackLarge({ feedBacks }) {
    return (
        <div>
            <FeedbackTitle />
            <div className='grid grid-cols-3 gap-0 pl-[100px]'>
                {
                    feedBacks?.map(feedback =>
                        <FeedbackCard
                            key={feedback.id}
                            feedback={feedback}
                        />
                    )
                }
            </div>
        </div>
    )
}
