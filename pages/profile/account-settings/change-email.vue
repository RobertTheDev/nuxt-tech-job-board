<template>
  <!-- Wrap Content With The Account Settings Menu Component. -->
  <AccountSettingsMenu>
    <!-- Change Email Form Component. -->
    <ChangeEmailForm />
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
// Use Unauthenticated Middleware To Prevent Unauthenticated Use.
definePageMeta({
  middleware: 'unauthenticated',
});

// Seo Title And Content.
useHead({
  title: 'Change Email',
  meta: [
    {
      name: 'description',
      content:
        'Change your email on TechBoard by entering a new email address in the input below and authenticate with your password.',
    },
  ],
});
</script>
