import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const SingleProject = ({ name, year, align, image, link, summary, stack }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const containerSpring = useSpring({
    from: { opacity: 0, y: 50, rotateX: -15 },
    to: { opacity: inView ? 1 : 0, y: inView ? 0 : 50, rotateX: inView ? 0 : -15 },
    config: { tension: 220, friction: 22 },
  });

  const titleSpring = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      if (inView) {
        await next({ scale: 1 });
      }
    },
  });

  const linkSpring = useSpring({
    from: { scale: 1 },
  });

  return (
    <animated.div
      ref={ref}
      style={containerSpring}
      className={`flex w-full sm:flex-col-reverse items-start gap-10 ${
        align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
      } sm:flex-col`}
    >
      <div className="flex-1 flex flex-col gap-4">
        <animated.h2 
          className="md:text-3xl sm:text-2xl heading-font theme-gradient-text font-semibold mb-2"
          style={titleSpring}
        >
          {name}
        </animated.h2>
        <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-[#a7b4d1]">
          {year}
        </h2>
        {summary && (
          <p className="text-base leading-relaxed text-[#B7C8E6]">
            {summary}
          </p>
        )}
        {stack && (
          <p className="text-sm tracking-wide text-[#4DB6FF]">
            {stack.join(" • ")}
          </p>
        )}
        <animated.a
          href={link}
          className={`text-lg flex gap-2 items-center text-[#4DB6FF] hover:text-[#E8F1FF] transition-all duration-300 cursor-pointer sm:justify-center ${
            align === "left" ? "md:justify-start" : "md:justify-end"
          }`}
          onMouseDown={() => linkSpring.start({ scale: 0.95 })}
          onMouseUp={() => linkSpring.start({ scale: 1 })}
          style={linkSpring}
        >
          View Project <BsFillArrowUpRightCircleFill className="text-xl" />
        </animated.a>
      </div>
      
      <animated.div 
        className="flex-1 max-h-[320px] max-w-[520px] rounded-[28px] overflow-hidden hover:-translate-y-1 hover:scale-[1.01] transform transition-all duration-400 border border-white/5 bg-[#040a18] shadow-[0_25px_50px_rgba(4,8,20,0.65)]"
        style={{ willChange: "transform" }}
      >
        <img src={image} alt={`${name} project`} className="w-full h-full object-cover" loading="lazy" />
      </animated.div>
    </animated.div>
  );
};

export default SingleProject;
