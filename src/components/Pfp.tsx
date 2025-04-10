interface PfpProps {
  src?: string;
}

const Pfp: React.FC<PfpProps> = ({ src }) => {
  return (
    <div className="h-28 w-28 rounded-full flex flex-col items-center justify-center mb-4 bg-red-500">
        <img src={src || "Savry.png"} alt="" className="rounded-full"/>
    </div>
  )
}

export default Pfp