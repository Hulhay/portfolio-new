import ExperienceSection from "./sections/ExperienceSection";
import ProjectSection from "./sections/ProjectSection";
import SpaceSection from "./sections/SpaceSection";
import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <SpaceSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
