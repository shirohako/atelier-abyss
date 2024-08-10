<template>
  <div class="max-w-screen-md m-auto mt-5">
    <h2 class="text-2xl font-bold">友链存放地</h2>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6 mt-5">
      <FriendsCard
        v-for="site in friends"
        :key="site.title"
        :image-url="site.img"
        :title="site.title"
        :desc="site.describe"
        :url="site.url"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const friends = ref([]);

useSeoMeta({
  title: "Friends - Atelier Abyss",
  description:
    "Adorable pals who exchanged links with me | 黑色的夜自天而坠 光芒日渐黯淡 你的所在是如此遥远",
});

const friendDataJson = await $fetch(
  "https://raw.githubusercontent.com/shirohako/helm/master/Friends.json"
);

friends.value = JSON.parse(friendDataJson);
friends.value = friends.value["groups"][0]["assets"];
</script>
