<template>
  <AccountSettingsMenu>
    <AccountSettingsForm />
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

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
