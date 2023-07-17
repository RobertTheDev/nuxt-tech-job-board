<template>
  <div class="auth-page-container">
    <ForgotPasswordForm />
    <ResetPasswordForm />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Forgot Password',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
