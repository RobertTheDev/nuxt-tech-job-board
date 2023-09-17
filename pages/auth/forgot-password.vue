<template>
  <div class="auth-page-container">
    <SendPasswordResetTokenForm />
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

useHead({
  title: `Forgot Password | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `If you have forgotten your password to your ${companyName} account - enter your email address below and we will send you an email with a link to get back in.`,
    },
  ],
});
</script>
