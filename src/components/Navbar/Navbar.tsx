'use client';

import Link from 'next/link';
import style from './Navbar.module.css';
import { ToggleButton } from '..';
import { useState } from 'react';
import clsx from 'clsx';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { useTopScroll } from '@/hooks';
import { isClient } from '@/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const client = isClient();
  const isTop = useTopScroll(client ? window : null);

  return (
    <nav
      className={clsx(
        'max-w-7xl px-5 py-3 w-full flex fixed top-0 left-1/2 -translate-x-1/2 z-10 h-20 transition-colors duration-[350ms]',
        isTop ? 'bg-transparent' : 'bg-[var(--color-bg)] shadow-sm',
      )}
    >
      <Link href="/" className="flex items-center text-xl text-">
        home
      </Link>
      <div className="nav-link-desktop hidden md:flex ml-auto gap-10">
        <Link href="#about" className={style.link}>
          about
        </Link>
        <Link href="#projects" className={style.link}>
          projects
        </Link>
      </div>
      <div className="nav-link-mobile md:hidden ml-auto flex items-center">
        <ToggleButton
          inactiveIcon={<HiBars3 className="h-8 w-8" />}
          activeIcon={<HiXMark className="h-8 w-8" />}
          toggled={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
        <div
          className={clsx(
            'absolute top-full left-0 w-full bg-[var(--color-bg)] h-0 transition-all overflow-hidden',
            isMenuOpen ? 'h-32' : 'h-0',
          )}
        >
          <Link href="#about" className={clsx(style.link, style['link-mobile'])}>
            about
          </Link>
          <Link href="#projects" className={clsx(style.link, style['link-mobile'])}>
            projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
