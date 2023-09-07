<template>
  <!-- Wrap Content With The Account Settings Menu Component. -->
  <AccountSettingsMenu>
    <!-- Account Settings Form Component. -->
    <AccountSettingsForm />
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
// Use Unauthenticated Middleware To Prevent Unauthenticated Use.
definePageMeta({
  middleware: 'unauthenticated',
});

// Seo Title And Content.
useHead({
  title: 'Account Settings',
  meta: [
    {
      name: 'description',
      content: 'Edit your account settings below by using the form below.',
    },
  ],
});
</script>
