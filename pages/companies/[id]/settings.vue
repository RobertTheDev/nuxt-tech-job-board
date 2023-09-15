<template>
  <div>
    <p>Company Settings</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Company Settings',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
