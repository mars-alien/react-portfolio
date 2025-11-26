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
      {/* <p className="text-base sm:text-lg lg:text-xl mt-2 sm:mt-4 leading-relaxed">
        I don't just build websites…<br className="hidden sm:block" /> I convince browsers to behave.
      </p> */}
      
    </div>
  );
};

export default HeroText;
