import { useEffect } from "react";
import SubHeadingComponent from "./SubHeadingComponent"
import Popup from "reactjs-popup"
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExperienceCardComponent = ({ experienceData }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="flex flex-col pt-2 w-full md:w-1/2 lg:pr-3">
            <Popup
                modal
                trigger={
                    <button
                        data-aos={experienceData.id % 2 == 0 ? 'fade-right' : 'fade-left'}
                        data-aos-duration={2000}
                    >
                        <div className="py-4 flex flex-col justify-center items-center md:flex-row">
                            <div className="w-1/2 p-2 md:w-1/3">
                                <img src={experienceData.imgUrl} alt={experienceData.name} className="transition hover:scale-110 duration-500" />
                            </div>
                        </div>
                        <SubHeadingComponent title={experienceData.name} />
                    </button>
                }
            >
                {() => (
                    <div className="bg-black w-4/5 rounded-md p-3 border border-white shadow-sm shadow-white lg:w-1/2">
                        <div className="text-center text-white text-xl pb-4"> {experienceData.name} </div>
                        <div className="text-white">
                            {experienceData.position
                                ? <p className="pb-2">{experienceData.position} | {experienceData.year}</p>
                                : <div></div>}
                            <p className="text-justify" dangerouslySetInnerHTML={{ __html: (experienceData.description) }} />
                            <a href={experienceData.linkUrl} className="text-orange-web underline font-semibold">{experienceData.linkName}</a>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    )
}

export default ExperienceCardComponent