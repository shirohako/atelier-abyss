<template>
  <div class="max-w-screen-md px-4 m-auto mt-5">
    <div class="flex-1">
      <div id="reverse-image-search" class="my-5">
        <h2 class="text-2xl font-bold">Reverse Image Search</h2>
        <h3 class="text-sm">以图搜索</h3>
        <div class="grid sm:grid-cols-2 gap-5 mt-5">
          <LinkCard
            title="iqdb"
            desc="Multi-service image search"
            icon="material-symbols:image-outline-rounded"
            color="blue"
            link="https://iqdb.org/"
          />
          <LinkCard
            title="SauceNAO"
            desc="image source locator"
            icon="material-symbols:imagesmode-outline"
            color="indigo"
            link="https://saucenao.com/"
          />
          <LinkCard
            title="ascii2d"
            desc="二次元画像詳細検索"
            icon="ph:image-square-bold"
            color="teal"
            link="https://ascii2d.net/"
          />
          <LinkCard
            title="trace.moe"
            desc="Anime Scene Search Engine"
            icon="ph:image-square-duotone"
            color="yellow"
            link="https://trace.moe/"
          />
          <LinkCard
            title="搜图Bot酱"
            desc="R18本子反向搜索引擎"
            icon="ph:images"
            color="cyan"
            link="https://soutubot.moe/"
          />
          <LinkCard
            title="AnimeTrace"
            desc="动漫基因库"
            icon="ph:images-square-duotone"
            color="purple"
            link="https://ai.animedb.cn/"
          />
        </div>
      </div>
      <div id="reverse-image-search" class="my-5">
        <h2 class="text-2xl font-bold">Music Database</h2>
        <h3 class="text-sm">音乐数据库</h3>
        <div class="grid sm:grid-cols-2 gap-5 mt-5">
          <LinkCard
            title="VGMdb"
            desc="Video game soundtracks and anime music"
            icon="solar:database-outline"
            color="blue"
            link="https://vgmdb.net/"
          />
          <LinkCard
            title="MusicBrainz"
            desc="An open music encyclopedia that collects music metadata"
            icon="tabler:database-star"
            color="indigo"
            link="https://musicbrainz.org/"
          />
          <LinkCard
            title="Anison Generation"
            desc="アニメソング データベース"
            icon="tabler:database-smile"
            color="teal"
            link="http://anison.info/"
          />
          <LinkCard
            title="東方編曲録"
            desc="東方アレンジのデータベース"
            icon="tabler:database-heart"
            color="yellow"
            link="https://touhou.arrangement-chronicle.com/"
          />
          <LinkCard
            title="VocaDB"
            desc="The collaborative database for Vocaloid"
            icon="ph:images"
            color="cyan"
            link="https://vocadb.net/"
          />
          <LinkCard
            title="https://www.dojin-music.info/"
            desc="同人音楽のCD・楽曲・アーティストのデータベース"
            icon="ph:images-square-duotone"
            color="purple"
            link="https://www.dojin-music.info/"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Memos - Atelier Abyss",
  description:
    "Adorable pals who exchanged links with me | 怠惰不前 在原地不停回转 只是在这时间的间隙里随波逐流",
});
</script>
