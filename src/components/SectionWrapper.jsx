const SectionWrapper = ({ children, className = "", id, noWrapper = false }) => {
  if (noWrapper) {
    return (
      <section
        id={id}
        className={`relative z-10 ${className}`}
      >
        {children}
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`relative z-10 ${className}`}
    >
      <div className="max-w-[1300px] mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="theme-card transition-all duration-500">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
