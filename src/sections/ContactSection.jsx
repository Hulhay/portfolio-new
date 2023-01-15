import ProfileCardComponent from "../components/ProfileCardComponent"
import HeadingComponent from "../components/HeadingComponent"
import { sosialMedia } from "../data"
import SocmedCardComponent from "../components/SocmedCardComponent"

const ContactSection = () => {

    const socmed = sosialMedia.map((socmedData) =>
        <SocmedCardComponent key={socmedData.id} socmedData={socmedData} />
    )
    console.log(socmed)

    return (
        <div className="h-full w-full bg-dark-charcoal flex items-center flex-col pb-96 pt-10">
            <HeadingComponent title={"Contact"} />
            <div className="flex flex-col items-center w-4/5 justify-between h-[620px] lg:h-full">
                <ProfileCardComponent />
                <div className="flex flex-wrap">
                    {socmed}
                </div>
            </div>
        </div>
    )
}

export default ContactSection