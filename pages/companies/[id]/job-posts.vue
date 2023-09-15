<template>
  <div>
    <p>Company Job Posts</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Job Posts',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
