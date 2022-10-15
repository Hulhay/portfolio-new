const SkillCardComponent = ({ skillSet }) => {
    return (
        <div className="flex w-1/2 justify-center md:w-1/3">
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