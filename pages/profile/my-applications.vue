<template>
  <div>
    <p>My Applications</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'unauthenticated',
});

useHead({
  title: 'My Applications',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>
