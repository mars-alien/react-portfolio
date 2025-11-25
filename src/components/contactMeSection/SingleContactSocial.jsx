const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link}
      className="text-2xl h-12 w-12 rounded-full flex items-center justify-center theme-glow-border text-[#E8F1FF] hover:text-[#4DB6FF] transition-colors"
      target="_blank"
      rel="noreferrer"
    >
      <Icon />
    </a>
  );
};

export default SingleContactSocial;
