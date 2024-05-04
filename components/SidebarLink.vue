<template>
  <NuxtLink
    :href="href"
    class="flex items-center p-2 rounded-lg group"
    :class="isActived"
  >
    <Icon :name="iconName" class="text-lg" />
    <span class="ml-2">{{ name }}</span>
  </NuxtLink>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    href: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: undefined,
    },
    iconName: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    isActived() {
      if (this.$route.href === this.href) {
        return "text-white bg-gray-700 hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700";
      } else {
        return "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700";
      }
    },
  },
});
</script>
