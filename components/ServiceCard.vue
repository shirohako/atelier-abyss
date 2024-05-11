<template>
  <a :href="url" target="_blank">
    <li
      class="flex mb-3 border rounded-md bg-slate-50 hover:bg-slate-100 p-3 cursor-pointer"
    >
      <div
        class="bg-sky-100 rounded-md p-2 w-12 h-12 flex justify-center items-center"
        :class="iconBackground"
      >
        <Icon :name="props.icon" class="text-2xl" :class="iconColor" />
      </div>
      <div class="ml-3 grow flex flex-col justify-center">
        <h4 class="text-base font-semibold">{{ props.title }}</h4>
        <p class="text-xs align-middle">
          <Icon name="mynaui:label" />
          {{ desc }}
        </p>
      </div>
      <div class="self-center">
        <Icon v-if="!props.locked" name="mdi:web" />
        <Icon v-else name="material-symbols-light:lock" />
      </div>
    </li>
  </a>
</template>

<script setup>
import { defineProps } from "vue";

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

// 链接URL
const url = computed(() => {
  return props.locked ? null : props.link ?? null;
});

const props = defineProps({
  title: {
    type: String,
    default: "Untitled",
  },
  desc: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "iconoir:mastodon",
  },
  color: {
    type: String,
    default: "blue-1",
  },
  locked: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    default: null,
  },
});
</script>
