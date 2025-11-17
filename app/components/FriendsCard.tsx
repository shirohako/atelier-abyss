interface FriendsCardProps {
  title: string;
  imageUrl: string;
  desc?: string;
  url: string;
}

export default function FriendsCard({
  title,
  imageUrl,
  url,
}: FriendsCardProps) {
  const imageAlt = `${title} Profile Avatar`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex px-3 py-2 rounded-sm items-center justify-center border border-gray-300 text-gray-500 bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white min-h-20"
    >
      <img className="size-16 rounded-full" src={imageUrl} alt={imageAlt} />
      <div className="w-full px-5 flex items-center justify-center">
        <div className="w-full">
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <svg
          className="text-xl w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
        </svg>
      </div>
    </a>
  );
}
