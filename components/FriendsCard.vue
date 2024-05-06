<template>
  <a
    :href="url"
    target="_blank"
    class="inline-flex items-center justify-center border text-gray-500 bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white min-h-20"
  >
    <img class="w-20 min-w-20" :src="imageUrl" :alt="imageAlt" />
    <div class="w-full px-5 flex items-center justify-center">
      <div class="w-full">
        <h2 class="font-bold text-lg">{{ title }}</h2>
        <!-- <span class="w-full text-xs">{{desc}}</span> -->
      </div>

      <svg
        class="w-4 h-4 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </div>
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["title", "imageUrl", "desc", "url"]);

const imageAlt = computed(() => {
  return props.title.concat(" ", "Profile Avatar");
});
</script>
