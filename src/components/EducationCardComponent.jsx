export const EducationCardComponent = ({ educationData }) => {
    return (
        <div className="flex items-center justify-start pt-2 w-full lg:w-[50%]">
            <div className="py-2 w-[65px] lg:w-28">
                <img src={educationData.imgUrl} alt={educationData.name} className="w-full" />
            </div>
            <div className="text-white text-sm pl-2 w-3/5">
                {educationData.name}
                <br />
                {educationData.year}
                <br />
                {educationData.expertise
                    ? educationData.expertise
                    : educationData.course}
            </div>
        </div>
    )
}
