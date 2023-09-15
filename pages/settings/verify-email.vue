<template>
  <div>
    <h1>Verify Email</h1>
    <VerifyEmailForm />
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: `Verify Email | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Verify your email address on ${companyName} by clicking the verify email button and we will send an email to your account's email address with the verification steps.`,
    },
  ],
});
</script>
