<template>
  <div class="auth-page-container">
    <SignUpForm />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'authenticated',
});

useHead({
  title: 'Sign Up',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
