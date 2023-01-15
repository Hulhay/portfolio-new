import SkillCardComponent from "../components/SkillCardComponent";
import HeadingComponent from "../components/HeadingComponent"
import { skill } from '../data'

const AboutSection = () => {

    const duration = [500, 1500, 3000, 2000]

    const skillCards = skill.map((skillSet) =>
        <SkillCardComponent skillSet={skillSet} key={skillSet.id} duration={duration[Math.floor(Math.random() * duration.length)]} />
    )

    return (
        <div className="h-full w-full bg-dark-charcoal flex items-center flex-col pb-96">
            <HeadingComponent title={"About"} />
            <div className="flex flex-col w-4/5 justify-center text-justify text-sm md:text-lg lg:flex-row">
                <div className="p-[10px] text-white text-center md:text-2xl">
                    Hai! Saya <span className="text-orange-web font-bold">Prasetyo</span>.<br />
                    Coder yang saat ini berdomisili di Daerah Istimewa Yogyakarta.
                </div>
                <div className="p-[10px] text-white">
                    Seorang penggemar <i>coding</i> yang suka belajar banyak hal baru. Tertarik dalam bidang <i>Website Development</i> dan <i>Machine Learning</i>. Aktif dalam mengerjakan proyek-proyek pribadi dan kolaborasi.
                </div>
            </div>
            <div className="flex flex-wrap w-4/5 justify-center">
                {skillCards}
            </div>
        </div>
    )
}

export default AboutSection