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
  );
};

export default FounderPage;
