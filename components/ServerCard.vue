<template>
  <li
    class="flex mb-3 border rounded-md bg-neutral-50 hover:bg-neutral-100 p-3"
  >
    <div
      class="rounded-md p-2 w-12 h-12 flex justify-center items-center"
      :class="iconBackground"
    >
      <Icon name="solar:server-2-linear" class="text-2xl" :class="iconColor" />
    </div>
    <div class="ml-3 grow flex flex-col justify-center">
      <h4 class="text-base font-semibold">{{ props.title }}</h4>
      <p class="text-xs align-middle">
        <Icon name="material-symbols:location-on-outline" />
        {{ location }}
      </p>
    </div>
    <div class="flex flex-col self-center text-xs">
      <div
        class="bg-green-500 w-2.5 h-2.5 rounded-full my-2 m-auto mb-0.5"
      ></div>
      <p>Online</p>
    </div>
  </li>
</template>

<script setup>
import { defineProps, computed } from "vue";

// 左侧图标颜色组
const colors = {
  blue: { bg: "bg-sky-100", icon: "text-sky-600" },
  indigo: { bg: "bg-indigo-100", icon: "text-indigo-600" },
  pink: { bg: "bg-pink-100", icon: "text-pink-600" },
  teal: { bg: "bg-teal-100", icon: "text-teal-600" },
  purple: { bg: "bg-purple-100", icon: "text-purple-600" },
  cyan: { bg: "bg-cyan-100", icon: "text-cyan-600" },
  yellow: { bg: "bg-yellow-100", icon: "text-yellow-600" },
};

// 左侧图标背景颜色
const iconBackground = computed(() => {
  const colorName = props.color;
  const color = colors[colorName];
  return color?.bg || "bg-sky-100";
});

// 左侧图标颜色
const iconColor = computed(() => {
  const colorName = props.color;
  const color = colors[colorName];
  return color?.icon || "text-sky-600";
});

const props = defineProps({
  title: {
    type: String,
    default: "Untitled",
  },
  location: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "solar:server-2-linear",
  },
  color: {
    type: String,
    default: "blue",
  },
  status: {
    type: Number,
    default: 0,
  },
});
</script>
