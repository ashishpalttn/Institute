import React from 'react';
import { alumniData } from '../dummyData/alumniData';

const AlumniPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Alumni Students</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {alumniData.map(alumni => (
          <div key={alumni.id} className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={alumni.profilePic}
              alt={`${alumni.name} Profile`}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">{alumni.name}</h2>
            <p className="text-gray-600 text-center mb-4">Passing Year: {alumni.passingYear}</p>
            <ul className="text-gray-600 mb-2">
              {alumni.achievements.map((achievement, index) => (
                <li key={index} className="flex justify-center text-center bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniPage;
