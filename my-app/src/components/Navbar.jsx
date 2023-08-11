'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="px-10 py-5 border-b border-gray-200 flex gap-10 justify-between items-center">
      <h1 className="text-xl font-bold"> Next</h1>
      <div className="flex gap-5 items-center">
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>
    </header>
  );
};

export default Navbar;
