'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import FriendsCard from '../components/FriendsCard';

interface Friend {
  title: string;
  img: string;
  describe: string;
  url: string;
}

export default function FriendsPage() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/shirohako/helm/master/Friends.json')
      .then((res) => res.json())
      .then((data) => {
        setFriends(data.assets || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-3xl m-auto mt-5 px-4">
      <h2 className="text-2xl font-bold">友链存放地</h2>
      <div className="bg-blue-100 p-5 my-3 rounded-md text-gray-600">
        交换友链/修改信息：请在{' '}
        <a
          href="https://github.com/shirohako/helm"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          Github 仓库
        </a>{' '}
        创建新的 issue 留言即可
      </div>

      {loading && (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <p className="mt-2 text-gray-600">Loading friends...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 p-5 my-3 rounded-md text-red-600">
          Failed to load friends: {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6 mt-5">
          {friends.map((site) => (
            <FriendsCard
              key={site.title}
              imageUrl={site.img}
              title={site.title}
              desc={site.describe}
              url={site.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}
