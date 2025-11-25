import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { animated, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const ContactMeMain = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const container = useSpring({ from: { opacity: 0 }, to: { opacity: inView ? 1 : 0 } });
  const item = useSpring({ from: { opacity: 0, y: 20 }, to: { opacity: inView ? 1 : 0, y: inView ? 0 : 20 } });

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <animated.div
        ref={ref}
        style={container}
        className="max-w-[1200px] mx-auto items-center justify-center px-6 relative z-10"
      >
        <animated.h2 
          className="text-center text-4xl mb-10 heading-font font-semibold theme-gradient-text"
          style={item}
        >
          Contact Me
        </animated.h2>
        
        <animated.div 
          className="theme-card rounded-[32px] px-6 sm:px-10 py-10 sm:py-12 flex flex-col lg:flex-row gap-14"
          style={item}
        >
          {/* Left: make full width so items align nicely on all breakpoints; ContactText inside will switch text alignment */}
          <div className="flex-1 w-full">
            <ContactMeLeft />
          </div>
          {/* Uncomment to show right panel on large screens
          <div className="flex-1 hidden lg:flex justify-center">
            <ContactMeRight />
          </div>
          */}
        </animated.div>
      </animated.div>
    </section>
  );
};

export default ContactMeMain;
