const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 h-full justify-center text-center lg:text-left theme-body-text max-w-2xl">
      <h2 className="text-sm sm:text-base lg:text-lg uppercase tracking-[0.3em] theme-muted font-semibold heading-font transition-colors duration-300">
        Full Stack Web Developer
      </h2>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase theme-gradient-text heading-font leading-tight transition-transform duration-500 will-change-transform hover:scale-[1.01]">
        Royal <br className="block md:hidden" />
        Sachan
      </h1>
      <p className="text-base sm:text-lg lg:text-xl mt-2 sm:mt-4 leading-relaxed">
        I don't just build websites…<br className="hidden sm:block" /> I convince browsers to behave.
      </p>
      
    </div>
  );
};

export default HeroText;
