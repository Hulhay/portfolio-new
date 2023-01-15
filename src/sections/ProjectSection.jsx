import ExperienceCardComponent from "../components/ExperienceCardComponent"
import HeadingComponent from "../components/HeadingComponent"
import { projects } from "../data"

const ProjectSection = () => {

    const projectCard = projects.map((projectData) =>
        <ExperienceCardComponent experienceData={projectData} key={projectData.id} />
    )

    return (
        <div className="h-full w-full bg-dark-charcoal flex items-center flex-col pb-[100px]">
            <HeadingComponent title={"Projects"} />
            <div className="w-4/5 flex flex-wrap justify-center">
                {projectCard}
            </div>
        </div>
    )
}

export default ProjectSection