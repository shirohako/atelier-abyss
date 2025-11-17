"use client";

import { useState, useRef, useEffect } from "react";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  const [visible, setVisible] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);
  const sidebarMenuRef = useRef<HTMLUListElement>(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const menuLinks = sidebarMenuRef.current?.querySelectorAll("a");
    menuLinks?.forEach((menuEl) => {
      menuEl.addEventListener("click", hide);
    });

    return () => {
      menuLinks?.forEach((menuEl) => {
        menuEl.removeEventListener("click", hide);
      });
    };
  }, []);

  const toggle = () => {
    if (!visible) {
      show();
    } else {
      hide();
    }
  };

  const show = () => {
    const drawerEl = drawerRef.current;
    if (drawerEl) {
      createBackdrop();
      drawerEl.classList.add("transform-none");
      drawerEl.classList.remove("-translate-x-full");

      drawerEl.setAttribute("aria-modal", "true");
      drawerEl.setAttribute("role", "dialog");
      drawerEl.removeAttribute("aria-hidden");

      setVisible(true);
    }
  };

  const hide = () => {
    const drawerEl = drawerRef.current;
    if (drawerEl) {
      drawerEl.classList.remove("transform-none");
      drawerEl.classList.add("-translate-x-full");

      drawerEl.setAttribute("aria-hidden", "true");
      drawerEl.removeAttribute("aria-modal");
      drawerEl.removeAttribute("role");

      destroyBackdrop();
      setVisible(false);
    }
  };

  const createBackdrop = () => {
    const backdropEl = document.createElement("div");
    backdropEl.setAttribute("drawer-backdrop", "");
    backdropEl.classList.add(
      ..."bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30".split(" ")
    );
    document.querySelector("body")?.append(backdropEl);
    backdropEl.addEventListener("click", hide);
  };

  const destroyBackdrop = () => {
    const backdrop = document.querySelector("[drawer-backdrop]");
    if (backdrop) {
      backdrop.remove();
    }
  };

  return (
    <>
      <button
        data-drawer-target="sidebar"
        data-drawer-toggle="sidebar"
        aria-controls="sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggle}
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>

      <aside
        id="sidebar"
        ref={drawerRef}
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
          <h1 className="text-lg font-extrabold whitespace-nowrap text-center my-2 pb-4 border-b border-gray-300 dark:border-gray-600">
            Atelier Abyss
          </h1>
          <ul ref={sidebarMenuRef} className="space-y-2 font-medium">
            <li>
              <SidebarLink href="/" name="Home" iconName="home" />
            </li>
            <li>
              <SidebarLink href="/projects/" name="Projects" iconName="box" />
            </li>
            <li>
              <SidebarLink href="/friends/" name="Friends" iconName="users" />
            </li>
            <li>
              <SidebarLink
                href="/bookmarks/"
                name="Quick Reference"
                iconName="label"
              />
            </li>
          </ul>
        </div>
        <div className="absolute bottom-4 w-full text-xs text-center">
          <p className="mb-1">Copyright © 2018 - {year}</p>
          <a
            href="https://github.com/shirohako/atelier-abyss"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:underline"
          >
            Atelier Abyss
          </a>
        </div>
      </aside>
    </>
  );
}
