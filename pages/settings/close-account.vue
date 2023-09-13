<template>
  <div class="settings-page-container">
    <div class="settings-page-container-left">
      <div class="settings-page-menu-container">
        <NuxtLink
          v-for="accountSettingsMenuLink in accountSettingsMenuLinks"
          :key="accountSettingsMenuLink.href"
          class="settings-page-menu-link"
          :to="accountSettingsMenuLink.href"
          >{{ accountSettingsMenuLink.name }}</NuxtLink
        >
      </div>
    </div>
    <div class="settings-page-container-center">
      <CloseAccountForm />
    </div>
    <div class="settings-page-container-right" />
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';
import accountSettingsMenuLinks from '@/utils/links/accountSettingsMenuLinks';

// Seo Title And Content.
useHead({
  title: `Close Account | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `To close and delete your account on ${companyName} - and remove all associated data. Enter your password and then type 'DELETE'.`,
    },
  ],
});
</script>
