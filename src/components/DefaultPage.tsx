import React from 'react'
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
    <div className="founders bg-[#cbf7d2] h-56 w-64 shadow-md rounded-lg hover:shadow-xl duration-300 hover:scale-105 relative left-[48rem] flex flex-col items-center justify-center">
        <h1 className='text-2xl spm-bold mb-10'>Founders</h1>
        <a href="/utkrsh">Utkarsh Dwivedi</a>
        <a href="/abhinav">Abhinav Shukla</a>
        <a href="/tarun">Tarun Rathi</a>
    </div>
  </div>
  )
}

export default DefaultPage