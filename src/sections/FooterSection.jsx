import { FaArrowCircleUp } from 'react-icons/fa';

const FooterSection = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="bg-footer h-[600px] bg-bottom bg-cover flex justify-center items-end">
            <FaArrowCircleUp className='text-white text-6xl opacity-50 -translate-y-16 hover:cursor-pointer hover:opacity-75' onClick={scrollToTop} />
        </div>
    )
}

export default FooterSection