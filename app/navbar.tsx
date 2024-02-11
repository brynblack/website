'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useEffect, useState } from 'react';

const isCurrentRoute = (current: string, href: string) => current === href;

const LinkName = (props: {
  route: string
}) => {
  return (
    <>
      {props.route}
      <div className="indicator max-sm:hidden" />
    </>
  );
};

const Menu = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="hidden max-sm:block">
        <Image src="misc/hamburger.svg" alt="Menu" width={32} height={32} className="dark:invert" />
      </button>
      <div className={`nav-links flex max-sm:flex-col max-sm:fixed max-sm:top-[80px] max-sm:right-0 max-sm:w-full max-sm:bg-[--background] max-sm:last:shadow-xl max-sm:last:rounded-b-3xl max-sm:*:hover:rounded-none max-sm:*:!h-12 max-sm:*:flex max-sm:*:items-center max-sm:*:justify-center ${isOpen ? "max-sm:flex" : "max-sm:hidden"}`}>
        {children}
      </div>
    </div>
  );
};


const NavBar = () => {
  const pathname = usePathname();

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`z-50 flex bg-[--background] ${scrolling ? 'shadow-xl' : ''} fixed w-full justify-center border-b border-neutral-200 dark:border-neutral-800`}>
      <div className="flex justify-between items-center max-w-7xl w-full h-20 p-8">
        <Link className={classNames({ active: isCurrentRoute(pathname, '/') })} href="/">
          <Image src="/misc/trans_flag.svg" alt="Transgender Flag" width={32} height={32} className="rounded"/>
        </Link>
        <Menu>
          <Link className={classNames({ active: isCurrentRoute(pathname, '/') })} href="/">
            <LinkName route="Home" />
          </Link>
          <Link className={classNames({ active: isCurrentRoute(pathname, '/about') })} href="/about">
            <LinkName route="About" />
          </Link>
          <Link className={classNames({ active: isCurrentRoute(pathname, '/projects') })} href="/projects">
            <LinkName route="Projects"/>
          </Link>
          <Link className={classNames({ active: isCurrentRoute(pathname, '/blog') })} href="/blog">
            <LinkName route="Blog"/>
          </Link>
        </Menu>
      </div>
    </nav>
  );
};

export default NavBar;

