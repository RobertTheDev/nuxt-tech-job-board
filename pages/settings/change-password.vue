<template>
  <!-- Wrap Content With The Account Settings Menu Component. -->
  <AccountSettingsMenu>
    <!-- Change Password Form Component. -->
    <ChangePasswordForm />
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
// Use Unauthenticated Middleware To Prevent Unauthenticated Use.
definePageMeta({
  middleware: 'unauthenticated',
});

// Seo Title And Content.
useHead({
  title: 'Change Password',
  meta: [
    {
      name: 'description',
      content:
        'Enter your new and current passwords to change password. Your new password must not be the same as your existing one.',
    },
  ],
});
</script>
