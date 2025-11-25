const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="group">
      <div className="flex flex-col items-center gap-3 relative">
        <div className="theme-surface h-20 w-20 flex items-center justify-center rounded-2xl border border-[#4DB6FF]/30 hover:border-[#4DB6FF]/60 hover:scale-110 transform transition-all duration-500">
          {imgSvg}
        </div>
        <p className="text-[#E8F1FF] font-medium text-sm">{text}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
