<template>
  <LoginForm />
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

definePageMeta({
  layout: 'auth',
});

useHead({
  title: `Login | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Login to ${companyName} today to see your job posts and companies and get quick access to the job posts you have saved and companies you follow.`,
    },
  ],
});
</script>
