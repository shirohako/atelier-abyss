import type { Metadata } from 'next';
import LinkCard from '../components/LinkCard';

export const metadata: Metadata = {
  title: 'Projects - Atelier Abyss',
  description:
    'Some things I do | 怠惰不前 在原地不停回转 只是在这时间的间隙里随波逐流',
};

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl m-auto mt-5 px-4">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">Blazing Star</h2>
        <h3 className="text-sm">一些笔记存放地</h3>
        <ul className="grid lg:grid-cols-2 gap-5 mt-5">
          <LinkCard
            title="Blog"
            icon="ci:notebook"
            desc="笔记和折腾还有开箱"
            color="blue"
            link="https://blog.abyss.moe"
          />
          <LinkCard
            title="Kirisame House"
            icon="mdi:note-multiple-outline"
            desc="用过的服务器评测"
            color="indigo"
            link="https://idc.abyss.moe"
          />
        </ul>
      </div>
      <div className="mb-5">
        <h2 className="text-2xl font-bold">Master Spark</h2>
        <h3 className="text-sm">自托管图片服务器</h3>
        <ul className="grid lg:grid-cols-2 gap-5 mt-5">
          <LinkCard
            title="この素晴らしい世界に爆焔を!"
            icon="ic:outline-image"
            desc="爆裂魔法はロマンなんです!"
            color="purple"
            link="https://i.abyss.moe"
          />
          <LinkCard
            title="Nozomi"
            icon="ph:image-bold"
            desc="梦与现交错之际"
            color="yellow"
            locked
          />
        </ul>
      </div>
      <div className="mb-5">
        <h2 className="text-2xl font-bold">Stardust Reverie</h2>
        <h3 className="text-sm">其他</h3>
        <ul className="grid lg:grid-cols-2 gap-5 mt-5">
          <LinkCard
            title="Star Piece"
            icon="iconoir:mastodon"
            desc="自用的 Mastodon 社交网络"
            color="cyan"
            link="https://m.abyss.moe"
          />
          <LinkCard
            title="Akari"
            icon="carbon:analytics"
            desc="自托管的 Web Analytics"
            color="teal"
            link="https://akari.abyss.moe"
          />
          <LinkCard
            title="Mailcow"
            icon="mdi:email-multiple-outline"
            desc="自托管的邮件服务"
            color="pink"
            locked
          />
          <LinkCard
            title="Kuma"
            icon="majesticons:status-online"
            desc="服务在线情况报告"
            color="indigo"
            link="https://kuma.abyss.moe"
          />
        </ul>
      </div>
    </div>
  );
}
