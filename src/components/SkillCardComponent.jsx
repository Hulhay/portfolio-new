import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillCardComponent = ({ skillSet, duration }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="flex w-1/2 justify-center md:w-1/3" data-aos="fade-right" data-aos-duration={duration}>
            <img
                className="w-[50%] mt-2 p-3 md:p-5 transition hover:-rotate-[30deg] duration-500"
                src={skillSet.imgUrl}
                alt={skillSet.skillName}
                title={skillSet.skillName}
            />
        </div>
    )
}

export default SkillCardComponent