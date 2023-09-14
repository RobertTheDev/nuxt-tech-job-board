<template>
  <div class="header-menu-container">
    <NuxtLink
      v-for="profileMenuLink in profileMenuLinks"
      :key="profileMenuLink.href"
      class="header-menu-link"
      :to="profileMenuLink.href"
      >{{ profileMenuLink.name }}</NuxtLink
    >
    <button @click="signOut()">Log out</button>
  </div>
</template>

<script setup lang="ts">
import profileMenuLinks from '@/utils/links/profileMenuLinks';

const { reset } = await useSession();

function signOut(): void {
  reset().then(() => {
    window.location.reload();
  });
}
</script>
