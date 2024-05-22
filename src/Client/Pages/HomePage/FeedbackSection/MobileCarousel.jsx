import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import './MobileCarousel.css';
import pic6 from '../../../../images/our-team/6.png';
import bdFlag from '../../../../images/our-team/bd-flag.png';
import koma from '../../../../images/feedBack/koma.png';
import { motion } from 'framer-motion';



const data = [
    {
        id: 1,
        message: "Welcome to Ethical Den - The Strategic Digital Company. We are a brand and digital consultancy based in India, partnering globally with leaders across industries to build future products, services, and brands.",
        name: 'Nazmul Islam',
        position: 'Senior Graphics Designer',
        image: pic6,
        country: bdFlag,

    },
    {
        id: 2,
        message: "Welcome to Ethical Den - The Strategic Digital Company. We are a brand and digital consultancy based in India, partnering globally with leaders across industries to build future products, services, and brands.",
        name: 'Nazmul Islam',
        position: 'Senior Graphics Designer',
        image: pic6,
        country: bdFlag,

    },
    {
        id: 3,
        message: "Welcome to Ethical Den - The Strategic Digital Company. We are a brand and digital consultancy based in India, partnering globally with leaders across industries to build future products, services, and brands.",
        name: 'Nazmul Islam',
        position: 'Senior Graphics Designer',
        image: pic6,
        country: bdFlag,

    },
];

export default function MobileCarousel() {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                py: 1,
                overflow: 'auto',
                width: 343,
                scrollSnapType: 'x mandatory',
                '& > *': {
                    scrollSnapAlign: 'center',
                },
                '::-webkit-scrollbar': { display: 'none' },
            }}
        >
            {data.map((item) => (
                <Card 
                
                className='item-card ml-5'
                orientation="vertical" size="lg" key={item.title} variant="plain">
                    <img className='w-[20px] h-[15px] relative top-5' src={koma} alt="" />
                    <div className='ethos-nova-regular  text-xs pl-[10px] pr-[25px] pt-[25px] '>
                        <Typography level="body-md text-white ">{item.message}</Typography>
                    </div>
                    <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
                        <div className='flex justify-between items-start mb-[20px] '>
                            <img className='relative right-4 top-3 h-[41px] w-[41px] rounded-full mr-[10px]' src={item.image} alt="" />
                            <div className='relative right-3'>
                                <p className='mb-0 text-white rota-bold text-xl'>{item.name}</p> <br />
                                <p className='relative bottom-8 text-[rgba(251, 251, 251, 1)] ethos-ethos-nova-thin'>{item.position}</p>
                                <img className='relative bottom-7' src={bdFlag} alt="" />
                            </div>
                        </div>
                        {/* <Typography level="title-md">{item.name}</Typography> */}

                    </Box>
                </Card>
            ))}
        </Box>
    );
}