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
      content: '',
    },
  ],
});
</script>
