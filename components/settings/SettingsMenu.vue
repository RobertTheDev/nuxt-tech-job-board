<template>
  <!-- Account Settings Page Container. -->
  <div class="account-settings-page-container">
    <div class="account-settings-page-sidebar-container">
      <!-- Account Settings Menu Container. -->
      <div class="account-settings-menu-container">
        <!-- Map The Account Settings Menu Links. -->

        <NuxtLink
          v-for="settingsMenuLink in settingsMenuLinks"
          :key="settingsMenuLink.href"
          :to="settingsMenuLink.href"
          :class="route.fullPath === settingsMenuLink.href && 'active-link'"
          >{{ settingsMenuLink.name }}</NuxtLink
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
// Import The Settings Menu Links.
import settingsMenuLinks from '../../utils/links/settingsMenuLinks';

const route = useRoute();
</script>
../../utils/links/settingsMenuLinks
