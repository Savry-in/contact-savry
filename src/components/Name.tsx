interface NameProps {
  name: string;
  title: string;
}

const Name = ({ name, title }: NameProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="spm-bold text-xl font-bold">{name}</h1>
        <p className="spm-thin">{title}</p>
    </div>
  )
}

export default Name