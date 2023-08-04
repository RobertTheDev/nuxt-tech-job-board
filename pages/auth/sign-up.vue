<template>
  <div class="auth-page-container">
    <SignUpForm />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Sign Up',
  meta: [
    {
      name: 'description',
      content:
        'Sign up to TechBoard to apply for the latest jobs in the tech industry. Yuu can also set up your own company and find future employees for your tech business today.',
    },
  ],
});
</script>
