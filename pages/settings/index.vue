<template>
  <!-- Wrap Content With The Account Settings Menu Component. -->
  <AccountSettingsMenu>
    <!-- Account Settings Form Component. -->
    <AccountSettingsForm />
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

// Seo Title And Content.
useHead({
  title: `Account Settings | ${companyName}`,
  meta: [
    {
      name: 'description',
      content:
        'Use this page to change your account settings. Click and follow the links to make the neccessary changes to your account.',
    },
  ],
});
</script>
