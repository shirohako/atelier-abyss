<template>
  <div class="max-w-screen-md m-auto mt-5">
    <h2 class="text-2xl font-bold">友链存放地</h2>
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6 mt-5">
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
    "Adorable pals who exchanged links with me | 御伽噺を耳にして、思い巡らす其れ以上に。生きる幻想が其処に居る。",
});

const friendDataJson = await $fetch(
  "https://raw.githubusercontent.com/shirohako/helm/master/Friends.json"
);

friends.value = JSON.parse(friendDataJson);
friends.value = friends.value["groups"][0]["assets"];
</script>
