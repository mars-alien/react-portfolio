import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroContactSection from "./HeroContactSection";

const HeroMain = () => {
  return (
    <div className="relative pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 min-h-screen flex items-center z-10">
      <div className="flex flex-col lg:flex-row max-w-[1200px] w-full mx-auto justify-between items-center relative px-6 z-10 gap-10 lg:gap-14">
        
       
        <div className="flex-1 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
      
          <HeroText />
          <HeroContactSection />
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="hidden lg:block">
            <HeroPic />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroMain;
