<template>
  <div>
    <h1>Company Applications</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Company Applications',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
