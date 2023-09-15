<template>
  <AccountSettingsMenu>
    <ChangePasswordForm />
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: `Change Password | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `o change your password for your account on ${companyName} - enter your new password followed by your current password.`,
    },
  ],
});
</script>
