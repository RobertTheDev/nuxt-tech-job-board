<template>
  <div class="auth-page-container">
    <ForgotPasswordForm v-if="!verifcationEmailSent" />
    <ResetPasswordForm v-if="verifcationEmailSent" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'authenticated',
});

useHead({
  title: 'Forgot Password',
  meta: [
    {
      name: 'description',
      content:
        'Sign in to TechBoard to apply for the latest jobs in the tech industry. Yuu can also set up your own company and find future employees for your tech business today.',
    },
  ],
});

const verifcationEmailSent = ref<boolean>(false);
</script>
