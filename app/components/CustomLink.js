'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, prefetch = true, children }) => {
  const pathname = usePathname();
  const active = pathname === path;
  return (
    <div>
      <Link prefetch={prefetch} className={active ? 'text-blue-600' : ''} href={path}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;