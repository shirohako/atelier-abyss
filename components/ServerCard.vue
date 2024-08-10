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
    <div class="flex flex-col items-center gap-1 self-center text-xs">
      <span class="relative inline-flex align-middle h-2.5 w-2.5">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"
        ></span>
        <span
          class="relative inline-flex rounded-full h-2.5 w-2.5"
          :class="statusColor"
        ></span>
      </span>
      <p>{{ statusText }}</p>
    </div>
  </li>
</template>

<script setup>
// 左侧图标颜色组
const colors = [
  { bg: "bg-sky-100", icon: "text-sky-600" },
  { bg: "bg-indigo-100", icon: "text-indigo-600" },
  { bg: "bg-pink-100", icon: "text-pink-600" },
  { bg: "bg-teal-100", icon: "text-teal-600" },
  { bg: "bg-purple-100", icon: "text-purple-600" },
  { bg: "bg-cyan-100", icon: "text-cyan-600" },
  { bg: "bg-yellow-100", icon: "text-yellow-600" },
];

// 左侧图标背景颜色
const iconBackground = computed(() => {
  const color = colors[props.id % 7];
  return color.bg || "bg-sky-100";
});

// 左侧图标颜色
const iconColor = computed(() => {
  const color = colors[props.id % 7];
  return color.icon || "text-sky-600";
});

const statusColor = computed(() => {
  if (Object.prototype.hasOwnProperty.call(statusList, props.status)) {
    return statusList[props.status]["color"];
  } else {
    return statusList["pending"]["color"];
  }
});

const statusText = computed(() => {
  if (Object.prototype.hasOwnProperty.call(statusList, props.status)) {
    return statusList[props.status]["text"];
  } else {
    return statusList["pending"]["text"];
  }
});

const statusList = {
  pending: {
    color: "bg-gray-400",
    text: "Pending",
  },
  0: {
    color: "bg-red-400",
    text: "Offline",
  },
  1: {
    color: "bg-green-400",
    text: "Online",
  },
};

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
  id: {
    type: [String, Number],
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
});
</script>
