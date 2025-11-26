import SkillsCategories from "./SkillsCategories";
import SkillsText from "./SkillsText";
const SkillsMain = () => {
  return (
    <section id="skills" className="relative z-10">
      <div className="max-w-[1200px] px-6 mx-auto py-8 relative overflow-hidden">
        <div className="mb-8">
          <SkillsText />
        </div>
        
        <SkillsCategories />
      </div>
    </section>
  );
};

export default SkillsMain;
