<template>
  <div>
    <div class="container">
      <NuxtLink
        v-for="accountSettingsMenuLink in accountSettingsMenuLinks"
        :key="accountSettingsMenuLink.href"
        :to="accountSettingsMenuLink.href"
        >{{ accountSettingsMenuLink.name }}</NuxtLink
      >
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import accountSettingsMenuLinks from '../../lib/links/accountSettingsMenuLinks';
</script>

<style scoped>
.container {
  display: flex;
  gap: 10px;
}
</style>
