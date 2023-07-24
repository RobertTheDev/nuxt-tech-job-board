<template>
  <div class="profile-menu-container">
    <NuxtLink
      v-for="profileMenuLink of profileMenuLinks"
      :key="profileMenuLink.href"
      :to="profileMenuLink.href"
      >{{ profileMenuLink.name }}</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
import profileMenuLinks from '@/lib/links/profileMenuLinks';
</script>
