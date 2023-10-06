import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState('');
  const router = useRouter();

  const navItems = [
    { text: 'HOME', href: '/' },
    { text: 'SIGNUP', href: '/signup' },
    { text: 'SERVICES', href: '/services' },
    { text: 'LOCATIONS', href: '/locations' },
    { text: 'CARS AVAILABLE', href: '/cars-available' },
  ];

  useEffect(() => {
    const currentPath = router.pathname;
    const activeItem = navItems.find((item) => item.href === currentPath);
    setActiveNavItem(activeItem ? activeItem.text : '');
  }, [router.pathname]);

  return (
    <nav className="bg-[#fff] w-[100%] h-[89px]">
      <ul>
        <li>
          <img
            src="./img/Wheels-logo-black.png"
            alt="Wheels logo"
            className="-mt-2 w-24 h-24 object-contain float-left"
          />
        </li>
      </ul>
      <ul className="p-7 flex justify-end gap-5">
        {navItems.map((navItem) => (
          <Link href={navItem.href} key={navItem.text}>
            <li
              className={`font-mono hover:cursor-pointer duration-500 transition-all ${
                activeNavItem === navItem.text ? 'text-red-500' : 'hover:text-[#e7cf65]'
              }`}
            >
              {navItem.text}
            </li>
          </Link>
        ))}
      </ul>
      <hr className="-mt- border-[#f9e180] border-4 w-[100%]" />
    </nav>
  );
}