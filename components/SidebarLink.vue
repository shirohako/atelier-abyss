<template>
  <NuxtLink
    :href="props.href"
    class="flex items-center p-2 rounded-lg group"
    :class="isActived"
  >
    <Icon :name="props.iconName" class="text-lg" />
    <span class="ml-2">{{ props.name }}</span>
  </NuxtLink>
</template>

<script setup>
const router = useRouter();

const props = defineProps({
  href: {
    type: String,
    default: undefined,
  },
  name: { type: String, default: undefined },
  iconName: { type: String, default: undefined },
});

const isActived = computed(() => {
  if (router.currentRoute.value.href === props.href) {
    return "text-white bg-gray-700 hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700";
  } else {
    return "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700";
  }
});
</script>
