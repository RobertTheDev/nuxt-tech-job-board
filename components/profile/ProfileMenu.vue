<template>
  <div class="profile-menu-container">
    <NuxtLink
      v-for="profileMenuLink of profileMenuLinks"
      :key="profileMenuLink.href"
      :to="profileMenuLink.href"
      >{{ profileMenuLink.name }}</NuxtLink
    >

    <button @click="logout">Log Out</button>
  </div>
</template>

<script setup lang="ts">
import profileMenuLinks from '@/lib/links/profileMenuLinks';
const { reset } = await useSession();

function logout() {
  reset().then(() => {
    window.location.reload();
  });
}
</script>
