import { EducationCardComponent } from "../components/EducationCardComponent"
import SubHeadingComponent from "../components/SubHeadingComponent"
import HeadingComponent from "../components/HeadingComponent"
import { educationFormal, educationNonFormal } from "../data"

const EducationSection = () => {

    const educationFormalCard = educationFormal.map((edu) =>
        <EducationCardComponent educationData={edu} key={edu.id} />
    )

    const educationNonFormalCard = educationNonFormal.map((edu) =>
        <EducationCardComponent educationData={edu} key={edu.id} />
    )

    return (
        <div className="h-full w-full bg-dark-charcoal flex items-center flex-col pb-96">
            <HeadingComponent title={"Education"} />
            <div className="w-4/5">
                <SubHeadingComponent title={"Formal"} />
                <div className="flex flex-wrap pb-10">
                    {educationFormalCard}
                </div>
                <SubHeadingComponent title={"Non - Formal"} />
                <div className="flex flex-wrap pb-10">
                    {educationNonFormalCard}
                </div>
            </div>
        </div>
    )
}

export default EducationSection