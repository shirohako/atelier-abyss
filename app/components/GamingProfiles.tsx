"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Check, Copy, Gamepad, Gamepad2, X } from "lucide-react";
import { PhSteamLogo } from "@/app/components/icons";

interface GamingProfile {
  platform: string;
  field: string;
  value: string;
  icon: LucideIcon;
}

const profiles: GamingProfile[] = [
  {
    platform: "PSN",
    field: "PSN ID",
    value: "abyssmoe",
    icon: Gamepad2,
  },
  {
    platform: "NS",
    field: "NS Friend Code",
    value: "SW-0591-9300-2538",
    icon: Gamepad,
  },
];

export default function GamingProfiles() {
  const [activeProfile, setActiveProfile] = useState<GamingProfile | null>(null);
  const [copied, setCopied] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!activeProfile) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProfile(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [activeProfile]);

  const openProfile = (
    profile: GamingProfile,
    trigger: HTMLButtonElement,
  ) => {
    triggerRef.current = trigger;
    setCopied(false);
    setActiveProfile(profile);
  };

  const copyValue = async () => {
    if (!activeProfile) return;
    await navigator.clipboard.writeText(activeProfile.value);
    setCopied(true);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <a
          className="inline-flex h-8 items-center justify-center rounded-md border border-gray-300 px-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
          href="https://steamcommunity.com/id/utaware/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PhSteamLogo className="mr-2 size-4" />
          <span className="text-xs">Steam</span>
        </a>
        {profiles.map((profile) => {
          const Icon = profile.icon;

          return (
            <button
              key={profile.platform}
              type="button"
              className="inline-flex h-8 cursor-pointer items-center justify-center rounded-md border border-gray-300 px-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
              onClick={(event) => openProfile(profile, event.currentTarget)}
            >
              <Icon className="mr-2 size-4" />
              <span className="text-xs">{profile.platform}</span>
            </button>
          );
        })}
      </div>

      {activeProfile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProfile(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gaming-profile-title"
            className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-5 shadow-2xl dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Gaming Profile
                </p>
                <h3 id="gaming-profile-title" className="mt-1 text-xl font-semibold">
                  {activeProfile.platform}
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                title="Close"
                aria-label="Close"
                className="flex size-9 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => setActiveProfile(null)}
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-md bg-gray-100 p-4 dark:bg-gray-800">
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {activeProfile.field}
                </p>
                <p className="mt-1 truncate font-mono text-base font-medium">
                  {activeProfile.value}
                </p>
              </div>
              <button
                type="button"
                title={copied ? "Copied" : "Copy"}
                aria-label={copied ? "Copied" : `Copy ${activeProfile.field}`}
                className="flex size-9 shrink-0 items-center justify-center rounded-md text-gray-500 hover:bg-white hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={copyValue}
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
