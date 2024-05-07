<template>
  <button
    data-drawer-target="sidebar"
    data-drawer-toggle="sidebar"
    aria-controls="sidebar"
    type="button"
    @click="toggle"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="sidebar"
    ref="drawerEl"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <h1 class="text-lg font-semibold whitespace-nowrap text-center my-2 pb-4 border-b">
        Atelier Abyss
      </h1>
      <ul class="space-y-2 font-medium" ref="sidebarMenu">
        <li>
          <SidebarLink href="/" name="Home" iconName="mynaui:home" />
        </li>
        <li>
          <SidebarLink href="/projects/" name="Projects" iconName="mynaui:box" />
        </li>
        <li>
          <SidebarLink href="/friends/" name="Friends" iconName="mynaui:users-group" />
        </li>
        <li>
          <SidebarLink href="/following/" name="Following" iconName="mynaui:star" />
        </li>
        <li>
          <SidebarLink href="/tools/" name="Quick Reference" iconName="mynaui:label" />
        </li>
      </ul>
    </div>
    <div class="absolute bottom-4 w-full text-xs text-center">
      <p class="mb-1">Copyright © 2018 - 2024</p>
      <a
        href="https://github.com/shirohako/atelier-abyss"
        target="_blank"
        class="cursor-pointer"
      >
        Atelier Abyss
      </a>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted } from "vue";

let _visible = false;
let drawerEl = ref(null);
let sidebarMenu = ref(null);

onMounted(() => {
  sidebarMenu.value.querySelectorAll("a").forEach((menuEl) => {
    menuEl.addEventListener("click", hide);
  });
});

function toggle() {
  if (!_visible) {
    show();
  } else {
    hide();
  }
}

function show() {
  const $drawerEl = drawerEl.value;
  if (!_visible) {
    _createBackdrop();
    $drawerEl.classList.add("transform-none");
    $drawerEl.classList.remove("-translate-x-full");

    // set accessibility attributes
    $drawerEl.setAttribute("aria-modal", "true");
    $drawerEl.setAttribute("role", "dialog");
    $drawerEl.removeAttribute("aria-hidden");

    _visible = true;
  }
}

function hide() {
  const $drawerEl = drawerEl.value;
  if (_visible) {
    $drawerEl.classList.remove("transform-none");
    $drawerEl.classList.add("-translate-x-full");

    // set accessibility attributes
    $drawerEl.setAttribute("aria-hidden", "true");
    $drawerEl.removeAttribute("aria-modal");
    $drawerEl.removeAttribute("role");

    _destroyBackdropEl();
    _visible = false;
  }
}

function _createBackdrop() {
  if (!_visible) {
    const backdropEl = document.createElement("div");
    backdropEl.setAttribute("drawer-backdrop", "");
    backdropEl.classList.add(
      ..."bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30".split(" ")
    );
    document.querySelector("body").append(backdropEl);
    backdropEl.addEventListener("click", () => {
      hide();
    });

    _visible = true;
  }
}

function _destroyBackdropEl() {
  if (_visible && document.querySelector("[drawer-backdrop]") !== null) {
    document.querySelector("[drawer-backdrop]").remove();
  }
}
</script>
