import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-4 mb-10">
      <nav className="container mx-auto flex justify-center">
        <ul className="flex justify-between items-center w-5/6">
          <li className="text-right">
            <Link href="/">
              <span className="custom-font text-black">Yuko Ishida</span>
            </Link>
          </li>
          <li className="text-left">
            <Link href="/credits">
              <span className="custom-font text-black">Credits</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
