import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { people } from '../Data/info';
import Url from './Url';

const FounderPage: React.FC = () => {
  const { foundername } = useParams<{ foundername: string }>();

  const key = foundername ? foundername.toLowerCase() : '';
  const profile = people[key];

  useEffect(() => {
    if (foundername) {
      const foundernameU = foundername.charAt(0).toUpperCase() + foundername.slice(1);
      document.title = `${foundernameU} - Savry`;
    } else {
      document.title = 'Savry Founders';
    }
  }, [foundername]);

  if (!profile) {
    return <div className='min-h-screen flex flex-col items-center justify-center bg-[#E0FAEE]'>
      <h1 className="text-3xl spm-bold mb-2">Profile not found</h1>
    </div>;
  }
  return (
    <div className="flex flex-col min-h-screen bg-[#E0FAEE]">
      <main className="flex flex-col items-center justify-center flex-grow px-4 pt-16 md:pt-5">
        <img
          src={profile.image}
          alt={profile.name}
          className="mb-6 w-28 h-28 md:w-40 md:h-40 object-cover rounded-full"
        />
        <h1 className="text-3xl font-bold mb-2 spm-bold">{profile.name}</h1>
        <p className="text-xl mb-6">{profile.title}</p>
        <Url links={profile.links} />
      </main>

      <footer className="bg-[#E0FAEE] text-center md:text-sm text-[3vw] spm-thin py-24">
        Copyright © 2025 <span className="spm-bold text-[#547f13] text-[0.8rem] md:text-[1.1rem]">SAVRY</span>. All Rights Reserved
      </footer>
    </div>
  );
};

export default FounderPage;
