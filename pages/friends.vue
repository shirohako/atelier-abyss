<template>
  <div
    class="max-w-screen-md m-auto sm:mt-10 grid sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6"
  >
    <FriendsCard
      v-for="site in friends"
      :imageUrl="site.img"
      :title="site.title"
      :desc="site.describe"
      :url="site.url"
    />
  </div>
</template>

<script setup>
const friendDataJson = await $fetch(
  "https://cdn.jsdelivr.net/gh/shirohako/helm@latest/Friends.json"
);
const friends = friendDataJson["groups"][0]["assets"];
</script>
