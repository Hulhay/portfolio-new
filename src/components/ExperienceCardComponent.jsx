import SubHeadingComponent from "./SubHeadingComponent"

const ExperienceCardComponent = ({ experienceData }) => {
    return (
        <div className="flex flex-col pt-2 lg:w-[50%] lg:pr-3">
            <SubHeadingComponent title={experienceData.name} />
            <div className="py-2 flex flex-col justify-center items-center md:flex-row">
                <div className="w-1/2 p-2 lg:w-full">
                    <img src={experienceData.imgUrl} alt={experienceData.name} />
                </div>
                <div className="text-white text-sm pt-2 leading-relaxed md:pt-0 md:pl-2 lg:pr-3">
                    {experienceData.position
                        ? <p>{experienceData.position} | {experienceData.year}</p>
                        : <div></div>}
                    <p className="text-justify" dangerouslySetInnerHTML={{ __html: (experienceData.description) }} />
                    <a href={experienceData.linkUrl} className="text-orange-web underline font-semibold">{experienceData.linkName}</a>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCardComponent