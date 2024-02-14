"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useEffect, useState } from "react";

const isCurrentRoute = (current: string, href: string) => current === href;

const Menu = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div>
      <button
        onClick={toggleMenu}
        className={`${isOpen ? "spinin" : ""} w-7 hidden max-sm:block`}
      >
        <Image
          src="misc/hamburger.svg"
          alt="Menu"
          width={32}
          height={32}
          className={`${isOpen ? "hidden" : ""} dark:invert`}
        />
        <Image
          src="misc/downarrow.svg"
          alt="Menu"
          width={32}
          height={32}
          className={`${isOpen ? "" : "hidden"} rotate-180 dark:invert`}
        />
      </button>
      <div
        className={`nav-links flex max-sm:flex-col max-sm:fixed max-sm:top-[80px] max-sm:right-0 max-sm:w-full max-sm:bg-[--background] max-sm:last:shadow-xl max-sm:last:rounded-b-3xl max-sm:*:hover:rounded-none max-sm:*:flex max-sm:*:items-center max-sm:*:justify-center max-sm:transition-all ${isOpen ? "max-sm:flex max-sm:*:h-12" : "max-sm:*:h-0 max-sm:pointer-events-none max-sm:opacity-0 max-sm:invisible"}`}
      >
        {children}
      </div>
    </div>
  );
};

const Route = ({
  children,
  name,
  path,
}: Readonly<{
  children?: React.ReactNode;
  name: string;
  path: string;
}>) => {
  const pathname = usePathname();

  return (
    <Link
      className={classNames({ active: isCurrentRoute(pathname, path) })}
      href={path}
    >
      {name}
      {children}
      <div className="indicator max-sm:hidden" />
    </Link>
  );
};

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-50 flex bg-[--background] ${scrolling ? "shadow-xl" : ""} fixed w-full justify-center border-b border-neutral-200 dark:border-neutral-800`}
    >
      <div className="flex justify-between items-center max-w-7xl w-full h-20 p-8">
        <Route name="" path="/">
          | brynblack |
        </Route>
        <Menu>
          <Route name="Home" path="/" />
          <Route name="About" path="/about" />
          <Route name="Projects" path="/projects" />
          <Route name="Blog" path="/blog" />
        </Menu>
      </div>
    </nav>
  );
};

export default NavBar;
