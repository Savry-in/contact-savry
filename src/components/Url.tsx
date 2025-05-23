import Links from './Links';

interface UrlProps {
  links: {
    website: string;
    mail: string;
    x: string;
    linkedin: string;
  };
}

const Url: React.FC<UrlProps> = ({ links }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-12 relative pt-16 md:pt-0">
      <Links label="Savry" url={links.website} />
      <Links label="Mail" url={links.mail} />
      <Links label="LinkedIn" url={links.linkedin} />
      <Links label="X" url={links.x} />
    </div>
  );
};

export default Url;
