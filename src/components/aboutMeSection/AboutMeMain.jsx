import AboutMeText from "./AboutMeText";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const AboutMeMain = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const container = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    config: { tension: 200, friction: 24 },
  });
  const item = useSpring({
    from: { opacity: 0, x: -30 },
    to: { opacity: inView ? 1 : 0, x: inView ? 0 : -30 },
    config: { tension: 200, friction: 24 },
  });

  return (
    <section id="about" className="pt-16 pb-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <animated.div
          ref={ref}
          style={container}
          className="theme-card rounded-[32px] px-6 sm:px-12 py-10 sm:py-12"
        >
          <animated.div style={item}>
            <AboutMeText />
          </animated.div>
        </animated.div>
      </div>
    </section>
  );
};

export default AboutMeMain;
