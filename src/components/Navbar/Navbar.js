import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const route = [
    { id: 1, name: 'Home', link: '/Home' },
    { id: 2, name: 'Projects', link: '/Projects' },
    { id: 3, name: 'About', link: '/About' },
    { id: 4, name: 'Blog', link: '/Blog' },
  ];
  return (
    <div>
      <div
        className="h-6 w-6 md:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}{' '}
      </div>
      <ul
        className={`md:flex justify-center duration-500 absolute ${
          open ? 'top-6' : 'top-[-120px]'
        }
        }`}
      >
        {route.map((item) => (
          <Link item={item} key={item.id}></Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
