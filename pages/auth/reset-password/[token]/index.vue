<template>
  <div>
    <ResetPasswordForm />
  </div>
</template>

<script setup lang="ts">
import companyName from '@/utils/constants/companyName';

definePageMeta({
  middleware: ['authenticated'],
});

useHead({
  title: `Reset Password | ${companyName}`,
  meta: [
    {
      name: 'description',
      content: `Complete the form to reset your ${companyName} password. Your password must be at least eight characters long containing a letter, number and special character.`,
    },
  ],
});
</script>
