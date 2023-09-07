<template>
  <!-- Wrap Content With The Account Settings Menu Component. -->
  <AccountSettingsMenu>
    <!-- Change Password Form Component. -->
    <ChangePasswordForm />
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

// Use Unauthenticated Middleware To Prevent Unauthenticated Use.
definePageMeta({
  middleware: 'unauthenticated',
});

// Seo Title And Content.
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
