<template>
  <div class="header-menu-container">
    <NuxtLink
      v-for="accountSettingsMenuLink in accountSettingsMenuLinks"
      :key="accountSettingsMenuLink.href"
      class="header-menu-link"
      :to="accountSettingsMenuLink.href"
      >{{ accountSettingsMenuLink.name }}</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
import accountSettingsMenuLinks from '@/utils/links/accountSettingsMenuLinks';
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
