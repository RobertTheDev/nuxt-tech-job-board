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
