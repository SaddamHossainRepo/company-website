import './OurWorkSection.css';
import arrow from '../../../../images/ourwork/arrow.png';

const ButtonComponent = () => {
    return (
        <div>
            <button
                className="button ethos-nova-regular border border-green-300 text-xs mt-[102px] rounded-full bg-black-300 pl-10 pr-14 pt-4 pb-3"
            >See All Our Work 
            <img className="work-arrow relative right-7 h-[8.824px] w-[10.72px] " src={arrow} alt="" />
            </button>
        </div>
    );
};

export default ButtonComponent;