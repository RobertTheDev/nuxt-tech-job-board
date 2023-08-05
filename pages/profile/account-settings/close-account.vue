<template>
  <!-- Wrap Content With The Account Settings Menu Component. -->
  <AccountSettingsMenu>
    <!-- Close Account Form Component. -->
    <CloseAccountForm />
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
// Use Unauthenticated Middleware To Prevent Unauthenticated Use.
definePageMeta({
  middleware: 'unauthenticated',
});

// Seo Title And Content.
useHead({
  title: 'Close Account',
  meta: [
    {
      name: 'description',
      content:
        'To close your account on TechBoard, typle close in the input below and then enter your password to confirm closure. Plase note that once you have closed your account all your data will be erased and cannot be retrieved.',
    },
  ],
});
</script>
