'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

export function Header({ athlete }: { athlete: any }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-[#fc5200] py-4 px-6 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-xl font-bold" href="#">
          Sportif-AI
        </Link>
        <nav className="space-x-4">
          <Link className="hover:underline" href="#">
            Dashboard
          </Link>
          <Link className="hover:underline" href="#">
            Goals
          </Link>
          <Link className="hover:underline" href="#">
            Training
          </Link>
          <Link className="hover:underline" href="#">
            Settings
          </Link>
        </nav>
        {athlete && (
          <div className="relative inline-block text-left">
            <div>
              <button onClick={toggleDropdown} type="button" className="inline-flex items-center space-x-2 px-3 py-2 text-sm font-semibold text-white" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <h2>Hello, {athlete.firstname} {athlete.lastname}</h2>
                <Image src={athlete.profile} alt="Athlete profile" width={50} height={50} />
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="white" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div className="py-1" role="none">
                  <Link href="/logout" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
