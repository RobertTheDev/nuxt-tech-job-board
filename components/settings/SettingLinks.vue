<template>
  <NuxtLink
    v-for="settingsMenuLink in settingsMenuLinks"
    :key="settingsMenuLink.href"
    :to="settingsMenuLink.href"
  >
    {{ settingsMenuLink.name }}
  </NuxtLink>
</template>

<script setup lang="ts">
import settingsMenuLinks from '@/utils/links/settingsMenuLinks';
</script>
