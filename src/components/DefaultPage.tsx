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
      className="mb-4 w-40 h-40 object-cover rounded-full mt-32"
    />
    <h1 className="text-3xl font-bold mb-2 spm-bold">{profile.name}</h1>
    <p className="text-xl mb-4 ">{profile.title}</p>
    <Url links={profile.links} />
    <footer className='text-sm spm-thin relative top-52'>
    Copyright © 2025 <span className='spm-bold text-[#547f13] text-[1.1rem]'>SAVRY</span>. All Rights Reserved
    </footer>
  </div>
  )
}

export default DefaultPage