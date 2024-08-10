<template>
  <button
    data-drawer-target="sidebar"
    data-drawer-toggle="sidebar"
    aria-controls="sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    @click="toggle"
  >
    <span class="sr-only">Open sidebar</span>
    <Icon name="fluent:list-24-filled" class="text-2xl" />
  </button>

  <aside
    id="sidebar"
    ref="drawerEl"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <h1
        class="text-lg font-semibold whitespace-nowrap text-center my-2 pb-4 border-b"
      >
        Atelier Abyss
      </h1>
      <ul ref="sidebarMenu" class="space-y-2 font-medium">
        <li>
          <SidebarLink href="/" name="Home" icon-name="mynaui:home" />
        </li>
        <li>
          <SidebarLink
            href="/projects/"
            name="Projects"
            icon-name="mynaui:box"
          />
        </li>
        <li>
          <SidebarLink
            href="/friends/"
            name="Friends"
            icon-name="mynaui:users-group"
          />
        </li>
        <li>
          <SidebarLink
            href="/memos/"
            name="Quick Reference"
            icon-name="mynaui:label"
          />
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
const drawerEl = ref(null);
const sidebarMenu = ref(null);

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
