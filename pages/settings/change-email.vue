<template>
  <AccountSettingsMenu>
    <ChangeEmailForm />
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: `Change Email | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Change your email on ${companyName} by entering a new email address in the input below and authenticate with your password.`,
    },
  ],
});
</script>
