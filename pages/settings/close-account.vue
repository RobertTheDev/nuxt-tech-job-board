<template>
  <div class="settings-page-container">
    <CloseAccountForm />
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

// Seo Title And Content.
useHead({
  title: `Close Account | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `To close and delete your account on ${companyName} - and remove all associated data. Enter your password and then type 'DELETE'.`,
    },
  ],
});
</script>
