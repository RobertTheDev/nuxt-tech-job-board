<template>
  <div class="auth-page-container">
    <h1>Reset Password</h1>
    <ResetPasswordForm />
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Reset Password | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `If you have forgotten your password to your ${companyName} account - enter your email address below and we will send you an email with steps to get back in.`,
    },
  ],
});
</script>
