import React from 'react';

const Banner = ({ title, description }) => {
  return (
    <div className="py-10 flex-col gap-10 items-center justify-center">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="text-lg text-gray-500">{description}</p>
    </div>
  );
};

export default Banner;
