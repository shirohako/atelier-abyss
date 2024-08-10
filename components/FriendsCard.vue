<template>
  <a
    :href="url"
    target="_blank"
    class="inline-flex items-center justify-center border text-gray-500 bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white min-h-20"
  >
    <img class="w-20 min-w-20" :src="imageUrl" :alt="imageAlt" />
    <div class="w-full px-5 flex items-center justify-center">
      <div class="w-full">
        <h3 class="font-semibold text-lg">{{ title }}</h3>
      </div>
      <Icon name="material-symbols:arrow-right-alt-rounded" class="text-xl" />
    </div>
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl: { type: String, required: true },
  desc: { type: String, default: "" },
  url: { type: String, required: true },
});

const imageAlt = computed(() => {
  return props.title.concat(" ", "Profile Avatar");
});
</script>
