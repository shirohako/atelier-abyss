<template>
  <div class="max-w-screen-md m-auto mt-5">
    <div class="mb-5">
      <h2 class="text-2xl font-bold">Stardust Reverie</h2>
      <h3 class="text-sm">服务器在线状态</h3>
      <ul class="grid sm:grid-cols-2 gap-5 mt-5">
        <ServerCard
          v-for="(server, id) in serverList"
          :id="id"
          :key="server.name"
          :title="server.name"
          :location="server.location"
          :status="server.status"
        />
      </ul>
    </div>
    <div class="mb-5">
      <h2 class="text-2xl font-bold">Blazing Star</h2>
      <h3 class="text-sm">一些笔记存放地</h3>
      <ul class="grid sm:grid-cols-2 gap-5 mt-5">
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
    <div class="mb-5">
      <h2 class="text-2xl font-bold">Master Spark</h2>
      <h3 class="text-sm">自托管图片服务器</h3>
      <ul class="grid sm:grid-cols-2 gap-5 mt-5">
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
    <div class="mb-5">
      <h2 class="text-2xl font-bold">Stardust Reverie</h2>
      <h3 class="text-sm">其他</h3>
      <ul class="grid sm:grid-cols-2 gap-5 mt-5">
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
</template>

<script setup>
useSeoMeta({
  title: "Projects - Atelier Abyss",
  description:
    "薄冰倒映着燃烧的天空 无形的力量将我们引至注定的场所 黑色的夜自天而坠 光芒日渐黯淡 你的所在是如此遥远",
});

const { data } = await useFetch(
  "https://kuma.abyss.moe/api/status-page/heartbeat/abyss"
);

const serverList = {
  1: {
    name: "Hotaru",
    location: "Japan, Tokyo",
    status: -1,
  },
  2: {
    name: "Vueko",
    location: "Japan, Tokyo",
    status: -1,
  },
  3: {
    name: "Alice",
    location: "Japan, Tokyo",
    status: -1,
  },
  4: {
    name: "Konoha",
    location: "Canada, Quebec, Montreal",
    status: -1,
  },
};

Object.keys(data.value.heartbeatList).forEach(function (serverId) {
  if (Object.prototype.hasOwnProperty.call(serverList, serverId)) {
    const last = data.value.heartbeatList[serverId].pop();
    serverList[serverId]["status"] = last["status"];
  }
});
</script>
