'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, Users, Tag, LucideIcon } from 'lucide-react';

interface SidebarLinkProps {
  href: string;
  name: string;
  iconName: string;
}

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  box: Package,
  users: Users,
  label: Tag,
};

export default function SidebarLink({ href, name, iconName }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));
  const Icon = iconMap[iconName] || iconMap.home;

  return (
    <Link
      href={href}
      className={`flex items-center p-2 rounded-lg group transition-colors ${
        isActive
          ? 'bg-zinc-800/90 text-white dark:bg-white dark:text-gray-900'
          : 'text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      <Icon
        className={`w-5 h-5 ${isActive ? 'text-white dark:text-gray-900' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'}`}
      />
      <span className="ms-3">{name}</span>
    </Link>
  );
}
