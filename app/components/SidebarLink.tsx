"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, type LucideIcon } from "lucide-react";

const iconMap = {
  home: Home,
  users: Users,
} satisfies Record<string, LucideIcon>;

type IconName = keyof typeof iconMap;

interface SidebarLinkProps {
  href: string;
  name: string;
  iconName: IconName;
  onClick?: () => void;
}

function normalizePath(path: string | null) {
  if (!path || path === "/") return "/";
  return path.replace(/\/+$/, "");
}

export default function SidebarLink({
  href,
  name,
  iconName,
  onClick,
}: SidebarLinkProps) {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);
  const targetPath = normalizePath(href);
  const isActive =
    targetPath === "/"
      ? currentPath === "/"
      : currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
  const Icon = iconMap[iconName];

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
      className={`flex items-center p-2 rounded-lg group transition-colors ${
        isActive
          ? "bg-zinc-800/90 text-white dark:bg-white dark:text-gray-900"
          : "text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
      }`}
    >
      <Icon
        className={`w-5 h-5 ${isActive ? "text-white dark:text-gray-900" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"}`}
      />
      <span className="ms-3">{name}</span>
    </Link>
  );
}
