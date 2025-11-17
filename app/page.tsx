import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  IcSharpLiveTv,
  LineMdTwitter,
  TablerBrandTelegram,
  PhMastodonLogo,
  PhSteamLogo,
} from "@/app/components/icons";
import { BookMarked, ExternalLink, Send, CircleUserRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Atelier Abyss",
  description:
    "Every moment we shared, In these blue skies, I treasure to this day. 我们共享的每一刻 在这碧空之下，我珍视着一切",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-3xl m-auto mt-20 px-4">
      {/* Part I - Profile */}
      <div className="flex flex-col items-center">
        <Image
          alt="Profile Avatar"
          className="w-40 h-40 rounded-full mb-3 object-cover"
          src="https://i.psray.net/i/2024/04/21/6624dd2e9a5c4.jpg"
          width={160}
          height={160}
          priority
        />
        <h2 className="text-4xl mb-4 font-semibold">ame</h2>
        <p>想像力こそが、すべてを変える</p>
      </div>

      {/* Part II - Action Buttons */}
      <div className="mt-5">
        <a
          className="align-middle"
          href="https://blog.abyss.moe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <BookMarked className="mr-1 w-5 h-5" />
            <span>Blog</span>
          </button>
        </a>
        <Link className="align-middle" href="/projects/">
          <button
            type="button"
            className="inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <ExternalLink className="mr-1 w-5 h-5" />
            <span>Misc</span>
          </button>
        </Link>
      </div>

      {/* Part III - Social Links */}
      <div className="flex mt-5 gap-x-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <a
            className="px-2 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md border border-gray-300 flex justify-center items-center"
            href="https://t.me/ameisbest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TablerBrandTelegram className="mr-2 w-5 h-5" />
            <span className="text-sm">Telegram</span>
          </a>
          <a
            className="px-2 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md border border-gray-300 flex justify-center items-center"
            href="https://github.com/shirohako"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CircleUserRound className="mr-2 w-5 h-5" />
            <span className="text-sm">Github</span>
          </a>
          <a
            className="px-2 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md border border-gray-300 flex justify-center items-center"
            href="https://steamcommunity.com/id/utaware/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PhSteamLogo className="mr-2 w-5 h-5" />
            <span className="text-sm">Steam</span>
          </a>
          <a
            className="px-2 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md border border-gray-300 flex justify-center items-center"
            href="https://m.abyss.moe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PhMastodonLogo className="mr-2 w-5 h-5" />
            <span className="text-sm">Mastodon</span>
          </a>
          <a
            className="px-2 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md border border-gray-300 flex justify-center items-center"
            href="https://twitter.com/shionari_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LineMdTwitter className="mr-2 w-5 h-5" />
            <span className="text-sm">Twitter</span>
          </a>
          <a
            className="px-2 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md border border-gray-300 flex justify-center items-center"
            href="https://bgm.tv/user/abyssmoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IcSharpLiveTv className="mr-2 w-5 h-5" />
            <span className="text-sm">bgm.tv</span>
          </a>
        </div>
      </div>
    </div>
  );
}
