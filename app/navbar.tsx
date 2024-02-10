'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import classNames from "classnames";

const isCurrentRoute = (current: string, href: string) => current === href;

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex justify-between max-sm:justify-center items-center max-w-7xl w-full h-20 p-8">
        <Link className={classNames({ active: isCurrentRoute(pathname, '/') })} href="/">
          <Image src="/misc/trans_flag.svg" alt="Transgender Flag" width={32} height={32} className="rounded"/>
        </Link>
        <div className="flex max-sm:hidden">
          <Link className={classNames({ active: isCurrentRoute(pathname, '/about') })} href="/about">About</Link>
          <Link className={classNames({ active: isCurrentRoute(pathname, '/projects') })} href="/projects">Projects</Link>
          <Link className={classNames({ active: isCurrentRoute(pathname, '/contact') })} href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
