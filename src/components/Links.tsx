interface LinksProps {
  label: string;
  url: string;
}

const Links: React.FC<LinksProps> = ({ label, url }) => {
  const onButtonClick = () => {
    window.location.href = url;
  };

  return (
    <div
      className="border-2 h-16 min-w-[22rem] w-[30vw] border-[#B3C8BE] rounded-full flex items-center justify-center hover:scale-105 duration-100 transition-all hover:cursor-pointer spm-normal text-[3vw]  md:text-[1.25rem]"
      onClick={onButtonClick}
    >
      {label}
    </div>
  );
};

export default Links;
