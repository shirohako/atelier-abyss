import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  IcSharpLiveTv,
  LineMdTwitter,
  TablerBrandTelegram,
} from "@/app/components/icons";
import GamingProfiles from "@/app/components/GamingProfiles";
import { BookMarked, CircleUserRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Atelier Abyss",
  description:
    "Every moment we shared, In these blue skies, I treasure to this day. 我们共享的每一刻 在这碧空之下，我珍视着一切",
};

const PROFILE = {
  name: "ame",
  avatar: "https://i.psray.net/i/2024/04/21/6624dd2e9a5c4.jpg",
  tagline: "想像力こそが、すべてを変える",
} as const;

interface ProfileLink {
  label: string;
  href: string;
  icon: ReactNode;
}

interface LinkGroup {
  title: string;
  links: readonly ProfileLink[];
}

const LINK_GROUPS = [
  {
    title: "Publishing",
    links: [
      {
        label: "Blog",
        href: "https://blog.abyss.moe/",
        icon: <BookMarked className="mr-2 size-4" />,
      },
      {
        label: "GitHub",
        href: "https://github.com/shirohako",
        icon: <CircleUserRound className="mr-2 size-4" />,
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        label: "Telegram",
        href: "https://t.me/ameisbest",
        icon: <TablerBrandTelegram className="mr-2 size-4" />,
      },
      {
        label: "Twitter",
        href: "https://twitter.com/shionari_",
        icon: <LineMdTwitter className="mr-2 size-4" />,
      },
    ],
  },
  {
    title: "Interests",
    links: [
      {
        label: "bgm.tv",
        href: "https://bgm.tv/user/abyssmoe",
        icon: <IcSharpLiveTv className="mr-2 size-4" />,
      },
    ],
  },
] as const satisfies readonly LinkGroup[];

function ProfileHeader() {
  return (
    <header className="flex flex-col items-center">
      <Image
        alt={`${PROFILE.name}'s profile avatar`}
        className="mb-3 size-28 rounded-full object-cover"
        src={PROFILE.avatar}
        width={112}
        height={112}
        priority
      />
      <h1 className="mb-2 text-2xl font-semibold">{PROFILE.name}</h1>
      <p className="text-sm">{PROFILE.tagline}</p>
    </header>
  );
}

function ProfileLinkButton({ link }: { link: ProfileLink }) {
  return (
    <a
      className="inline-flex h-8 items-center justify-center rounded-md border border-gray-300 px-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.icon}
      <span className="text-xs">{link.label}</span>
    </a>
  );
}

function LinkSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-gray-200 py-4 dark:border-gray-700">
      <h2 className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto mt-20 flex w-full max-w-2xl flex-col items-center px-6 pb-12 sm:px-8 lg:px-10">
      <ProfileHeader />

      <nav aria-label="Profile links" className="mt-6 w-full max-w-lg">
        {LINK_GROUPS.map((group) => (
          <LinkSection key={group.title} title={group.title}>
            <div className="flex flex-wrap gap-2">
              {group.links.map((link) => (
                <ProfileLinkButton key={link.label} link={link} />
              ))}
            </div>
          </LinkSection>
        ))}

        <LinkSection title="Gaming">
          <GamingProfiles />
        </LinkSection>
      </nav>
    </div>
  );
}
