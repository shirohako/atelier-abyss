import { useMemo } from 'react';
import { Globe, Lock, Tag } from 'lucide-react';

interface LinkCardProps {
  title?: string;
  desc?: string;
  icon?: string;
  color?: 'blue' | 'indigo' | 'pink' | 'teal' | 'purple' | 'cyan' | 'yellow';
  locked?: boolean;
  link?: string | null;
}

const colors = {
  blue: { bg: 'bg-sky-100', icon: 'text-sky-600' },
  indigo: { bg: 'bg-indigo-100', icon: 'text-indigo-600' },
  pink: { bg: 'bg-pink-100', icon: 'text-pink-600' },
  teal: { bg: 'bg-teal-100', icon: 'text-teal-600' },
  purple: { bg: 'bg-purple-100', icon: 'text-purple-600' },
  cyan: { bg: 'bg-cyan-100', icon: 'text-cyan-600' },
  yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-600' },
};

export default function LinkCard({
  title = 'Untitled',
  desc = '',
  icon = 'iconoir:mastodon',
  color = 'blue',
  locked = false,
  link = null,
}: LinkCardProps) {
  // 左侧图标背景颜色
  const iconBackground = useMemo(() => {
    const colorConfig = colors[color];
    return colorConfig?.bg || 'bg-sky-100';
  }, [color]);

  // 左侧图标颜色
  const iconColor = useMemo(() => {
    const colorConfig = colors[color];
    return colorConfig?.icon || 'text-sky-600';
  }, [color]);

  // 链接URL
  const url = useMemo(() => {
    return locked ? null : (link ?? null);
  }, [locked, link]);

  const cardContent = (
    <div className="flex mb-3 border border-gray-200 rounded-md bg-slate-50 hover:bg-slate-100 p-3 cursor-pointer">
      <div
        className={`rounded-md p-2 w-12 h-12 flex justify-center items-center ${iconBackground}`}
      >
        <Globe className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div className="ml-3 grow flex flex-col justify-center">
        <h4 className="text-base font-semibold">{title}</h4>
        <div className="text-xs flex items-center">
          <Tag className="inline w-3 h-3 leading-5 align-middle mr-1 text-gray-400" />
          <span className="leading-5 align-baseline"> {desc}</span>
        </div>
      </div>
      <div className="self-center text-lg text-gray-600">
        {!locked ? (
          <Globe className="w-6 h-6" />
        ) : (
          <Lock className="w-6 h-6" />
        )}
      </div>
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return <div>{cardContent}</div>;
}
