import Url from './Url';
import { people } from '../Data/info';
const profile = people['savry'];
const DefaultPage = () => {
    document.title = `Savry - contact`;
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#E0FAEE]">
    <img
      src={profile.image}
      alt={profile.name}
      className="mb-4 md:w-40 md:h-40 w-28 h-28 object-cover rounded-full relative top-16 md:top-28 "
    />
    <h1 className="text-3xl relative top-16 md:top-28 font-bold mb-2 spm-bold">{profile.name}</h1>
    <p className="text-xl mb-4 relative top-16 md:top-28">{profile.title}</p>
    <Url links={profile.links} />
    <footer className='md:text-sm text-[3vw] spm-thin relative top-[10rem] md:top-[17rem] lg:top-[18rem]'>
    Copyright© 2025 <span className='spm-bold text-[#547f13] text-[0.8rem] md:text-[1.1rem]'>SAVRY</span>. All Rights Reserved
    </footer>
  </div>
  )
}

export default DefaultPage