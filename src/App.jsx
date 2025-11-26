import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";

// import ProjectsMain from "./components/projectsSection/ProjectsMain";

import ProjectsMain from "./components/projectsSection/ProjectsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import ChatBot from "./components/ChatBot/ChatBot";
import AchievementModal from "./components/achievement/AchievementModal";


function App() {
  return (
    
      <main className="font-body relative overflow-hidden min-h-screen transition-all duration-500">
  <NavbarMain />
        <HeroMain />
        <AboutMeMain />
        <SkillsMain />
  <ExperienceMain />   
  <ProjectsMain />
        <ContactMeMain />
        <FooterMain />
        <ChatBot />
        <AchievementModal />
      </main>
    
  );
}

export default App;
