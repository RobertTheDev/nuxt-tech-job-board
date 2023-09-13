<template>
  <div class="auth-page-container">
    <h1>Login</h1>
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

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
