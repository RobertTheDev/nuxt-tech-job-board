<template>
  <div class="account-settings-page-container">
    <div class="account-settings-menu-container">
      <NuxtLink
        v-for="accountSettingsMenuLink in accountSettingsMenuLinks"
        :key="accountSettingsMenuLink.href"
        :to="accountSettingsMenuLink.href"
        >{{ accountSettingsMenuLink.name }}</NuxtLink
      >
    </div>
    <div class="account-settings-page-content-container">
      <slot />
    </div>
  </div>
</template>

<script setup>
import accountSettingsMenuLinks from '../../lib/links/accountSettingsMenuLinks';
</script>
