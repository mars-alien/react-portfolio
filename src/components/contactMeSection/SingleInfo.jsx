import { animated } from "@react-spring/web";

const SingleInfo = ({ text, Image }) => {
  return (
    <animated.div 
      className="flex gap-4 items-center justify-start p-4 theme-surface rounded-2xl transition-all duration-300"
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(5px) scale(1.02)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0) scale(1)'; }}
    >
      <Image className="text-2xl text-[#4DB6FF]" />
      <p className="heading-font text-sm font-medium text-[#E8F1FF]">{text}</p>
    </animated.div>
  );
};

export default SingleInfo;
