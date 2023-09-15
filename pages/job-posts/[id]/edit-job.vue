<template>
  <div>
    <p>Edit Job Post</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['unauthenticated'],
});

useHead({
  title: 'Edit Job',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
