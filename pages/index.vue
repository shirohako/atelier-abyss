<template>
  <div class="flex flex-col items-center max-w-screen-md m-auto mt-20">
    <!-- Part I -->
    <div class="flex flex-col items-center">
      <img
        alt="Profile Avatar"
        class="w-40 rounded-full mb-3"
        src="https://i.psray.net/i/2024/04/21/6624dd2e9a5c4.jpg"
      />
      <h2 class="text-4xl mb-4 font-semibold">ame</h2>
      <p>想像力こそが、すべてを変える</p>
    </div>
    <!-- Part II -->
    <div class="mt-5">
      <a class="align-middle" href="https://blog.abyss.moe/" target="_blank">
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <icon
            name="material-symbols:book-2-outline-rounded"
            class="mr-1 text-lg"
          ></icon>
          <span>Blog</span>
        </button>
      </a>
      <a class="align-middle" href="/projects/">
        <button
          type="button"
          class="text-gray-90 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <icon name="tabler:external-link" class="mr-1 text-lg"></icon>
          <span>Misc</span>
        </button>
      </a>
    </div>
    <!-- Part III -->
    <div class="flex mt-5 gap-x-3">
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <a
          class="px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md border flex justify-center items-center"
          href="https://t.me/ameisbest"
          target="_blank"
        >
          <Icon name="iconoir:telegram" class="mr-2 text-xl" />
          <span class="text-sm">Telegram</span>
        </a>
        <a
          class="px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md border flex justify-center items-center"
          href="https://github.com/shirohako"
          target="_blank"
        >
          <Icon name="mynaui:brand-github" class="mr-2 text-xl" />
          <span class="text-sm">Github</span>
        </a>
        <a
          class="px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md border flex justify-center items-center"
          href="https://steamcommunity.com/id/utaware/"
          target="_blank"
        >
          <Icon name="ph:steam-logo-bold" class="mr-2 text-xl" />
          <span class="text-sm">Steam</span>
        </a>
        <a
          class="px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md border flex justify-center items-center"
          href="https://m.abyss.moe/"
          target="_blank"
        >
          <Icon name="iconoir:mastodon" class="mr-2 text-xl" />
          <span class="text-sm">Mastodon</span>
        </a>
        <a
          class="px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md border flex justify-center items-center"
          href="https://twitter.com/shionari_"
          target="_blank"
        >
          <Icon name="mynaui:brand-twitter" class="mr-2 text-xl" />
          <span class="text-sm">Twitter</span>
        </a>

        <a
          class="px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md border flex justify-center items-center"
          href="https://bgm.tv/user/abyssmoe"
          target="_blank"
        >
          <Icon name="ph:television-simple-bold" class="mr-2 text-lg" />
          <span class="text-sm">Bangumi</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  description:
    "花咲、望み望まれてここに。めでたきものはこれにあり。夢と現と交えては、人も妖も諸共に、ここで遊ぶがいい",
});
</script>
