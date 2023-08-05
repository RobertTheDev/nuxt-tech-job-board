<template>
  <!-- Wrap Content With The Account Settings Menu Component. -->
  <AccountSettingsMenu>
    <!-- Upload CV Form Component. -->
    <UploadCVForm />
  </AccountSettingsMenu>
</template>

<script setup lang="ts">
// Use Unauthenticated Middleware To Prevent Unauthenticated Use.
definePageMeta({
  middleware: 'unauthenticated',
});

// Seo Title And Content.
useHead({
  title: 'Upload CV',
  meta: [
    {
      name: 'description',
      content:
        'Upload your CV on TechBoard to make applying for jobs much faster.',
    },
  ],
});
</script>
