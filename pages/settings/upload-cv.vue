<template>
  <!-- Wrap Content With The Account Settings Menu Component. -->
  <AccountSettingsMenu>
    <!-- Upload CV Form Component. -->
    <UploadCVForm />
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
  title: `Upload CV | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Ready to kickstart your tech career? Upload your CV on ${companyName} and open the doors to exciting job opportunities. Our platform connects tech professionals with top companies. Join us today and showcase your skills to potential employers looking for talent like you.`,
    },
  ],
});
</script>
