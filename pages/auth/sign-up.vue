<template>
  <div>
    <SignUpForm />
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Sign Up | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Sign up to ${companyName} today to see your job posts and companies and get quick access to the job posts you have saved and companies you follow.`,
    },
  ],
});
</script>
