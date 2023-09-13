<template>
  <div class="header-menu-container">
    <NuxtLink
      v-for="profileMenuLink in profileMenuLinks"
      :key="profileMenuLink.href"
      class="header-menu-link"
      :to="profileMenuLink.href"
      >{{ profileMenuLink.name }}</NuxtLink
    >
    <button>Log out</button>
  </div>
</template>

<script setup lang="ts">
import profileMenuLinks from '@/utils/links/profileMenuLinks';
</script>

<style lang="scss">
.header-menu {
  &-link {
    padding: 16px;
    display: flex;
    align-items: center;
    border-radius: 8px;
  }
  &-container {
    background-color: red;
    position: absolute;
    top: 80px;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 240px;
    border-radius: 16px;
    overflow: hidden;
  }
}
</style>
