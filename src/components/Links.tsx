const onButtonClick = () => {
    location.href = "https://savry.in"
}
const Links = ({ linkTitle}: {linkTitle: string}) => {
  return (
    <div className="border-2 h-16 min-w-[28rem] w-[30vw] border-[#B3C8BE] rounded-full flex items-center justify-center flex-col hover:scale-105 duration-100 transition-all hover:cursor-pointer spm-normal" onClick={onButtonClick}>
       {linkTitle}
    </div>
  )
}

export default Links