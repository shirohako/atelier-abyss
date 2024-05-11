<template>
  <div class="max-w-screen-md m-auto mt-5">
    <div class="mb-5">
      <h2 class="text-2xl font-bold">Stardust Reverie</h2>
      <h3 class="text-sm">服务器在线状态</h3>
      <ul class="grid sm:grid-cols-2 gap-5 mt-5">
        <ServerCard title="Hotaru" location="Japan, Tokyo" color="blue" />
        <ServerCard title="Alice" location="Japan, Tokyo" color="pink" />
        <ServerCard
          title="Konoha"
          location="Canada, Quebec, Montreal"
          color="teal"
        />
        <ServerCard title="Vueko" location="Japan, Tokyo" color="indigo" />
      </ul>
    </div>
    <div class="mb-5">
      <h2 class="text-2xl font-bold">Blazing Star</h2>
      <h3 class="text-sm">一些笔记存放地</h3>
      <ul class="grid sm:grid-cols-2 gap-5 mt-5">
        <ServiceCard
          title="Blog"
          icon="ci:notebook"
          desc="笔记和折腾还有开箱"
          color="blue"
          link="https://blog.abyss.moe"
        />
        <ServiceCard
          title="Kirisame House"
          icon="mdi:note-multiple-outline"
          desc="用过的服务器评测"
          color="indigo"
          link="https://idc.abyss.moe"
        />
      </ul>
    </div>
    <div class="mb-5">
      <h2 class="text-2xl font-bold">Master Spark</h2>
      <h3 class="text-sm">自托管图片服务器</h3>
      <ul class="grid sm:grid-cols-2 gap-5 mt-5">
        <ServiceCard
          title="この素晴らしい世界に爆焔を!"
          icon="ic:outline-image"
          desc="爆裂魔法はロマンなんです!"
          color="purple"
          link="https://i.abyss.moe"
        />
        <ServiceCard
          title="Nozomi"
          icon="ph:image-bold"
          desc="梦与现交错之际"
          color="yellow"
          locked
        />
      </ul>
    </div>
    <div class="mb-5">
      <h2 class="text-2xl font-bold">Stardust Reverie</h2>
      <h3 class="text-sm">其他</h3>
      <ul class="grid sm:grid-cols-2 gap-5 mt-5">
        <ServiceCard
          title="Star Piece"
          icon="iconoir:mastodon"
          desc="自用的 Mastodon 社交网络"
          color="cyan"
          link="https://m.abyss.moe"
        />
        <ServiceCard
          title="Akari"
          icon="carbon:analytics"
          desc="自托管的 Web Analytics"
          color="teal"
          link="https://akari.abyss.moe"
        />
        <ServiceCard
          title="Mailcow"
          icon="mdi:email-multiple-outline"
          desc="自托管的邮件服务"
          color="pink"
          locked
        />
      </ul>
    </div>
  </div>
</template>
