import ExperienceCardComponent from "../components/ExperienceCardComponent";
import HeadingComponent from "../components/HeadingComponent";
import { experience } from "../data";

const ExperienceSection = () => {
  const experienceCard = experience.map((expData) => (
    <ExperienceCardComponent experienceData={expData} key={expData.id} />
  ));

  return (
    <div className="h-full w-full bg-dark-charcoal flex items-center flex-col pb-96">
      <HeadingComponent title={"Experience"} />
      <div className="w-4/5 flex flex-wrap justify-center">
        {experienceCard}
      </div>
    </div>
  );
};

export default ExperienceSection;
