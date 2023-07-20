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
      content: '',
    },
  ],
});

const verifcationEmailSent = ref(false);
</script>
