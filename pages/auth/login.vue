<template>
  <div class="auth-page-container">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'authenticated',
});

useHead({
  title: 'Log In',
  meta: [
    {
      name: 'description',
      content:
        'Sign in to TechBoard to apply for the latest jobs in the tech industry. Yuu can also set up your own company and find future employees for your tech business today.',
    },
  ],
});
</script>
