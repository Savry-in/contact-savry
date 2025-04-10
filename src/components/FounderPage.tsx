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
      document.title = `${foundername} - Savry`;
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E0FAEE]">
      <img
        src={profile.image}
        alt={profile.name}
        className="mb-4 w-40 h-40 object-cover rounded-full"
      />
      <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
      <p className="text-xl mb-4">{profile.title}</p>
      <Url links={profile.links} />
    </div>
  );
};

export default FounderPage;
