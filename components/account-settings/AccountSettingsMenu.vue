<template>
  <!-- Account Settings Page Container. -->
  <div class="account-settings-page-container">
    <div class="account-settings-page-sidebar-container">
      <!-- Account Settings Menu Container. -->
      <div class="account-settings-menu-container">
        <!-- Map The Account Settings Menu Links. -->

        <NuxtLink
          v-for="accountSettingsMenuLink in accountSettingsMenuLinks"
          :key="accountSettingsMenuLink.href"
          :to="accountSettingsMenuLink.href"
          :class="
            route.fullPath === accountSettingsMenuLink.href && 'active-link'
          "
          >{{ accountSettingsMenuLink.name }}</NuxtLink
        >
      </div>
    </div>
    <!-- Account Settings Menu Content Container. -->
    <div class="account-settings-page-content-container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Import The Account Settings Menu Links.
import accountSettingsMenuLinks from '../../lib/links/accountSettingsMenuLinks';

const route = useRoute();
</script>

<style lang="scss">
.active-link {
  color: #8046ef;
}
</style>
