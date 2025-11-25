import royalImage from "../../../public/images/royal_new.jpg";

const HeroPic = () => {
  return (
    <div className="h-full flex items-center justify-center relative">
      <div className="relative transition-transform duration-300 hover:scale-105">
        <img
          src={royalImage}
          alt="Royal Sachan"
          className="max-h-[450px] w-auto rounded-full border-2 border-[#4DB6FF]/40 shadow-2xl shadow-[#1E90FF]/40"
        />
        
      </div>
    </div>
  );
};

export default HeroPic;
