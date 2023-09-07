<template>
  <!-- Wrap Content With The Account Settings Menu Component. -->
  <AccountSettingsMenu>
    <!-- Change Email Form Component. -->
    <ChangeEmailForm />
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
  title: `Change Email | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Change your email on ${companyName} by entering a new email address in the input below and authenticate with your password.`,
    },
  ],
});
</script>
