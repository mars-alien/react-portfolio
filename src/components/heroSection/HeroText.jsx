import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 h-full justify-center text-center lg:text-left theme-body-text max-w-2xl">
      <h2 className="site-subheading theme-muted font-semibold heading-font transition-colors duration-300">
        Full Stack Web Developer
      </h2>
      <h1 className="site-hero font-semibold uppercase theme-gradient-text heading-font transition-transform duration-500 will-change-transform hover:scale-[1.01]">
        Royal <br className="block md:hidden" />
        Sachan
      </h1>
    </div>
  );
};

export default HeroText;