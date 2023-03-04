// using below converts to client component
'use client';

import { categories } from '../constants';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';
import { is } from 'immer/dist/internal';

function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split('/').pop() === path;
  };

  // const isActive = (path: string) => {}
  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 ph-10 max-w-6xl mx-auto border-b'>
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
