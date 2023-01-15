import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SocmedCardComponent = ({ socmedData }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="w-1/4 flex items-center justify-center">
            <a
                href={socmedData.linkUrl}
                className="w-2/3 md:w-1/2 lg:w-1/4 py-3 lg:py-0"
                data-aos="zoom-in"
                data-aos-duartion={1500}
            >
                <img
                    src={socmedData.imgUrl}
                    alt={socmedData.name}
                    className="transition hover:scale-125 duration-500"
                />
            </a>
            <p className="hidden">{socmedData.title}</p>
        </div>
    )
}

export default SocmedCardComponent